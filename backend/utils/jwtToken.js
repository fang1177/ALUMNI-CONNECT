const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (id) => {
  // Support both JWT_EXPIRES_IN (common) and JWT_EXPIRE (legacy)
  const expiresIn = process.env.JWT_EXPIRES_IN || process.env.JWT_EXPIRE || '90d';
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn,
  });
};

// Send token response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = generateToken(user._id);

  const cookieDays = parseInt(process.env.JWT_COOKIE_EXPIRE, 10) || 90;
  const options = {
    expires: new Date(Date.now() + cookieDays * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
};

module.exports = sendTokenResponse;
import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Grid, 
  Card, 
  Typography, 
  Chip, 
  Button,
  Rating,
  LinearProgress
} from '@mui/material';
import { matchingAPI } from '../config/api';

const AIMatchingDashboard = ({ user }) => {
  const [mentorMatches, setMentorMatches] = useState([]);
  const [jobMatches, setJobMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMatches();
  }, []);

  const loadMatches = async () => {
    try {
      const [mentorsResponse, jobsResponse] = await Promise.all([
        matchingAPI.getMentorMatches(),
        matchingAPI.getJobMatches()
      ]);
      
      setMentorMatches(mentorsResponse.data);
      setJobMatches(jobsResponse.data);
    } catch (error) {
      console.error('Error loading matches:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRequestMentorship = async (mentorId) => {
    try {
      await matchingAPI.requestMentorship(mentorId);
      alert('Mentorship request sent successfully!');
    } catch (error) {
      alert('Error sending request: ' + error.message);
    }
  };

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        AI-Powered Matches
      </Typography>

      {/* Mentor Matches */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Recommended Mentors
        </Typography>
        <Grid container spacing={3}>
          {mentorMatches.map((match, index) => (
            <Grid item xs={12} md={6} key={match.mentor._id}>
              <Card sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      mr: 2
                    }}
                  >
                    {match.mentor.profile.firstName?.[0]}
                    {match.mentor.profile.lastName?.[0]}
                  </Box>
                  <Box>
                    <Typography variant="h6">
                      {match.mentor.profile.firstName} {match.mentor.profile.lastName}
                    </Typography>
                    <Typography color="textSecondary">
                      {match.mentor.profile.currentPosition} at {match.mentor.profile.company}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Compatibility Score:
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={match.score * 100} 
                    sx={{ mb: 1 }}
                  />
                  <Typography variant="body2">
                    {Math.round(match.score * 100)}% Match
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Skills:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {match.mentor.profile.skills?.slice(0, 5).map(skill => (
                      <Chip key={skill} label={skill} size="small" />
                    ))}
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Rating value={match.mentor.stats?.responseRate / 20 || 0} readOnly size="small" />
                    <Typography variant="caption" display="block">
                      {match.mentor.stats?.mentorshipSessions || 0} sessions
                    </Typography>
                  </Box>
                  <Button 
                    variant="contained" 
                    onClick={() => handleRequestMentorship(match.mentor._id)}
                  >
                    Request Mentorship
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Job Matches */}
      <Box>
        <Typography variant="h5" gutterBottom>
          Recommended Jobs
        </Typography>
        <Grid container spacing={3}>
          {jobMatches.map((match, index) => (
            <Grid item xs={12} md={6} key={match.job._id}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {match.job.title}
                </Typography>
                <Typography color="primary" gutterBottom>
                  {match.job.company}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {match.job.location} • {match.job.type}
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={match.relevance * 100} 
                    sx={{ mb: 1 }}
                  />
                  <Typography variant="body2">
                    {Math.round(match.relevance * 100)}% Relevant
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                  {match.job.requiredSkills?.slice(0, 4).map(skill => (
                    <Chip key={skill} label={skill} size="small" variant="outlined" />
                  ))}
                </Box>

                <Button variant="outlined" fullWidth>
                  Apply Now
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AIMatchingDashboard;
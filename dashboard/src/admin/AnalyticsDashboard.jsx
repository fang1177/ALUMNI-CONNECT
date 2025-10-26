import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const AnalyticsDashboard = ({ metrics }) => {
  const engagementData = [
    { name: 'Jan', mentorships: 45, jobPosts: 23, connections: 156 },
    { name: 'Feb', mentorships: 52, jobPosts: 31, connections: 189 },
    { name: 'Mar', mentorships: 48, jobPosts: 28, connections: 167 },
    { name: 'Apr', mentorships: 67, jobPosts: 35, connections: 234 },
    { name: 'May', mentorships: 73, jobPosts: 42, connections: 278 },
    { name: 'Jun', mentorships: 81, jobPosts: 39, connections: 301 }
  ];

  const skillDistribution = [
    { name: 'Tech', value: 35 },
    { name: 'Business', value: 25 },
    { name: 'Healthcare', value: 15 },
    { name: 'Engineering', value: 20 },
    { name: 'Other', value: 5 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Platform Analytics
      </Typography>

      <Grid container spacing={3}>
        {/* Key Metrics */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Active Mentorships
              </Typography>
              <Typography variant="h4">156</Typography>
              <LinearProgress variant="determinate" value={75} sx={{ mt: 1 }} />
              <Typography variant="body2" color="textSecondary">
                75% success rate
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Job Placements
              </Typography>
              <Typography variant="h4">89</Typography>
              <Typography variant="body2" color="success.main">
                +12% this month
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                AI Match Accuracy
              </Typography>
              <Typography variant="h4">87%</Typography>
              <LinearProgress variant="determinate" value={87} sx={{ mt: 1 }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                User Engagement
              </Typography>
              <Typography variant="h4">92%</Typography>
              <Typography variant="body2" color="success.main">
                +8% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Engagement Chart */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Platform Engagement Trends
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="mentorships" stroke="#8884d8" />
                  <Line type="monotone" dataKey="jobPosts" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="connections" stroke="#ffc658" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Skill Distribution */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Skill Distribution
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={skillDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {skillDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnalyticsDashboard;
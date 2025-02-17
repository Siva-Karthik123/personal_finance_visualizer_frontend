// filepath: /d:/internship/personal-finance-visualizer/frontend/src/components/SpendingInsights.js
import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';

function SpendingInsights({ transactions }) {
  const totalExpenses = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const averageExpense = (totalExpenses / transactions.length).toFixed(2);
  const highestExpense = transactions.reduce((max, transaction) => (transaction.amount > max ? transaction.amount : max), 0);
  const lowestExpense = transactions.reduce((min, transaction) => (transaction.amount < min ? transaction.amount : min), transactions[0]?.amount || 0);

  return (
    <Box sx={{ mb: 3 }}>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid grey',
              transition: 'background-color 0.3s,border-color 0.3s',
              '&:hover': {
                backgroundColor: '#ff9800',
                borderColor:'#ff9800',
              },
            }}
          >
            <Typography variant="body1" gutterBottom>
              Total Expenses:<br/> ₹{totalExpenses}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid grey',
              transition: 'background-color 0.3s,border-color 0.3s',
              '&:hover': {
                backgroundColor: '#ff9800',
                borderColor:'#ff9800',
              },
            }}
          >
            <Typography variant="body1" gutterBottom>
              Average Expense:<br/> ₹{averageExpense}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid grey',
              transition: 'background-color 0.3s,border-color 0.3s',
              '&:hover': {
                backgroundColor: '#ff9800',
                borderColor:'#ff9800',
              },
            }}
          >
            <Typography variant="body1" gutterBottom>
              Highest Expense:<br/> ₹{highestExpense}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid grey',
              transition: 'background-color 0.3s,border-color 0.3s',
              '&:hover': {
                backgroundColor: '#ff9800',
                borderColor:'#ff9800',
              },
            }}
          >
            <Typography variant="body1" gutterBottom>
              Lowest Expense:<br/> ₹{lowestExpense}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SpendingInsights;
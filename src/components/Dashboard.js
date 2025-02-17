// filepath: /d:/internship/personal-finance-visualizer/frontend/src/components/Dashboard.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

function Dashboard({ transactions }) {
  const totalExpenses = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const categoryBreakdown = transactions.reduce((acc, transaction) => {
    if (acc[transaction.category]) {
      acc[transaction.category] += transaction.amount;
    } else {
      acc[transaction.category] = transaction.amount;
    }
    return acc;
  }, {});
  const mostRecentTransactions = transactions.slice(-5);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          sx={{
            p: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <Typography variant="h6">Total Expenses</Typography>
          <Typography variant="h4">₹{totalExpenses}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          sx={{
            p: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <Typography style={{color:'#ff9800'}} variant="h6">Category Breakdown</Typography><br/>
          {Object.entries(categoryBreakdown).map(([category, amount]) => (
            <Typography key={category}>{category}: ₹{amount}</Typography>
          ))}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          sx={{
            p: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <Typography style={{color:'#ff9800'}} variant="h6">Most Recent Transactions</Typography><br/>
          {mostRecentTransactions.map(transaction => (
            <Typography key={transaction._id}>
              {transaction.date}: {transaction.description} - ₹{transaction.amount}
            </Typography>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
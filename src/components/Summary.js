// filepath: /d:/internship/personal-finance-visualizer/frontend/src/components/Summary.js
import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

function Summary({ transactions }) {
  const totalExpenses = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const recentTransactions = transactions.slice(-5);

  return (
    <Box sx={{ mb: 3 }}>
      
      <Typography variant="body1" gutterBottom>
        Total Expenses: ₹{totalExpenses}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Recent Transactions
      </Typography>
      <List>
        {recentTransactions.map(transaction => (
          <ListItem key={transaction._id}>
            <ListItemText
              primary={`${transaction.date}: ${transaction.description}`}
              secondary={`₹${transaction.amount}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Summary;
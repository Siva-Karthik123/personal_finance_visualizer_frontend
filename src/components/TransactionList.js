// filepath: /d:/internship/personal-finance-visualizer/frontend/src/components/TransactionList.js
import React from 'react';
import { List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Transactions
      </Typography>
      <List>
        {transactions.map(transaction => (
          <ListItem
            key={transaction._id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction._id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={`${transaction.date}: ${transaction.description}`}
              secondary={`₹${transaction.amount}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TransactionList;
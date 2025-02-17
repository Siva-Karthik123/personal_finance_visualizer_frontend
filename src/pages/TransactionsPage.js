// filepath: /d:/internship/personal-finance-visualizer/frontend/src/pages/TransactionsPage.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import TransactionForm from '../components/TransactionForm';
import TransactionTable from '../components/TransactionTable';

function TransactionsPage({ transactions, addTransaction, deleteTransaction }) {
  return (
    <>
      <Typography variant="h4" sx={{ color: '#fff', mb: 2, textAlign: 'center' }}>
        Transactions
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
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
            <Typography variant="h6" sx={{ color: '#ff9800', mb: 1 }}>
              Add Transaction
            </Typography>
            <TransactionForm addTransaction={addTransaction} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography variant="h6" sx={{ color: '#ff9800', mb: 1 }}>
              Transaction List
            </Typography>
            <TransactionTable transactions={transactions} deleteTransaction={deleteTransaction} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default TransactionsPage;
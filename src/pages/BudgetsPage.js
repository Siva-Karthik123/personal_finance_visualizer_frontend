// filepath: /d:/internship/personal-finance-visualizer/frontend/src/pages/BudgetsPage.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import BudgetForm from '../components/BudgetForm';
import BudgetVsActualChart from '../components/BudgetVsActualChart';

function BudgetsPage({ transactions, budgets, addBudget }) {
  return (
    <>
      <Typography variant="h4" sx={{ color: '#fff', mb: 2, textAlign: 'center' }}>
        Budgets
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
              Add Budget
            </Typography>
            <BudgetForm addBudget={addBudget} />
          </Paper>
        </Grid>
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
              Budget vs Actual
            </Typography>
            <BudgetVsActualChart transactions={transactions} budgets={budgets} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default BudgetsPage;
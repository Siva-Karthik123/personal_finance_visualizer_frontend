// filepath: /d:/internship/personal-finance-visualizer/frontend/src/pages/DashboardPage.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Dashboard from '../components/Dashboard';
import Summary from '../components/Summary';
import MonthlyExpensesChart from '../components/MonthlyExpensesChart';
import CategoryPieChart from '../components/CategoryPieChart';
import SpendingInsights from '../components/SpendingInsights';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import InsightsIcon from '@mui/icons-material/Insights';

function DashboardPage({ transactions }) {
  return (
    <>
      <Typography variant="h4" sx={{ color: '#fff', mb: 2, textAlign: 'center' }}>
        Dashboard
      </Typography>
      <Dashboard transactions={transactions} /><br/>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
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
            <AccountBalanceWalletIcon sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" sx={{ color: '#ff9800', mb: 1 }}>
              Summary
            </Typography>
            <Summary transactions={transactions} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
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
            <InsightsIcon sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" sx={{ color: '#ff9800', mb: 1 }}>
              Spending Insights
            </Typography>
            <SpendingInsights transactions={transactions} />
          </Paper>
        </Grid>
      </Grid>
      <br/>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
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
            <Typography variant="h6" sx={{ color: '#ff9800', mb: 1 }}>
              Monthly Expenses
            </Typography>
            <MonthlyExpensesChart transactions={transactions} width={300} height={300} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
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
            <Typography variant="h6" sx={{ color: '#ff9800', mb: 1 }}>
              Category Breakdown
            </Typography>
            <CategoryPieChart transactions={transactions} width={300} height={300} />
          </Paper>
        </Grid>
      </Grid>
      <br/>
    </>
  );
}

export default DashboardPage;
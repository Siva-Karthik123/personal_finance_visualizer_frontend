// filepath: /d:/internship/personal-finance-visualizer/frontend/src/components/BudgetVsActualChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {  Box } from '@mui/material';

function BudgetVsActualChart({ transactions, budgets }) {
  const data = budgets.map(budget => {
    const actual = transactions
      .filter(transaction => transaction.category === budget.category && transaction.date.startsWith(budget.month))
      .reduce((acc, transaction) => acc + transaction.amount, 0);
    return {
      category: budget.category,
      budget: budget.amount,
      actual
    };
  });

  return (
    <Box sx={{ mb: 3 }}>
      <BarChart width={600} height={300} data={data} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="budget" fill="orange " />
        <Bar dataKey="actual" fill="gold" />
      </BarChart>
    </Box>
  );
}

export default BudgetVsActualChart;
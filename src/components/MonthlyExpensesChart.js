// filepath: /d:/internship/personal-finance-visualizer/frontend/src/components/MonthlyExpensesChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Box } from '@mui/material';

function MonthlyExpensesChart({ transactions, width = 300, height = 300 }) {
  const data = transactions.reduce((acc, transaction) => {
    const month = new Date(transaction.date).toLocaleString('default', { month: 'long' });
    const existingMonth = acc.find(item => item.month === month);
    if (existingMonth) {
      existingMonth.amount += transaction.amount;
    } else {
      acc.push({ month, amount: transaction.amount });
    }
    return acc;
  }, []);

  return (
    <Box sx={{ mb: 3 }}>
      <BarChart width={width} height={height} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="gold" />
      </BarChart>
    </Box>
  );
}

export default MonthlyExpensesChart;
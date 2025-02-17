// filepath: /d:/internship/personal-finance-visualizer/frontend/src/components/BudgetForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, MenuItem } from '@mui/material';

const categories = ['Food', 'Transport', 'Entertainment', 'Utilities', 'Other'];

function BudgetForm({ addBudget }) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [month, setMonth] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !amount || !month) {
      setError('All fields are required');
      return;
    }
    addBudget({ category, amount, month });
    setCategory('');
    setAmount('');
    setMonth('');
    setError('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        label="Category"
        select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      >
        {categories.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Month"
        type="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Set Budget
      </Button>
    </Box>
  );
}

export default BudgetForm;
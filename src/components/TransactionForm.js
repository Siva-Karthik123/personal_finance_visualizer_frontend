// filepath: /d:/internship/personal-finance-visualizer/frontend/src/components/TransactionForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, MenuItem } from '@mui/material';

const categories = ['Food', 'Transport', 'Entertainment', 'Utilities', 'Other'];

function TransactionForm({ addTransaction }) {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !date || !description || !category) {
      setError('All fields are required');
      return;
    }
    addTransaction({ amount, date, description, category });
    setAmount('');
    setDate('');
    setDescription('');
    setCategory('');
    setError('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      {error && <Typography color="error">{error}</Typography>}
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
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        fullWidth
        required
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
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
      <Button type="submit" variant="contained" color="primary">
        Add Transaction
      </Button>
    </Box>
  );
}

export default TransactionForm;
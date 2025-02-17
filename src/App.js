// filepath: /d:/internship/personal-finance-visualizer/frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import TransactionsPage from './pages/TransactionsPage';
import BudgetsPage from './pages/BudgetsPage';
import Layout from './components/Layout';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import './styles/App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff9800', // Orange color
    },
    background: {
      default: '#121212', // Black background
      paper: '#1e1e1e', // Dark grey background for cards
    },
    text: {
      primary: '#ffffff', // White text
    },
  },
});

function App() {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(err => setError('Failed to fetch transactions'));

    fetch('http://localhost:5000/api/budgets')
      .then(response => response.json())
      .then(data => setBudgets(data))
      .catch(err => setError('Failed to fetch budgets'));
  }, []);

  const addTransaction = (transaction) => {
    fetch('http://localhost:5000/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    })
      .then(response => response.json())
      .then(newTransaction => setTransactions([...transactions, newTransaction]))
      .catch(err => setError('Failed to add transaction'));
  };

  const deleteTransaction = (id) => {
    fetch(`http://localhost:5000/api/transactions/${id}`, {
      method: 'DELETE',
    })
      .then(() => setTransactions(transactions.filter(transaction => transaction._id !== id)))
      .catch(err => setError('Failed to delete transaction'));
  };

  const addBudget = (budget) => {
    fetch('http://localhost:5000/api/budgets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(budget),
    })
      .then(response => response.json())
      .then(newBudget => setBudgets([...budgets, newBudget]))
      .catch(err => setError('Failed to add budget'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout error={error}>
          <Routes>
            <Route path="/" element={<DashboardPage transactions={transactions} />} />
            <Route path="/transactions" element={<TransactionsPage transactions={transactions} addTransaction={addTransaction} deleteTransaction={deleteTransaction} />} />
            <Route path="/budgets" element={<BudgetsPage transactions={transactions} budgets={budgets} addBudget={addBudget} />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
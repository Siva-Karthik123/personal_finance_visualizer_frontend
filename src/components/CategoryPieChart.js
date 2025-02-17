// filepath: /d:/internship/personal-finance-visualizer/frontend/src/components/CategoryPieChart.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Box } from '@mui/material';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];

function CategoryPieChart({ transactions, width = 300, height = 300 }) {
  const data = transactions.reduce((acc, transaction) => {
    const existingCategory = acc.find(item => item.name === transaction.category);
    if (existingCategory) {
      existingCategory.value += transaction.amount;
    } else {
      acc.push({ name: transaction.category, value: transaction.amount });
    }
    return acc;
  }, []);

  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: entry.color, marginRight: '8px' }}></div>
            <span>{entry.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <PieChart width={width} height={height}>
        <Pie
          data={data}
          cx={width / 2}
          cy={height / 2}
          labelLine={false}
          outerRadius={Math.min(width, height) / 2 - 20}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        </PieChart>
      <Box sx={{ ml: 3 }}>
        {renderLegend({ payload: data.map((entry, index) => ({ value: entry.name, color: COLORS[index % COLORS.length] })) })}
      </Box>
    </Box>
  );
}

export default CategoryPieChart;
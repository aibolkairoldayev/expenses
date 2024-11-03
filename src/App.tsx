import React, { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Table from './components/Table/Table';

interface Expense {
  author: string; 
  dateTime: string;
  sum: number;
  category: string;
  comment?: string;
}

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/transactions')
      .then(response => response.json())
      .then(data => setExpenses(data))
      .catch(error => console.error('Ошибка загрузки данных:', error));
  }, []);

  const addExpense = (expense: Expense) => {
    fetch('http://localhost:5000/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expense)
    })
      .then(response => response.json())
      .then(newExpense => setExpenses([...expenses, newExpense]))
      .catch(error => console.error('Ошибка добавления транзакции:', error));
  };

  return (
    <div>
      <Form onAddExpense={addExpense} />
      <Table expenses={expenses} />
    </div>
  );
};

export default App;

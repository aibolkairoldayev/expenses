import React, { useState } from 'react';
import Form from './components/Form/Form';
import Table from './components/Table/Table';

interface Expense {
  name: string;
  date: string;
  amount: number;
  category: string;
  comment?: string;
}

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { name: "Продукты", date: "2023-09-01", amount: 50000, category: "Еда", comment: "Продукты на неделю" },
    { name: "Автобус", date: "2023-09-03", amount: 300, category: "Транспорт", comment: "" },
    { name: "Кино", date: "2023-09-05", amount: 12000, category: "Развлечения", comment: "После работы" },
  ]);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <Form onAddExpense={addExpense} />
      <Table expenses={expenses} />
    </div>
  );
};

export default App;

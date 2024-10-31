import React from 'react';
import styles from './Table.module.scss';

interface Expense {
  name: string;
  date: string;
  amount: number;
  category: string;
  comment?: string;
}

const Table: React.FC<{ expenses: Expense[] }> = ({ expenses }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Дата</th>
          <th>Сумма</th>
          <th>Категория</th>
          <th>Комментарий</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.name}</td>
            <td>{expense.date}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>{expense.comment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

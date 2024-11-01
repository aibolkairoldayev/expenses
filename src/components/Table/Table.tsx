import React from 'react';
import styles from './Table.module.scss';

interface Expense {
  author: string; // Используем author
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
          <th>Автор</th>
          <th>Дата</th>
          <th>Сумма</th>
          <th>Категория</th>
          <th>Комментарий</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index} className="bg-white odd:bg-gray-100">
            <td className="border px-4 py-2">{expense.author}</td> {/* Заменено на author */}
            <td className="border px-4 py-2">{expense.date}</td>
            <td className="border px-4 py-2">{expense.amount}</td>
            <td className="border px-4 py-2">{expense.category}</td>
            <td className="border px-4 py-2">{expense.comment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

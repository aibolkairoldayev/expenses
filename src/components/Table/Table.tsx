import React from 'react';
import styles from './Table.module.scss';

interface Expense {
  author: string; // Используем author
  dateTime: string;
  sum: number;
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
            <td className="border px-4 py-2">{expense.author}</td>
            <td className="border px-4 py-2">{expense.dateTime ? expense.dateTime.slice(0, 10) : ""}</td>
            <td className="border px-4 py-2">{expense.sum}</td>
            <td className="border px-4 py-2">{expense.category}</td>
            <td className="border px-4 py-2">{expense.comment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

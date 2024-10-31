import React, { useState } from 'react';
import styles from './Form.module.scss';

interface Expense {
  name: string;
  date: string;
  amount: number;
  category: string;
  comment?: string;
}

const Form: React.FC<{ onAddExpense: (expense: Expense) => void }> = ({ onAddExpense }) => {
  const [formData, setFormData] = useState<Expense>({
    name: '',
    date: '',
    amount: 0,
    category: '',
    comment: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddExpense(formData);
    setFormData({ name: '', date: '', amount: 0, category: '', comment: '' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Наименование" value={formData.name} onChange={handleChange} required />
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} required />
      <select name="category" value={formData.category} onChange={handleChange} required>
        <option value="">Категория</option>
        <option value="Транспорт">Транспорт</option>
        <option value="Еда">Еда</option>
        <option value="Развлечения">Развлечения</option>
        <option value="Одежда">Одежда</option>
      </select>
      <input type="text" name="comment" placeholder="Комментарий" value={formData.comment} onChange={handleChange} />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default Form;

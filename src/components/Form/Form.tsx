import React, { useState } from 'react';
import styles from './Form.module.scss';

interface Expense {
  author: string; // Используем author
  dateTime: string;
  sum: number;
  category: string;
  comment?: string;
}

const Form: React.FC<{ onAddExpense: (expense: Expense) => void }> = ({ onAddExpense }) => {
  const [formData, setFormData] = useState<Expense>({
    author: '', // Обновлено
    dateTime: '',
    sum: 0,
    category: '',
    comment: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(`Изменение поля: ${name}, значение: ${value}`);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddExpense(formData);
    setFormData({ author: '', dateTime: '', sum: 0, category: '', comment: '' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="author" 
        placeholder="Автор" 
        value={formData.author} 
        onChange={handleChange} 
        required 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      <input 
        type="date" 
        name="dateTime" 
        value={formData.dateTime} 
        onChange={handleChange} 
        required 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      <input 
        type="number" 
        name="sum" 
        placeholder="Сумма" 
        value={formData.sum} 
        onChange={handleChange} 
        required 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      <select name="category" value={formData.category} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option value="">Категория</option>
        <option value="Транспорт">Транспорт</option>
        <option value="Еда">Еда</option>
        <option value="Развлечения">Развлечения</option>
        <option value="Одежда">Одежда</option>
      </select>
      <input 
        type="text" 
        name="comment" 
        placeholder="Комментарий" 
        value={formData.comment} 
        onChange={handleChange} 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default Form;

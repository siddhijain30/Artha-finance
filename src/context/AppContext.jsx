import React, { createContext, useContext, useEffect, useState } from 'react';

// Initial Dummy Data
const initialTransactions = [
  { id: '1', description: 'Salary', category: 'Income', amount: 5000, type: 'income', date: '2024-05-01' },
  { id: '2', description: 'Rent', category: 'Housing', amount: 1500, type: 'expense', date: '2024-05-02' },
  { id: '3', description: 'Groceries', category: 'Food', amount: 200, type: 'expense', date: '2024-05-05' },
  { id: '4', description: 'Freelance Design', category: 'Income', amount: 800, type: 'income', date: '2024-05-10' },
  { id: '5', description: 'Internet Bill', category: 'Utilities', amount: 60, type: 'expense', date: '2024-05-12' },
];

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('artha_transactions');
    return saved ? JSON.parse(saved) : initialTransactions;
  });
  
  const [role, setRole] = useState(() => localStorage.getItem('artha_role') || 'Admin');
  
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('artha_theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('artha_transactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('artha_role', role);
  }, [role]);

  useEffect(() => {
    localStorage.setItem('artha_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const addTransaction = (txn) => {
    setTransactions(prev => [{ ...txn, id: Date.now().toString() }, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const toggleRole = () => setRole(prev => prev === 'Admin' ? 'Viewer' : 'Admin');

  return (
    <AppContext.Provider value={{
      transactions,
      addTransaction,
      deleteTransaction,
      role,
      toggleRole,
      theme,
      toggleTheme
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

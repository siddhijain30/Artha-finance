import { useMemo, useState } from 'react';
import { useAppContext } from '../context/AppContext';

export const useFinanceData = () => {
  const { transactions } = useAppContext();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredTransactions = useMemo(() => {
    return transactions.filter(txn => {
      const matchesSearch = txn.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || txn.category === categoryFilter;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [transactions, search, categoryFilter]);

  const stats = useMemo(() => {
    let income = 0;
    let expenses = 0;
    const categorySpending = {};

    transactions.forEach(txn => {
      if (txn.type === 'income') income += txn.amount;
      if (txn.type === 'expense') {
        expenses += txn.amount;
        categorySpending[txn.category] = (categorySpending[txn.category] || 0) + txn.amount;
      }
    });

    const savingsRate = income > 0 ? (((income - expenses) / income) * 100).toFixed(1) : 0;
    
    let highestCategory = 'N/A';
    let maxSpending = 0;
    Object.entries(categorySpending).forEach(([cat, amount]) => {
      if (amount > maxSpending) {
        maxSpending = amount;
        highestCategory = cat;
      }
    });

    // Pie chart Data
    const spendingData = Object.entries(categorySpending).map(([name, value]) => ({ name, value }));

    // Line Chart Data Structure (Balance Trend simulation based on date)
    const sortedDates = [...transactions].sort((a, b) => new Date(a.date) - new Date(b.date));
    let currentBalance = 0;
    const trendDataMap = {};
    
    sortedDates.forEach(txn => {
       currentBalance += txn.type === 'income' ? txn.amount : -txn.amount;
       trendDataMap[txn.date] = currentBalance; // Keeps last balance of the day
    });

    const trendData = Object.entries(trendDataMap).map(([date, balance]) => ({
       date, balance
    }));

    return { income, expenses, balance: income - expenses, savingsRate, highestCategory, spendingData, trendData };
  }, [transactions]);

  const uniqueCategories = useMemo(() => {
    const cats = new Set(transactions.map(t => t.category));
    return ['All', ...cats];
  }, [transactions]);

  return {
    search, setSearch,
    categoryFilter, setCategoryFilter,
    filteredTransactions,
    stats,
    uniqueCategories
  };
};

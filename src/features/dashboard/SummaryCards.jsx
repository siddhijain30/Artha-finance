import React from 'react';
import { useFinanceData } from '../../hooks/useFinanceData';
import { formatCurrency } from '../../utils/helpers';
import { Wallet, TrendingUp, TrendingDown, Target } from 'lucide-react';

const Card = ({ title, amount, icon: Icon, colorClass, subtitle }) => (
  <div className="glass-panel p-6 flex items-start justify-between hover:scale-[1.02] transition-transform duration-300">
    <div>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{amount}</h3>
      {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">{subtitle}</p>}
    </div>
    <div className={`p-3 rounded-xl ${colorClass}`}>
      <Icon className="w-5 h-5 text-white" />
    </div>
  </div>
);

export const SummaryCards = () => {
  const { stats } = useFinanceData();
  const { income, expenses, balance, savingsRate, highestCategory } = stats;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <Card 
        title="Total Balance" 
        amount={formatCurrency(balance)} 
        icon={Wallet} 
        colorClass="bg-blue-500 dark:bg-blue-600 shadow-lg shadow-blue-500/30"
      />
      <Card 
        title="Total Income" 
        amount={formatCurrency(income)} 
        icon={TrendingUp} 
        colorClass="bg-emerald-500 dark:bg-emerald-600 shadow-lg shadow-emerald-500/30"
      />
      <Card 
        title="Total Expenses" 
        amount={formatCurrency(expenses)} 
        icon={TrendingDown} 
        colorClass="bg-rose-500 dark:bg-rose-600 shadow-lg shadow-rose-500/30"
        subtitle={`Top: ${highestCategory}`}
      />
      <Card 
        title="Savings Rate" 
        amount={`${savingsRate}%`} 
        icon={Target} 
        colorClass="bg-amber-500 dark:bg-amber-600 shadow-lg shadow-amber-500/30"
        subtitle="Income vs Expenses"
      />
    </div>
  );
};

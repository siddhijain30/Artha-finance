import React, { useState } from 'react';
import { useAppContext } from './context/AppContext';
import { SummaryCards } from './features/dashboard/SummaryCards';
import { Charts } from './features/dashboard/Charts';
import { TransactionTable } from './features/transactions/TransactionTable';
import { Sun, Moon, Shield, ShieldAlert, Plus, X } from 'lucide-react';

const Header = ({ onAddClick }) => {
  const { role, toggleRole, theme, toggleTheme } = useAppContext();

  return (
    <header className="sticky top-0 z-30 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-tr from-emerald-500 to-emerald-300 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <span className="text-white font-bold text-xl leading-none">A</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
            Artha Finance
          </h1>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          {/* Add Button - Visible only to Admin */}
          {role === 'Admin' && (
             <button 
               onClick={onAddClick}
               className="hidden sm:flex items-center gap-2 bg-slate-900 dark:bg-emerald-500 text-white px-4 py-2 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity shadow-lg"
             >
               <Plus className="w-4 h-4" /> Add Transaction
             </button>
          )}

          {/* Role Toggle */}
          <button 
            onClick={toggleRole}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={`Switch to ${role === 'Admin' ? 'Viewer' : 'Admin'} Mode`}
          >
            {role === 'Admin' ? <Shield className="w-4 h-4 text-emerald-500" /> : <ShieldAlert className="w-4 h-4 text-rose-500" />}
            <span className="text-sm font-medium hidden sm:inline-block">{role}</span>
          </button>

          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

const AddTransactionModal = ({ isOpen, onClose }) => {
  const { addTransaction } = useAppContext();
  const [formData, setFormData] = useState({ description: '', amount: '', category: 'Food', type: 'expense', date: new Date().toISOString().split('T')[0] });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) return;
    addTransaction({
      ...formData,
      amount: parseFloat(formData.amount)
    });
    onClose();
    setFormData({ description: '', amount: '', category: 'Food', type: 'expense', date: new Date().toISOString().split('T')[0] });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
       <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-md shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in duration-200">
         <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-800">
           <h2 className="text-lg font-bold">Add New Transaction</h2>
           <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
             <X className="w-5 h-5" />
           </button>
         </div>
         <form onSubmit={handleSubmit} className="p-6 space-y-4">
           <div>
             <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Description</label>
             <input type="text" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none" required placeholder="e.g. Netflix Subscription" />
           </div>
           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Amount ($)</label>
               <input type="number" step="0.01" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none" required placeholder="0.00" />
             </div>
             <div>
               <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Date</label>
               <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none" required />
             </div>
           </div>
           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Type</label>
               <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                 <option value="expense">Expense</option>
                 <option value="income">Income</option>
               </select>
             </div>
             <div>
               <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Category</label>
               <input type="text" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none" required placeholder="e.g. Entertainment" />
             </div>
           </div>
           <div className="pt-6 flex gap-3">
             <button type="button" onClick={onClose} className="flex-1 px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium">Cancel</button>
             <button type="submit" className="flex-1 px-4 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/30 font-medium">Save Transaction</button>
           </div>
         </form>
       </div>
    </div>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { role } = useAppContext();

  return (
    <div className="min-h-screen">
      <Header onAddClick={() => setIsModalOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="p-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl shadow-xl shadow-emerald-500/20 text-white relative overflow-hidden flex items-center justify-between">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2 tracking-tight">Welcome back to Artha</h2>
            <p className="text-emerald-50/90 max-w-xl text-lg">
              Track your finances, analyze your spending habits, and build your wealth with our professional dashboard.
            </p>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -top-20 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        <SummaryCards />
        <Charts />
        <TransactionTable />

        <div className="fixed bottom-6 right-6 sm:hidden z-40">
           {role === 'Admin' && (
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/40 hover:bg-emerald-600 transition-colors"
               >
                 <Plus className="w-6 h-6" />
              </button>
           )}
        </div>

        {role === 'Admin' && (
          <AddTransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </main>
    </div>
  );
}

export default App;

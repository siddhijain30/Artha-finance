import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { useFinanceData } from '../../hooks/useFinanceData';
import { formatCurrency } from '../../utils/helpers';
import { Search, Filter, Trash2 } from 'lucide-react';

export const TransactionTable = () => {
  const { role, deleteTransaction } = useAppContext();
  const { search, setSearch, categoryFilter, setCategoryFilter, filteredTransactions, uniqueCategories } = useFinanceData();

  return (
    <div className="glass-panel p-6 w-full flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2 sm:mb-0">Transactions</h2>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
             <input
               type="text"
               placeholder="Search descriptions..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="pl-9 pr-4 py-2 w-full sm:w-64 bg-transparent border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow text-sm"
             />
          </div>
          <div className="relative w-full sm:w-auto">
             <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
             <select
               value={categoryFilter}
               onChange={(e) => setCategoryFilter(e.target.value)}
               className="pl-9 pr-8 py-2 w-full appearance-none bg-transparent border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow text-sm"
             >
               {uniqueCategories.map(cat => (
                 <option key={cat} value={cat}>{cat}</option>
               ))}
             </select>
          </div>
        </div>
      </div>

      {filteredTransactions.length === 0 ? (
        <div className="py-12 flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 border border-dashed border-slate-200 dark:border-slate-700 rounded-xl">
          <Filter className="w-8 h-8 mb-3 opacity-50" />
          <p>No transactions match your filters.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Description</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium text-right">Amount</th>
                {role === 'Admin' && <th className="px-6 py-4 font-medium text-center">Action</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {filteredTransactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{txn.date}</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">{txn.description}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {txn.category}
                    </span>
                  </td>
                  <td className={`px-6 py-4 text-right font-medium ${txn.type === 'expense' ? 'text-rose-500 dark:text-rose-400' : 'text-emerald-500 dark:text-emerald-400'}`}>
                    {txn.type === 'expense' ? '-' : '+'}{formatCurrency(txn.amount)}
                  </td>
                  {role === 'Admin' && (
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => deleteTransaction(txn.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-colors"
                        title="Delete transaction"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

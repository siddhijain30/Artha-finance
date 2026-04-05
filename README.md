# 🪙 Artha Finance  
### A Purpose-Driven Financial Management Console

**Artha (Sanskrit: अर्थ)** represents **"Purpose"** and **"Wealth."**  
This dashboard is a high-performance React application designed for users to navigate their financial flow with clarity and precision.

---

## 🚀 Overview

This project demonstrates a **clean, modular approach to frontend development.**  
It features a **Bento-grid layout**, **Role-Based UI**, and a sophisticated **Dark/Light theme engine.**

---

## 🛠️ Tech Stack

- **Framework:** React.js (Vite)  
- **Styling:** Tailwind CSS (Custom Theme Configuration)  
- **State Management:** React Context API + Custom Hooks  
- **Charts:** Recharts (Responsive & Interactive)  
- **Icons:** Lucide-React  

---

## 🏗️ Project Structure

The folder structure follows a **Feature-Based Architecture**, ensuring scalability and maintainability.

```plaintext
src/
├── components/          # Shared Atomic UI (Buttons, Inputs, Modals)
├── context/             # Global State (ThemeContext, AuthContext)
├── features/            # Feature-specific Logic
│   ├── dashboard/       # Summary Cards & Recharts
│   └── transactions/    # Table, Search, & Filter Logic
├── hooks/               # Custom Logic (useTransactions, useTheme)
├── utils/               # Formatting & Math Helpers
└── data/                # Mock Data (JSON)

---

##✨ Key Features
1. 📊 Adaptive Dashboard
Balance Trend: Time-series visualization tracking net worth
Spending Breakdown: Interactive pie charts for expense categories
2. 🔐 Role-Based Access Control (RBAC)
Viewer Mode: Read-only access
Admin Mode: Add, edit, delete transactions

💡 Tip: Toggle roles from the top-right corner to see UI changes.

3. 🔎 Smart Filtering
Real-time search-as-you-type
Category-based filtering with instant updates
4. ⚡ Professional Developer Experience
🌙 Dark Mode: Eye-friendly charcoal/slate palette
💾 Persistence: Data + theme saved in localStorage
🧩 Custom Hooks: Clean separation of logic & UI

---

##⚙️ Setup & Installation
1. Clone the repository
git clone https://github.com/siddhijain30/Artha-finance.git
cd Artha-finance
2. Install dependencies
npm install
3. Run development server
npm run dev
4. Build for production
npm run build

---

##🧠 Design Decisions

Why Context API?
Lightweight and efficient for managing global state without Redux complexity.

Why JavaScript over TypeScript?
Faster prototyping and flexible data handling while maintaining clean structure.

Mobile-First Approach
Responsive grid layout that adapts seamlessly to all screen sizes.

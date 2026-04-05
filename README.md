# 💰 Artha Finance – Smart Expense Tracker

**Artha (Sanskrit: अर्थ)** represents **"Purpose"** and **"Wealth."**  
A modern, responsive finance tracking application built with a clean architecture and developer-friendly practices. Track your expenses, visualize trends, and manage financial data with ease.

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components (Buttons, Inputs, Modals)
├── context/             # Global state (ThemeContext, AuthContext)
├── features/            # Feature-based modules
│   ├── dashboard/       # Charts, summaries, analytics
│   └── transactions/    # Table, filtering, search logic
├── hooks/               # Custom hooks (useTransactions, useTheme)
├── utils/               # Helper functions (formatting, calculations)
└── data/                # Mock data (JSON)
```

---

## ✨ Features

### 📊 Adaptive Dashboard
- **Balance Trend** → Time-series graph to track financial growth  
- **Spending Breakdown** → Interactive pie charts for category-wise expenses  

---

### 🔐 Role-Based Access Control (RBAC)
- **Viewer Mode** → Read-only access  
- **Admin Mode** → Add, edit, and delete transactions  

💡 *Tip: Toggle roles from the top-right corner to experience dynamic UI changes.*

---

### 🔎 Smart Filtering
- Real-time **search-as-you-type**
- Category-based filtering with instant UI updates  

---

### ⚡ Developer Experience
- 🌙 **Dark Mode** → Eye-friendly modern UI  
- 💾 **Local Storage Persistence** → Saves theme & data  
- 🧩 **Custom Hooks** → Separation of logic and UI  
- 📱 **Responsive Design** → Mobile-first approach  

---

## ⚙️ Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/siddhijain30/Artha-finance.git
cd Artha-finance
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

---

## 🧠 Design Decisions

### Why Context API?
Lightweight and efficient for global state management without the overhead of Redux.

### Why JavaScript (Not TypeScript)?
Faster prototyping and flexible development while maintaining clean and scalable code.

### Mobile-First Approach
Designed with responsiveness in mind to ensure seamless experience across all devices.

---

## 🚀 Future Improvements
- API integration for real-time data  
- Authentication with backend  
- Export reports (PDF/CSV)  
- Budget planning & alerts  

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

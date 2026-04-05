🪙 Artha Finance
A Purpose-Driven Financial Management Console
Artha (Sanskrit: अर्थ) represents "Purpose" and "Wealth." This dashboard is a high-performance React application designed for users to navigate their financial flow with clarity and precision.

🚀 Overview
This project was built to demonstrate a clean, modular approach to frontend development. It features a Bento-grid layout, a robust Role-Based UI, and a sophisticated Dark/Light theme engine.

🛠️ Tech Stack
Framework: React.js (Vite)

Styling: Tailwind CSS (Custom Theme Configuration)

State Management: React Context API + Custom Hooks

Charts: Recharts (Responsive & Interactive)

Icons: Lucide-React

🏗️ Project Structure
The folder structure follows a Feature-Based Architecture, ensuring the codebase remains scalable and easy to navigate.

Plaintext
src/
├── components/          # Shared Atomic UI (Buttons, Inputs, Modals)
├── context/             # Global State (ThemeContext, AuthContext)
├── features/            # Feature-specific Logic
│   ├── dashboard/       # Summary Cards & Recharts
│   └── transactions/    # Table, Search, & Filter Logic
├── hooks/               # Custom Logic (useTransactions, useTheme)
├── utils/               # Formatting & Math Helpers
└── data/                # Mock Data (JSON)
✨ Key Features
1. Adaptive Dashboard
Balance Trend: A time-series visualization tracking net worth.

Spending Breakdown: A categorical breakdown of expenses using interactive Pie Charts.

2. Role-Based Access Control (RBAC)
Viewer Mode: Read-only access to charts and transaction history.

Admin Mode: Unlocks the ability to add, edit, or delete transactions.

Note: Toggle the role in the top-right corner to see UI adaptations.

3. Smart Filtering
Real-time search-as-you-type functionality.

Category-based filtering with instant state synchronization.

4. Professional DX (Developer Experience)
Dark Mode: A charcoal/slate palette designed for reduced eye strain.

Persistence: Theme preferences and transaction states are synced with localStorage.

Custom Hooks: Business logic is entirely decoupled from the UI for better testability.

⚙️ Setup & Installation
Clone the repository:

Bash
git clone https://github.com/siddhijain30/Artha-finance.git
cd Artha-finance
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Build for production:

Bash
npm run build
🧠 Design Decisions
Why Context API? Given the scope of a single-user dashboard, Context provided a lightweight yet powerful way to handle global state without the boilerplate of Redux.

Why JavaScript over TS? To focus on rapid prototyping and flexible data handling while maintaining strict prop-checking through clean code patterns.

Mobile-First: The UI uses a flexible grid that collapses into a single-column stack on mobile devices for seamless on-the-go tracking.

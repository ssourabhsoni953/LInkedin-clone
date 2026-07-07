# Project Overview: LinkedIn Clone

This project is a modern, frontend React application designed to act as a **LinkedIn Clone**. It focuses on recreating the UI, navigation flow, and micro-interactions of the real LinkedIn platform using mock data. 

### 🛠️ Tech Stack
*   **Framework**: [React 19](https://react.dev/) built with [Vite](https://vitejs.dev/) for fast development and optimized production builds.
*   **Styling**: [Tailwind CSS (v4)](https://tailwindcss.com/) for rapid, utility-first styling and responsive layouts.
*   **Routing**: [React Router DOM (v7)](https://reactrouter.com/) for seamless, single-page application navigation without page reloads.
*   **Icons**: [Lucide React](https://lucide.dev/) for clean, customizable SVG icons.
*   **Linting/Tooling**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) for fast code linting.

### 🏗️ Architecture & Structure
*   **Component-Driven**: The code is highly modular, split across `src/components`, `src/pages`, `src/context`, and `src/data`. For example, complex UI elements are broken down into smaller, reusable components like `NavItem` and `ProfileCard`.
*   **Mock Data Integration**: The application relies on local mock data (e.g., `generate_mock_data.mjs` and `src/data/mockData.js`) to populate user profiles, feeds, and notifications rather than fetching from a live backend.
*   **Routing Setup**: Global routing is handled in `App.jsx` using `BrowserRouter`, mapping specific URLs (like `/` or `/profile`) to their respective page components.

### ✨ Key Features Implemented
1.  **Sticky Global Navbar**: A highly responsive navigation bar fixed to the top of the screen (`z-50`). Because it sits outside the `<Routes>` block in the router, it remains permanently visible as the user clicks between pages.
2.  **Smart Navigation Items (`NavItem`)**: Reusable navigation icons that accept props for icons, text, paths, notification badges, and user avatars. They use the `useNavigate` hook for instant page swapping.
3.  **Active Route Highlighting**: Utilizing the `useLocation` hook, the Navbar intelligently detects which page you are on and dynamically applies styling (like a white bottom border and white text) to the active tab.
4.  **Micro-Animations**: Mimicking LinkedIn's attention to detail, elements like the search bar feature smooth CSS transitions (e.g., expanding slightly when clicked/focused).
5.  **Dynamic User Avatar**: The "Me" tab automatically fetches the current user's avatar from the mock data to display in the navigation bar instead of a generic icon.

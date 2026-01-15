# 🛒 Product Dashboard (React + Redux Toolkit)

A modern **Product Dashboard** built using **React**, **Redux Toolkit**, and **Testing Library**.  
This project demonstrates clean state management, async data handling, responsive UI, and testing best practices.

---

## 🚀 Live Demo
https://productdashboard-rosy.vercel.app/

---

## 📌 Features

### ✅ Product Listing
- Fetches products from **Fake Store API**
- Displays products in a **responsive grid**
- Shows image, title, and price

### 🔍 Search, Filter & Sort
- **Debounced search** by product title
- Filter by **category**
- Sort by **price (Low → High / High → Low)**
- Optimized using **memoized Redux selectors**

### 📄 Product Detail Page
- Dynamic routing using product ID
- Displays full product information
- Add product to favorites

### ❤️ Favorites
- Add/remove favorites
- Favorites stored in **Redux store**
- Optional persistence via `localStorage`

### 🧪 Testing
- **Unit tests** for Redux slices
- **Component tests** for UI rendering
- **Integration tests** for:
  - Search
  - Filter
  - Redux–UI interaction

### ♿ Accessibility & Performance
- Semantic HTML
- `aria-labels` and `alt` text
- Lazy-loaded images
- Code-splitting with lazy routes

---

## 🛠 Tech Stack

- **React** (Functional Components & Hooks)
- **Redux Toolkit**
- **React Router**
- **Vite**
- **Vitest**
- **@testing-library/react**
- **CSS (Responsive Grid)**

---

---

## 🔗 API Used

- **Fake Store API**  
  (https://fakestoreapi.com).


---

## ▶️ Getting Started

### 1️⃣ Clone the Repository
```bash
https://github.com/Nehabhadauria19/Product-Dashboard
cd Product-Dashboard
npm install
npm run dev
http://localhost:5173


# 🌳 Tree View Component

A clean, reusable, and production-ready **Tree View Component** built with **React** and **TypeScript**. Inspired by real-world use cases like **file explorers**, **category management panels**, and **hierarchical data visualization**, this project emphasizes clarity, scalability, and maintainability.  

---

## ✨ Features

- **Expand / Collapse Nodes** – Toggle visibility of child nodes.  
- **Add New Child Nodes** – Add children at any level via prompt or inline input.  
- **Inline Rename** – Double-click a node to edit its name directly.  
- **Delete Nodes** – Remove any node along with its entire subtree (with confirmation).  
- **Lazy Loading** – Child nodes load asynchronously on expand (simulated API).  
- **Drag & Drop** – Reorder nodes or move nodes between parents using `@dnd-kit/core`.  
- **Minimal & Clean UI** – Lightweight styling without heavy external libraries.  

---

## 🧠 Design Approach

- **Recursive Tree Structure** – Tree data is stored hierarchically for easy traversal.  
- **Reusable Components** – Each node is rendered via a `<TreeNode />` component.  
- **Immutable State Updates** – Ensures safe and predictable state management.  
- **Async Simulation** – Mimics real backend API calls for child nodes.  
- **Hierarchy Integrity** – Drag & drop operations maintain proper parent-child relationships.  
- **Readable & Extensible** – Code written to be easy to debug, extend, and maintain.  

---

## 🛠 Tech Stack

- **React**  
- **TypeScript**  
- **Minimal Custom CSS**  
- **@dnd-kit/core** (for drag & drop functionality)  

---

## 🚀 Getting Started

### 1. Create React App with TypeScript template:

```bash
npx create-react-app tree-view-component --template typescript
cd tree-view-component
````

### 2. Install Dependencies:

```bash
npm install @dnd-kit/core
```

### 3. Run the App:

```bash
npm start
```

### 4. Open in Browser

Go to [http://localhost:3000](http://localhost:3000) to see the Tree View Component in action.

---

## 📌 Notes

This project demonstrates my approach to:

* Component composition and **recursive rendering**
* Clean and maintainable **state management**
* **Async UI interactions** and lazy loading
* Implementing **drag & drop logic** for hierarchical structures

It’s built with **real-world usability** in mind, not just visual demonstration.

---

## 🔗 Live Demo

Check it live here: [https://tree-view-components.netlify.app/](https://tree-view-components.netlify.app/)

---

## 📸 Screenshot

<img width="1882" height="831" alt="Tree View Demo" src="https://github.com/user-attachments/assets/fe3e9501-79de-4253-9457-8d6d74483fa2" />





// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import Purchases from './components/Purchases';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>E-Commerce App</h1>
          <nav>
            <a href="/">Home</a> | <a href="/purchases">Minhas compras</a>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/purchases" element={<Purchases />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

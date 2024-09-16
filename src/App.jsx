import React from 'react';
import ProductList from './components/ProductList';
import './App.css'; // Estilos gerais

const App = () => {
  return (
    <div className="app">
      <h1>Fake Store Products</h1>
      <ProductList />
    </div>
  );
};

export default App;

// src/components/Purchases.jsx
import React, { useEffect, useState } from 'react';
import './Purchases.css'; // Adicione este arquivo para estilos

const Purchases = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/comprar/');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/comprar/${id}/`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      setProducts(products.filter(product => product.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdate = async (id) => {
    const updatedProduct = { title: 'Updated Title', price: 100 };

    try {
      const response = await fetch(`http://localhost:8000/api/v1/comprar/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });
      if (!response.ok) {
        throw new Error('Failed to update product');
      }
      const data = await response.json();
      setProducts(products.map(product =>
        product.id === id ? data : product
      ));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="purchases-container">
      <h2>Minhas compras</h2>
      <ul className="purchases-list">
        {products.length === 0 ? (
          <li>No purchases found.</li>
        ) : (
          products.map((product) => (
            <li key={product.id} className="purchase-item">
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={() => handleUpdate(product.id)} className="update-btn">Update</button>
              <button onClick={() => handleDelete(product.id)} className="delete-btn">Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Purchases;

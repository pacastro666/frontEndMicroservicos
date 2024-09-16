import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { handlePurchase } from '../utils/purchaseUtils';
import './ProductList.css';

// Definir a interface para os produtos
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulação de carregamento de produtos
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleProductPurchase = async (product: Product) => {
    const result = await handlePurchase(product);
    if (result.success) {
      alert("Compra realizada com sucesso!");
    } else {
      alert(result.error);
    }
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onPurchase={handleProductPurchase} 
        />
      ))}
    </div>
  );
};

export default ProductList;

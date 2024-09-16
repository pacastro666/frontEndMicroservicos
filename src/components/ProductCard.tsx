import React from 'react';
import { handlePurchase } from '../utils/purchaseUtils';
import './ProductCard.css';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onPurchase: (product: Product) => void; // Função de callback para o botão de compra
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPurchase }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <button onClick={() => onPurchase(product)} className="buy-button">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

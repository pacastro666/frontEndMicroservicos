import { Product } from '../components/ProductCard';

// Definir a interface para o resultado da compra
interface PurchaseResult {
  success: boolean;
  error?: string;
}

export const handlePurchase = async (product: Product): Promise<PurchaseResult> => {
  try {
    const response = await fetch('http://localhost:8000/api/v1/comprar/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: product.id,
        product_title: product.title,
        product_price: product.price,
      }),
    });

    if (!response.ok) {
      throw new Error('Erro ao realizar a compra');
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
};

import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const products = [
    { id: 1, name: 'Produto 1', description: 'Descrição 1', price: '$10' },
    { id: 2, name: 'Produto 2', description: 'Descrição 2', price: '$20' },
  ];
  const product = products.find(p => p.id === parseInt(id, 10));

  if (!product) {
    return <p>Produto não encontrado!</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => {
        // Lógica para adicionar o produto ao carrinho
      }}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ProductDetail;

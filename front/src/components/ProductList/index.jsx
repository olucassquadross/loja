import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products] = useState([
    { id: 1, name: 'Produto 1', description: 'Descrição 1', price: '$10' },
    { id: 2, name: 'Produto 2', description: 'Descrição 2', price: '$20' },
  ]);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      {products.map(product => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h2>{product.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

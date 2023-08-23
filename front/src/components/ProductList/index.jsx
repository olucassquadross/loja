import React, { useState } from 'react';
import Product from './Product';

function ProductList() {
  const [products] = useState([
    { id: 1, name: 'Produto 1', description: 'Descrição 1', price: '$10', imageUrl: 'url1' },
    { id: 2, name: 'Produto 2', description: 'Descrição 2', price: '$20', imageUrl: 'url2' },
    // ... outros produtos
  ]);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

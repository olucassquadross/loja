import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data";

function ProductList() {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <Link to={`/product/${product.id}`}>Ver Detalhes</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

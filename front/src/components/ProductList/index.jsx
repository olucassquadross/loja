import React from "react";
import { Link } from "react-router-dom";

function ProductList() {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      {/* Suponhamos que tenhamos 3 produtos para simplificar */}
      <ul>
        <li><Link to="/product/1">Produto 1</Link></li>
        <li><Link to="/product/2">Produto 2</Link></li>
        <li><Link to="/product/3">Produto 3</Link></li>
      </ul>
    </div>
  );
}

export default ProductList;

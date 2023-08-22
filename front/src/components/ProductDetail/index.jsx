import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  let { id } = useParams();
  
  return (
    <div>
      <h2>Detalhe do Produto {id}</h2>
      {/* Aqui você pode buscar o produto por id e exibir seus detalhes */}
    </div>
  );
}

export default ProductDetail;

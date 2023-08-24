import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";
import { products } from "../data";

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const { addToCart } = useCart();

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default ProductDetail;

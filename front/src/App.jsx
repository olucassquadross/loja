import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductList/Product";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/cart">Carrinho</Link>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h2>Home</h2>
    </>
  );
}

export default App;

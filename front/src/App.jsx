import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Carrinho</Link>
      </nav>
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;

// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductCatalog from './components/ProductCatalog';
import ShoppingCart from './components/ShoppingCart';
import Register from './components/Register';
import Login from './components/Login';
import Navigation from './components/Navigation';
import { Container } from 'react-bootstrap';

const App = () => {
  const [user, setUser] = React.useState(null);

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  };

  return (
    <Container>
      <Navigation user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home setUser={setUser} />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </Container>
  );
};

export default App;

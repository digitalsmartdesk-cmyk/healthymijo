import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Account from './pages/Account';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import OrderTracking from './pages/OrderTracking';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product" element={<ProductDetail />} />
      <Route path="/account" element={<Account />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/order-tracking" element={<OrderTracking />} />
    </Routes>
  );
}

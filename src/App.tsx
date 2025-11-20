import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header onCartClick={() => setCartOpen(true)} />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
          <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

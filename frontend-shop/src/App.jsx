import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Checkout from './components/Checkout';

import Home from './pages/Home';
import BrowsePets from './pages/BrowsePets';
import DogCare from './pages/DogCare';
import CatCare from './pages/CatCare';
import FindPet from './pages/FindPet';
import Giveaway from './pages/Giveaway';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="d-flex flex-column min-vh-100">
            <Header />
            {/* Body: Sidebar + Main */}
            <div className="d-flex flex-grow-1">
              <Sidebar />
              <main className="flex-grow-1 p-4">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/browse" element={<BrowsePets />} />
                  <Route path="/dog-care" element={<DogCare />} />
                  <Route path="/cat-care" element={<CatCare />} />
                  <Route path="/find" element={<FindPet />} />
                  <Route path="/giveaway" element={<Giveaway />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="*" element={<h2>404 - Page Not Found</h2>} />
                </Routes>
              </main>
            </div>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App

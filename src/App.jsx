import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Recipe from './components/recipe/Recipe';
import Cart from './components/cart/cart';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import UserProvider from './components/contexts/UsersProvides';
import Create from './pages/create/create';

import './App.css';

const App = () => (
  <BrowserRouter>
    <UserProvider>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </UserProvider>
  </BrowserRouter>
);

export default App;

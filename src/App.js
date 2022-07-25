import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './routes/PrivateRoute';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Header from './components/Header';
import { UserStorage } from './context/UserContext';
import { CartStorage } from './context/CartContext';
function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <CartStorage>
          <Header />
          <div className="App">
            <Routes>
              <Route
                path="/produtos"
                element={
                  <PrivateRoute>
                    <Products />
                  </PrivateRoute>
                }
              />
              <Route
                path="/carrinho"
                element={
                  <PrivateRoute>
                    <Cart />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<Login />} />
            </Routes>
          </div>
        </CartStorage>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;

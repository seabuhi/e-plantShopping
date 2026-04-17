import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <Provider store={store}>
      {currentPage === 'landing' && (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <p>Where Green Meets Serenity</p>
          <button
            className="get-started-btn"
            onClick={() => setCurrentPage('products')}
          >
            Get Started
          </button>
        </div>
      )}

      {currentPage === 'products' && (
        <ProductList
          onCartClick={() => setCurrentPage('cart')}
          onHomeClick={() => setCurrentPage('landing')}
        />
      )}

      {currentPage === 'cart' && (
        <CartItem
          onContinueShopping={() => setCurrentPage('products')}
          onHomeClick={() => setCurrentPage('landing')}
        />
      )}

      {currentPage === 'about' && (
        <AboutUs onHomeClick={() => setCurrentPage('landing')} />
      )}
    </Provider>
  );
}

export default App;
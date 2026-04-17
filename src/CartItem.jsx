import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping, onHomeClick }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [checkoutMsg, setCheckoutMsg] = useState(false);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    setCheckoutMsg(true);
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 30px',
        backgroundColor: '#4CAF50',
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <h2 style={{ cursor: 'pointer' }} onClick={onHomeClick}>
          🌿 Paradise Nursery
        </h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <span style={{ cursor: 'pointer' }} onClick={onHomeClick}>Home</span>
          <span style={{ cursor: 'pointer' }} onClick={onContinueShopping}>Plants</span>
          <span>🛒 Cart ({cartItems.reduce((sum, i) => sum + i.quantity, 0)})</span>
        </div>
      </nav>

      <div style={{ padding: '30px', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ color: '#4CAF50', marginBottom: '20px' }}>
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <p style={{ fontSize: '1.2rem', color: '#666' }}>
              Your cart is empty 🌱
            </p>
            <button
              onClick={onContinueShopping}
              style={{
                marginTop: '20px',
                padding: '10px 25px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            {cartItems.map((item) => (
              <div key={item.name} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '20px',
                marginBottom: '15px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={{ marginBottom: '5px' }}>{item.name}</h3>
                  <p style={{ color: '#666', marginBottom: '5px' }}>
                    Unit Price: ${item.price.toFixed(2)}
                  </p>
                  <p style={{ color: '#4CAF50', fontWeight: 'bold' }}>
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => handleDecrement(item)}
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '1.2rem',
                    }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleIncrement(item)}
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '1.2rem',
                    }}
                  >
                    +
                  </button>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => handleRemove(item)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#e53935',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                  }}
                >
                  🗑 Delete
                </button>
              </div>
            ))}

            {/* Total */}
            <div style={{
              textAlign: 'right',
              padding: '20px',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              color: '#333',
            }}>
              Total Amount: ${totalAmount.toFixed(2)}
            </div>

            {/* Buttons */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px',
            }}>
              <button
                onClick={onContinueShopping}
                style={{
                  padding: '12px 25px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                ← Continue Shopping
              </button>
              <button
                onClick={handleCheckout}
                style={{
                  padding: '12px 25px',
                  backgroundColor: '#FF9800',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                Checkout
              </button>
            </div>

            {/* Checkout Message */}
            {checkoutMsg && (
              <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#e8f5e9',
                border: '1px solid #4CAF50',
                borderRadius: '8px',
                textAlign: 'center',
                color: '#4CAF50',
                fontSize: '1.1rem',
                fontWeight: 'bold',
              }}>
                🌿 Coming Soon! Thank you for shopping at Paradise Nursery!
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
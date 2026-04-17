import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const plants = [
  // Succulents
  {
    category: 'Succulents',
    items: [
      { name: 'Aloe Vera', price: 12.99, image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c10616?w=200', description: 'Great for skin care' },
      { name: 'Echeveria', price: 9.99, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=200', description: 'Beautiful rosette shape' },
      { name: 'Jade Plant', price: 11.99, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=200', description: 'Symbol of good luck' },
      { name: 'Haworthia', price: 8.99, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=200', description: 'Perfect for beginners' },
      { name: 'Sedum', price: 7.99, image: 'https://images.unsplash.com/photo-1518335935020-cfd72b1b2f8b?w=200', description: 'Low maintenance plant' },
      { name: 'Agave', price: 14.99, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=200', description: 'Drought tolerant beauty' },
    ],
  },
  // Tropical
  {
    category: 'Tropical Plants',
    items: [
      { name: 'Monstera', price: 24.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200', description: 'Iconic split leaves' },
      { name: 'Bird of Paradise', price: 34.99, image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=200', description: 'Stunning tropical look' },
      { name: 'Peace Lily', price: 16.99, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=200', description: 'Air purifying plant' },
      { name: 'Pothos', price: 10.99, image: 'https://images.unsplash.com/photo-1587395651906-1b40a0b07e5b?w=200', description: 'Easy to grow vine' },
      { name: 'Philodendron', price: 18.99, image: 'https://images.unsplash.com/photo-1616404595868-5f68e2bb4f91?w=200', description: 'Lush green leaves' },
      { name: 'Anthurium', price: 22.99, image: 'https://images.unsplash.com/photo-1567331711402-509c12c41959?w=200', description: 'Beautiful red flowers' },
    ],
  },
  // Air Purifying
  {
    category: 'Air Purifying',
    items: [
      { name: 'Snake Plant', price: 15.99, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=200', description: 'Purifies air at night' },
      { name: 'Spider Plant', price: 9.99, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200', description: 'Removes toxins' },
      { name: 'Bamboo Palm', price: 29.99, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=200', description: 'Natural air filter' },
      { name: 'Rubber Plant', price: 19.99, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=200', description: 'Cleans indoor air' },
      { name: 'Dracaena', price: 17.99, image: 'https://images.unsplash.com/photo-1446071103084-c257b5f70672?w=200', description: 'Removes benzene' },
      { name: 'Boston Fern', price: 13.99, image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=200', description: 'Natural humidifier' },
    ],
  },
];

function ProductList({ onCartClick, onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState({});

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
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
          <span style={{ cursor: 'pointer' }}>Plants</span>
          <span style={{ cursor: 'pointer' }} onClick={onCartClick}>
            🛒 Cart ({totalCartItems})
          </span>
        </div>
      </nav>

      {/* Plant Categories */}
      <div style={{ padding: '30px' }}>
        {plants.map((category) => (
          <div key={category.category} style={{ marginBottom: '40px' }}>
            <h2 style={{
              color: '#4CAF50',
              marginBottom: '20px',
              borderBottom: '2px solid #4CAF50',
              paddingBottom: '10px'
            }}>
              {category.category}
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '20px',
            }}>
              {category.items.map((plant) => (
                <div key={plant.name} style={{
                  border: '1px solid #ddd',
                  borderRadius: '10px',
                  padding: '15px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '10px',
                    }}
                  />
                  <h3 style={{ marginBottom: '5px' }}>{plant.name}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '8px' }}>
                    {plant.description}
                  </p>
                  <p style={{ color: '#4CAF50', fontWeight: 'bold', marginBottom: '10px' }}>
                    ${plant.price}
                  </p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems[plant.name]}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: addedItems[plant.name] ? '#aaa' : '#4CAF50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: addedItems[plant.name] ? 'not-allowed' : 'pointer',
                      width: '100%',
                    }}
                  >
                    {addedItems[plant.name] ? 'Added ✓' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
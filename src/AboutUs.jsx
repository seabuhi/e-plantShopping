import React from 'react';

function AboutUs({ onHomeClick }) {
  return (
    <div style={{
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#4CAF50', marginBottom: '20px' }}>
        About Paradise Nursery
      </h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
        Welcome to Paradise Nursery, your one-stop destination for beautiful 
        houseplants. We are passionate about bringing nature indoors and helping 
        you create your own green paradise at home.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
        Founded in 2024, we offer a wide variety of carefully selected plants 
        for every home and lifestyle. Whether you are a seasoned plant lover or 
        just starting your green journey, we have the perfect plant for you.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
        Our mission is simple: to make the world a greener, happier place — 
        one plant at a time.
      </p>
      <button
        onClick={onHomeClick}
        style={{
          padding: '10px 25px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default AboutUs;
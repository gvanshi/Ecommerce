import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './products.css'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://api.chec.io/v1/products',
          {
            headers: {
              'X-Authorization': 'pk_57086ceb95f6d9b5e759806037d7fedaede8329856b18'
            }
          }
        );
  
        const initialProducts = response.data.data.map(product => ({
          ...product,
          quantity: 1, 
          showQuantityControls: false 
        }));
  
        setProducts(initialProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const handleAddToCart = (productId) => {
    const updatedProducts = products.map(p =>
      p.id === productId ? { ...p, showQuantityControls: true } : p
    );
    setProducts(updatedProducts);
  };

  const handleBuy = (product) => {
    const updatedProducts = products.map(p =>
      p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
    );
    setProducts(updatedProducts);
  };

  const handleBuyDelete = (product) => {
    const updatedProducts = products.map(p =>
      p.id === product.id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p
    );
    setProducts(updatedProducts);
  };

  const handleBuyNow = (productId) => {
    // Implement buy now functionality here
    console.log(`Product ${productId} buy now`);
  };

  return (
    <div className="product-list-container">
        <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="product-table">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item">
            <img className="product-image" src={product.image.url} alt={product.name} />
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>Price: {product.price.formatted_with_symbol}</p>
              <div className="button-container">
                <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                {product.showQuantityControls && (
                  <div className="quantity-container">
                    <button className="quantity-button" onClick={() => handleBuy(product)}>
                      +
                    </button>
                    <p className="quantity">{product.quantity}</p>
                    <button className="quantity-button" onClick={() => handleBuyDelete(product)}>
                      -
                    </button>
                  </div>
                )}
                <button onClick={() => handleBuyNow(product.id)}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

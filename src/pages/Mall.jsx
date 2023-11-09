import React, { useState, useEffect } from 'react';
import TopNavbar from '../components/TopNavbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Mall = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleBuyNow = () => {
    setShowCheckout(true);
  };

  const handleCheckoutClose = () => {
    setShowCheckout(false);
  };

  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Products</h2>
            <div className="mb-4">
              <label htmlFor="category" className="text-black">
                Select Category:
              </label>
              <select
                id="category"
                className="ml-2 p-2 border rounded"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelry</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
              </select>
            </div>
            <div className="grid gap-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="border p-4 rounded-md">
                  <img src={product.image} alt={product.title} className="w-16 h-16 mb-2 mx-auto" />
                  <p className="text-black">{product.title}</p>
                  <p className="text-black">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-primary text-white px-2 py-1 mt-2 rounded hover:bg-primary"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="bg-primary text-white px-2 py-1 mt-2 rounded hover:bg-primary ml-2"
                  >
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Cart</h2>
            <div className="grid gap-4">
              {cart.map((item) => (
                <div key={item.id} className="border p-4 rounded-md">
                  <img src={item.image} alt={item.title} className="w-16 h-16 mb-2 mx-auto" />
                  <p className="text-black">{item.title}</p>
                  <p className="text-black">${item.price}</p>
                  <button
                    onClick={handleBuyNow}
                    className="bg-primary text-white px-2 py-1 mt-2 rounded hover:bg-primary ml-2"
                  >
                    Buy Now
                  </button>
                </div>
              ))}
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="bg-primary text-white px-2 py-1 mt-2 rounded hover:bg-primary"
                >
                  Clear Bag
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {showCheckout && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-stone p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Checkout</h2>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="mb-2">
                  <img src={item.image} alt={item.title} className="w-16 h-16 mr-2" />
                  {item.title} - ${item.price}
                </li>
              ))}
            </ul>
            <button
              onClick={handleCheckoutClose}
              className="bg-primary text-white px-2 py-1 mt-4 rounded hover:primary"
            >
              Close 
            </button>
            
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Mall;

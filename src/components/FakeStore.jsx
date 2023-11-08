
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FakeStore() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        // Extract and set categories
        const uniqueCategories = [...new Set(response.data.map(product => product.category))];
        setCategories(['all', ...uniqueCategories]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>

    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Products</h1>

      <div className="flex justify-end">
        <label className="text-sm mr-2">Filter by Category:</label>
        <select
          className="px-2 py-1 border border-stone rounded"
          value={selectedCategory}
          onChange={(e) => filterProductsByCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {products
          .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
          .map((product) => (
            <div key={product.id} className="border p-4 rounded shadow-lg"> {/* Added shadow-lg class */}
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <img
                src={product.image}
                alt={product.title}
                className="mt-2 w-full h-40 object-contain"
              />
              <p className="text-sm text-stone">Price: ${product.price.toFixed(2)}</p>
              <button
                className="mt-2 bg-green text-textw px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="mt-2 bg-green text-textw px-4 py-2 rounded hover:bg-green ml-2"
              >
                Buy
              </button>
            </div>
          ))}
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>{item.title} - ${item.price.toFixed(2)}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default FakeStore;

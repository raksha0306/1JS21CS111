import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

const ProductList = ({ filters }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    loadProducts();
  }, [filters]);

  // Apply filters and sorting to products here

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.company}</p>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p>Availability: {product.availability ? 'In stock' : 'Out of stock'}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

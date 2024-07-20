import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';

const AllProducts = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="all-products">
      <Filter onChange={handleFilterChange} />
      <ProductList filters={filters} />
    </div>
  );
};

export default AllProducts;

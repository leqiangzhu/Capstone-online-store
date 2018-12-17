import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart'

import ProductList from './product/product-listing/productList.jsx';

import data from './data/products.json'
function Home(){
  return (
    <div>
      <h2>This page is Home page</h2>
      <Cart></Cart>
    </div>
  );
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import Order from './Order'
function Home(){
  return (
    <div>
      <h2>This page is Home page</h2>
      <Order></Order>
    </div>
  );
}

export default Home;
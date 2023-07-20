import React from 'react';
import CartItem from './CartItem';

function App() {
  const name = "Sid";
  // const loading = false;
  const isLoggedin = true;

  return (
    <div className="App">
      <h1>Cart</h1>
      <CartItem />
    </div>
  );
}

export default App;

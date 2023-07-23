import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {
  // const name = "Sid";
  // const loading = false;
  // const isLoggedin = true;
  constructor () {
    super();
    this.state ={
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=367&q=80',
                id: 2
            },
            {
                price: 109999,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1605360846332-1378e0c96955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1hYyUyMGJvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
                id: 3
            }
        ]
    }
}
handleIncreaseQuantity = (product) => {
  console.log('Hey please inc the qty of', product);
  const { products } = this.state;
  const index = products.indexOf(product);

  products[index].qty +=1;

  this.setState({
      products: products
  })
}
handleDecreaseQuantity = (product => {
  console.log('Hey please del the  qty of', product);
  const {products} = this.state;
  const index = products.indexOf(product);

  if(products[index].qty === 0){
      return ;
  }
  products[index].qty -=1;

  
  this.setState({
      products: products
  })
})
handleDeleteProduct = (id) => {
  const {products} = this.state;

  const items = products.filter((item) => item.id !== id); //[{}]

  this.setState ({
      products: items
  })
}
  getCartCount = () =>{
    const { products} = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }
  getCartTotal = () => {
    const { products} = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding: 10, fontSize: 20}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;

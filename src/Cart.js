import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor () {
        super();
        this.state ={
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
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
    render () {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem product={product} 
                        key={product.id}
                        // pass this function as props
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteProduct={this.handleDeleteProduct}
                        // func={() => console.log('Sid')}
                        // isLoggedin={false}
                        // jsx ={<h1>Test</h1>}
                        // comp={<CartItem/>}
                        />
                        
                    )
                })}
            </div>
        );
    }
}

export default Cart;
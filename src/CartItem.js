import React from "react";

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
        //this.testing();
    }
    // testing () {
    //     const promise = new Promise((resolve, reject) =>{
    //         setTimeout(() => {
    //             resolve('done');
    //         },5000);
    //     })
    //     promise.then(() =>{
    //         // setState acts like a synchronous call
    //         this.setState({qty: this.state.qty + 10});
    //         this.setState({qty: this.state.qty + 10});
    //         this.setState({qty: this.state.qty + 10});
    //         console.log('state' ,this.state);
    //     });
    // }
    // increaseQuantity =()=>{
    //     //this.state.qty +=1;
    //     // console.log('this',this.state);
    //     // setState form 1
    //     // this.setState({
    //     //     qty: this.state.qty +1
    //     // });
        
    //     // setState form 2
    //     this.setState((prevState) =>{
    //         return{
    //             qty: prevState.qty + 1
    //         } 
    //     }, () => {
    //         console.log('this.state', this.state);
    //     });
    // }
    // decreaseQuantity =() => {
    //     const {qty} = this.state;
    //     if(qty===0){
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return{
    //             qty: prevState.qty -1
    //         }
    //     });
    // }
    render () {
        console.log('this.props', this.props);
        const { price, title,qty } = this.props.product;
        const { 
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct} =this.props;
        return (
            <div className="cart-item">
                {this.props.jsx}
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs
                     {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* {Buttons} */}
                        <img 
                            alt="increase" 
                            className="action-icon" 
                            src="https://img.icons8.com/?size=512&id=1501&format=png"
                            onClick={() => onIncreaseQuantity(product)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icon" 
                            src="https://img.icons8.com/?size=512&id=1504&format=png"
                            onClick={() => onDecreaseQuantity(product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icon" 
                            src="https://img.icons8.com/?size=512&id=57061&format=png"
                            onClick={() => onDeleteProduct(product.id)}
                        />  
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height : 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;
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
    }
    increaseQuantity =()=>{
        console.log('this',this.state);
    }
    render () {
        const { price, title,qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* {Buttons} */}
                        <img 
                            alt="increase" 
                            className="action-icon" 
                            src="https://img.icons8.com/?size=512&id=1501&format=png"
                            onClick={this.increaseQuantity.bind(this)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icon" 
                            src="https://img.icons8.com/?size=512&id=1504&format=png"
                        />
                        <img 
                            alt="delete" 
                            className="action-icon" 
                            src="https://img.icons8.com/?size=512&id=57061&format=png"
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
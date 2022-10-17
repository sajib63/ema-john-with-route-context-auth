import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const {cart,deleteCart, children}=props;
  
    
    let total=0;
    let shipping=0;
    let quantity=0;
    for(const product of cart){
        quantity=quantity+product.quantity;
        total=total+product.price * product.quantity;
        shipping=shipping+product.shipping;
    }
    const tax=total*0.1;
    const totalTax=tax.toFixed(2);
  
    
    const grandTotal=total+shipping+parseFloat(totalTax);
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <h2>selected item: {quantity}</h2>
            <h2>Total price: ${total} </h2>
            <h2>Total Shipping: ${shipping}</h2>
            <h2> Tax: ${totalTax}</h2>

            <h2>Grand Total: ${grandTotal}</h2>

            {/* <button onClick={deleteCart}>Clear Cart</button> */}
            
            {children}
        </div>
    );
};

export default Cart;
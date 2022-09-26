import React from 'react';

const Cart = (props) => {
    const {cart}=props;
    return (
        <div>
            <h1>selected item: {cart.length}</h1>
        </div>
    );
};

export default Cart;
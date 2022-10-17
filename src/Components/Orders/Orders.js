import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const Orders = () => {
    const {  initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);
  
    const handleRemove=(id)=>{
        const remaining=cart.filter(product=> product.id!==id);
        
        setCart(remaining)
        removeFromDb(id)
        
    }
    const deleteCart=()=>{
        setCart([]);
        deleteShoppingCart();
    
       }
   
  
    return (
        <div className='shop-container'>
            <div className='order-container'>
            {
                cart.map(product=><ReviewItem
                key={product.id}
                product={product}
                handleRemove={handleRemove}
                ></ReviewItem>)
            }
            {
                cart.length===0 && <h2>No Items for riview. please add items for review <Link to='/'>Shope More</Link></h2>
            }
            </div>


            <div className='cart-container'>
                <Cart cart={cart} deleteCart={deleteCart}></Cart>

                <Link to='/shipping'>
                <button  style={{marginBottom:'50px', marginLeft:"50px"}}>Proceed Shipping</button>
                </Link>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Orders;
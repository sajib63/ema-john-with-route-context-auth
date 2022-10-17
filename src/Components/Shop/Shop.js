import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const products=useLoaderData()
    const [cart, setCart]=useState([]);

   const deleteCart=()=>{
    setCart([]);
    deleteShoppingCart();

   }



useEffect(()=>{
    const storedCart=getStoredCart();
   const saveCart=[];
   
   for(const id in storedCart){
    const addedProduct=products.find(product=>product.id===id);
    
    if(addedProduct){
        const quantity=storedCart[id];
        addedProduct.quantity=quantity;
        saveCart.push(addedProduct);   
    }
   }
   setCart(saveCart);
 },[products])
//  video .........................7 end 



// video ...................8
    const handleAddToCart=(selectedProduct)=>{
        let newCart=[];

        const exists=cart.find(product=>product.id === selectedProduct.id);
     
        if(!exists){
            selectedProduct.quantity=1;
            newCart=[...cart, selectedProduct];
        }
        else{
            const rest =cart.filter(product=> product.id !== selectedProduct.id);
            exists.quantity=exists.quantity+1;
            newCart=[...rest, exists]

        }

        setCart(newCart);
        addToDb(selectedProduct.id)
       

    }



    return (
        <div className='shop-container'>
           <div className="products-container">
            {
                products.map(product=> <Product
                product={product}
                key={product.id}
                handleAddToCart={handleAddToCart}
                ></Product>)
            }
           </div>

           <div className="cart-container">
            <Cart
            cart={cart}
            deleteCart={deleteCart} >
            <button> <Link to='/orders'>Review Order</Link></button>
            </Cart>
            
           </div>
        </div>
    );
};

export default Shop;
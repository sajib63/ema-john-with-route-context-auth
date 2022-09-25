import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart, setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])

 
    
    const handleAddToCart=(products)=>{
        const newCart=[...cart, products]
        setCart(newCart);

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
            <h1>selected item: {cart.length}</h1>
           </div>
        </div>
    );
};

export default Shop;
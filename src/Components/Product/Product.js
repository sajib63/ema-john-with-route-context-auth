import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {handleAddToCart}=props;
    const {img,name,price,ratings,seller}=props.product;

    
    return (
        <div className='product'>
            <img src={img}   
            alt="" />
           
           <div className='product-info'>
           <p>{name}</p>
            <p>price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings} stars</small></p>

           </div>
           <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
            <p>Add To Cart</p>
            <FontAwesomeIcon style={{fontSize:'20px', marginLeft:'10px', marginTop:'-10px'}} icon={faShoppingCart}></FontAwesomeIcon>
           </button>

        </div>
    );
};

export default Product;
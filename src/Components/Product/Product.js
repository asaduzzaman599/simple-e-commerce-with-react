import React from 'react';
import './Product.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = ({product,selectItem}) => {
    

    const {name,seller,ratings,img,price} = product
    return (
        <div className='product' data-aos="fade-up"
        data-aos-anchor-placement="top-center">
            <img src={img} alt="" />
            <div className="product-info">
            <h3 className='product-name'>{name}</h3>
            <p className="product-price">Price: $ {price}</p>
            <p className="common">Manufacturer: {seller}</p>
            <p className="common">Ratings: {ratings} star</p>
            </div>
            <button 
            onClick={()=>{selectItem(product)}}
            className='product-btn'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;
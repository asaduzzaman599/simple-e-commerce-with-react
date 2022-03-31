import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewProduct.css'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ReviewProduct = ({product,removeItemfromCart}) => {
    const {name,img,price} = product;
    return (
        <div className='review-product'>
            <div className='product-info'>
            <img src={img} alt="" />
            <div>
                <h3>{name}</h3>
                <p>Price : ${price}</p>
                <p><small>Shipping Charge: ${5}</small></p>
            </div>
            </div>
            <div><button className='delete-btn' onClick={()=>removeItemfromCart(product)}><FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button></div>
        </div>
    );
};

export default ReviewProduct;
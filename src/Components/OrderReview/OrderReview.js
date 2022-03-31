import React from 'react';
import { useCart } from '../../hook/useCart';
import { useProduct } from '../../hook/useProduct';

const OrderReview = () => {
    const [product,setProducts] = useProduct();
    const [cart,setCart]=useCart(product);
    

    return (
        <div className='order-review-container'>   
            <div className="review-product-container"></div>
            <div className="cart-container">
                
            </div>
        </div>
    );
};

export default OrderReview;
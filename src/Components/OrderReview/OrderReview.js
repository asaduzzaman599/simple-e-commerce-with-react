import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hook/useCart';
import { useProduct } from '../../hook/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import './OrderReview.css';

const OrderReview = () => {
    const [product, setProducts] = useProduct();
    const [cart, setCart] = useCart(product);

    const removeItemfromCart = (product) => {
        const restProduct = cart.filter(cartProduct => cartProduct._id !== product._id);
        setCart(restProduct)
        removeFromDb(product._id);
    }

    return (
        <div className='order-review-container'>
            <div className="review-product-container">
                {
                    cart.map(product => <ReviewProduct
                        key={product._id}
                        product={product}
                        removeItemfromCart={removeItemfromCart}
                    ></ReviewProduct>)
                }
            </div>
            <div className="">
                <div className="review-cart-conatainer">
                    <Cart
                        selectedItem={cart}
                    >
                        <Link to="/shipment">Confirm Order</Link>
                    </Cart></div>
            </div>
        </div>
    );
};

export default OrderReview;
import React from 'react';
import'./Cart.css'
const Cart = (props) => {
    return (
        <div className='cart'>
            <div className=''>
            <h3>Order Summary</h3>
            <p>Selected Items: {props.selectedItem}</p>
            <p>Total Price:</p>
            <p>Tax: </p>
            <p>Selected Items</p>
            <p>Grand Total: </p>
            </div>
        </div>
    );
};

export default Cart;
import React from 'react';
import'./Cart.css'
const Cart = ({selectedItem}) => {
     let totalPrice = 0;
     let shippingCharge =0;
     let tax = 0;

    for(const product of selectedItem){
        totalPrice += product.price;
        shippingCharge += product.shipping;
    }
    tax = parseFloat((totalPrice *0.05).toFixed(2));
    const grandTotal = totalPrice + shippingCharge+tax;
    console.log(selectedItem)
    return (
        <div className='cart'>
            
            <h3>Order Summary</h3>
            <p>Selected Items: {selectedItem.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shippingCharge}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
            
        </div>
    );
};

export default Cart;
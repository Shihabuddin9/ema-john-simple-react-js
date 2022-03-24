import React from 'react';
import './Cart.css'

const Cart = props => {
    const { cart } = props
    console.log(cart)

    let total = 0
    let shipping = 0
    let quantity = 0
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping

    }
    // Tax 
    const tax = parseFloat(((total / 100) * 10).toFixed(2))
    const grandTotal = total + shipping + tax

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p className='my-4'> Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p className='my-4'>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            <div className='mt-5'>
                <button className='btn-style1 mx-auto'>Clear Cart</button>
                <button className='btn-style2 mx-auto mt-3'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;
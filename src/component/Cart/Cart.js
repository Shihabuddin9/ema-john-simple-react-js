import React from 'react';

const Cart = props => {
    return (
        <div>
            <h4>Order Summary</h4>
            <p className='my-4'> Selected Items: {props.cart.length}</p>
            <p>Total Price: $1140</p>
            <p>Total Shipping Charge: $5</p>
            <p className='my-4'>Tax: $114</p>
            <h5>Grand Total: $1559</h5>
            <div className='mt-5'>
                <button className='btn-style1 mx-auto'>Clear Cart</button>
                <button className='btn-style2 mx-auto mt-3'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;
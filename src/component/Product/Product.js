import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ product, handelAddToCartClick }) => {
    // const { product, handelAddToCartClick } = props
    const { img, name, price, seller, ratings } = product



    return (

        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => handelAddToCartClick(product)} className='add-to-cart'>
                <p className='me-2'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>

    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handelAddToCartClick = product => {
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <section>
            <div className="shop-container">
                <div className=" products-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handelAddToCartClick={handelAddToCartClick}
                        ></Product>)
                    }
                </div>
                <div className=' shoping-cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </section>
    );
};

export default Shop;
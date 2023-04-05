import React, { useState } from 'react';
import './Order.css'
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
const Order = () => {
    const savedCart=useLoaderData();
    const [cart,setCart]=useState(savedCart)
    const handelDeleteItem=(id)=>{
        const remainingCart=cart.filter(product=>product.id !==id);
        setCart(remainingCart);
        removeFromDb(id)
    }
    const handelClearCart=()=>{
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div >
               {
                cart.map(product=><ReviewItem
                key={product.id}
                product={product}
                handelDeleteItem={handelDeleteItem}
                ></ReviewItem>)
               }
            </div>
            <div className='order-container'>
                <Cart
                handelClearCart={handelClearCart}
                 cart={cart}
                >
                    <Link className='checkout-link'  to='/checkout'>
                    <button className='checkout-btn'>Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;
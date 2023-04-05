import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
const Shop = () => {
    const[products,setProducts]=useState([]);
    const[cart,setCart]=useState([])
    const handelProduct=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart)
        addToDb(product.id)
    }
    const handelClearCart=()=>{
        setCart([])
        deleteShoppingCart()
    }
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        const storedCart=getShoppingCart();
         const savedCart=[]
        // console.log(storedCart)
        for(const id in storedCart){
            const idMatchProduct=products.find(product=>product.id===id);
            // console.log(idMatchProduct)
            const quantity=storedCart[id]
            if(idMatchProduct){
                idMatchProduct.quantity=quantity;
                savedCart.push(idMatchProduct)
            }
            // console.log(quantity)
            
        }
        setCart(savedCart)
    },[products])
    // console.log(products)
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    handelProduct={handelProduct}
                    ></Product>)
                }
            </div>
            <div className='order-container'>
                <Cart
                handelClearCart={handelClearCart}
                 cart={cart}
                >
                    <Link className='checkout-link' to='/orders'>
                        <button className='checkout-btn'>Review order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
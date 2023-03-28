import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const[products,setProducts]=useState([]);
    const[cart,setCart]=useState([])
    const handelProduct=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart)
    }
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
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
                 cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;
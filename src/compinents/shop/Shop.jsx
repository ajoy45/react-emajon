import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const[products,setProducts]=useState([]);
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
                    ></Product>)
                }
            </div>
            <div className='order-container'>
                <h1>order summery</h1>
            </div>
        </div>
    );
};

export default Shop;
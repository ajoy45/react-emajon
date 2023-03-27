import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.handelProduct)
    const { img, name, price, ratings, seller } = props.product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h6 >{name}</h6>
                <p>price:${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Ratting:{ratings}</p>
            </div>
            <button onClick={()=>props.handelProduct(props.product)}  className='cart-btn'>Add To Cart</button>
        </div>
    );
};

export default Product;
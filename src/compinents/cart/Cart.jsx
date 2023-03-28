import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
  console.log(cart)
  let priceTotal=0;
  let shippingCharge=0;
  
   for(const product of cart){
    priceTotal+=product.price;
    shippingCharge+=product.shipping
   }
   let tax=parseFloat((priceTotal*.1).toFixed(1));
   let total=parseInt(priceTotal+shippingCharge+tax)
    return (
        <div>
            <h1>order summery</h1>
            <p>Number of item:{cart.length}</p>
            <p>Total Price:{priceTotal}</p>
            <p>Total Shipping Charge:{shippingCharge}</p>
            <p>Tax:{tax}</p>
            <p>Grand Total: {total}</p>
        </div>
    );
};

export default Cart;
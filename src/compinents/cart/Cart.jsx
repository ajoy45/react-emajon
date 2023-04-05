import React from 'react';
import './Cart.css';
import { TrashIcon} from '@heroicons/react/24/solid'
const Cart = ({ cart,handelClearCart,children}) => {
    //   console.log(cart)
    let priceTotal = 0;
    let shippingCharge = 0;
    let quantity = 0
    for (const product of cart) {
        product.quantity = product.quantity || 1
        priceTotal += product.price * product.quantity;
        shippingCharge += product.shipping;
        quantity = quantity + product.quantity;
    }
    let tax = parseFloat((priceTotal * .1).toFixed(1));
    let total = parseInt(priceTotal + shippingCharge + tax)
    return (
        <div>
            <h1>order summery</h1>
            <p>Number of item:{quantity}</p>
            <p>Total Price:{priceTotal}</p>
            <p>Total Shipping Charge:{shippingCharge}</p>
            <p>Tax:{tax}</p>
            <p>Grand Total: {total}</p>
           
           <button onClick={handelClearCart} className='clear-btn'>
                Clear Cart
                <TrashIcon style={{width:"30px",color
            :"red"}}></TrashIcon>
            </button>
           {children}
        </div>
    );
};

export default Cart;
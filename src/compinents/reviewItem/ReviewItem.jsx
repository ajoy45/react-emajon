import React from 'react';
import './ReviewItem.css';
import { TrashIcon} from '@heroicons/react/24/solid'
const ReviewItem = ({product,handelDeleteItem}) => {
    // console.log(product)
    // console.log(handelDeleteItem)
    const{id,img,price,quantity,name}=product
    return (
        <div className='review-container'>
            <div className='review-item'>
                <img  src={img} alt="" />
                <div>
                    <h1>{name}</h1>
                    <p>price:${price}</p>
                    <p>quantity:{quantity}</p>
                </div>
            </div>
            <button onClick={()=>handelDeleteItem(id)} className='delet-icon'>
                <TrashIcon style={{color:"red",width:"30px"}}/>
            </button>
        </div>
    );
};

export default ReviewItem;
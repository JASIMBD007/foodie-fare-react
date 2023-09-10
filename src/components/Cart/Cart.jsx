import React from 'react';
import './Cart.css';
import Modal from '../UI/Modal/Modal';

const cartItems = [
    {
        id: 'c1',
        name: 'Sushi',
        amount: 2,
        price: 12.99
    }
]

const Cart = (props) => {
    return (
        <Modal onHideCart={props.onHideCart} >
            <ul>
                {
                    cartItems.map(item => <li key={item.id}>{item.name}</li>)
                }
            </ul>
            <div className='total'>
                <span>Total Amount : </span>
                <span>33.62</span>
            </div>
            <div className='actions'>
                <button className='button button--alt' onClick={props.onHideCart} >Close</button>
                <button className='button'>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;

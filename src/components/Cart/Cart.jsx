import React, { useContext } from 'react';
import './Cart.css';
import Modal from '../UI/Modal/Modal';
import CartContext from '../../context/cartContext';
import CartItem from './CartItem/CartItem';


const Cart = (props) => {

    const cartContext = useContext(CartContext);
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const itemsOnCart = cartContext.items.length > 0;

    const handleRemoveItem = id => {
        cartContext.removeItem(id);

    };

    const handleAddItem = item => {
        cartContext.addItem({ ...item, amount: 1 });
    };

    return (
        <Modal onHideCart={props.onHideCart} >
            <ul className='cart-items'>
                {
                    cartContext.items.map(item =>
                        <CartItem
                            key={item.id}
                            item={item}
                            onRemove={() => handleRemoveItem(item.id)}
                            onAdd={() => handleAddItem(item)}
                        />)
                }
            </ul>
            <div className='total'>
                <span>Total Amount : </span>
                <span>{totalAmount}</span>
            </div>
            <div className='actions'>
                <button className='button button--alt' onClick={props.onHideCart} >Close</button>
                {itemsOnCart && <button className='button'>Order</button>
                }
            </div>
        </Modal>
    )
}

export default Cart;

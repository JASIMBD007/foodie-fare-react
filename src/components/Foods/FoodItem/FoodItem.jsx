import React, { useContext } from 'react'
import './FoodItem.css'
import FoodItemForm from '../FoodItemForm/FoodItemForm';
import CartContext from '../../../context/cartContext';

const FoodItem = ({ food }) => {
    const cartContext = useContext(CartContext);

    const { id, name, description, price } = food;

    const handleAddToCart = (amount) => {
        cartContext.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price
        });
    };

    return (
        <li className='meal'>
            <div>
                <h3>{name}</h3>
                <div className='description'>{description}</div>
                <div className='price'>${price.toFixed(2)}</div>
            </div>
            <div>
                <FoodItemForm onAddToCart={handleAddToCart} />
            </div>
        </li>
    )
}

export default FoodItem
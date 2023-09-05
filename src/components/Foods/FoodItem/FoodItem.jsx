import React from 'react'
import './FoodItem.css'
import FoodItemForm from '../FoodItemForm/FoodItemForm';
const FoodItem = ({ food }) => {
    const { name, description, price } = food;
    return (
        <li className='meal'>
            <div>
                <h3>{name}</h3>
                <div className='description'>{description}</div>
                <div className='price'>${price.toFixed(2)}</div>
            </div>
            <div>
                <FoodItemForm />
            </div>
        </li>
    )
}

export default FoodItem
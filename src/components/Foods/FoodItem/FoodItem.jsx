import React from 'react'

const FoodItem = ({ food }) => {
    const { name, description, price } = food;
    return (
        <li className='meal'>
            <div>
                <h3>{name}</h3>
                <div className='description'>{description}</div>
                <div className='price'>{price}</div>
            </div>
        </li>
    )
}

export default FoodItem
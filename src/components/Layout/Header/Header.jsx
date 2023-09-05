import React, { Fragment } from 'react';
import './Header.css';
import meals from '../../../assets/meals.jpg';

const Header = () => {
    return (
        <Fragment>
            <header>
                <h1>FoodieFare</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={meals} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    )
}

export default Header
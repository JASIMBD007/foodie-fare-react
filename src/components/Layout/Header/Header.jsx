import React, { Fragment } from 'react';
import './Header.css';
import meals from '../../../assets/meals.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = () => {
    return (
        <Fragment>
            <header>
                <h1>FoodieFare</h1>
                <HeaderCartButton />
            </header>
            <div>
                <img src={meals} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    )
}

export default Header
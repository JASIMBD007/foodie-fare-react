import React, { Fragment } from 'react';
import './Header.css';
import meals from '../../../assets/meals.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className='header'>
                <h1>FoodieFare</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className='main-image'>
                <img src={meals} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    )
}

export default Header
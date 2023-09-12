import { useContext, useEffect, useState } from 'react'
import './HeaderCartButton.css'
import CartIcon from '../../Cart/CartIcon/CartIcon'
import CartContext from '../../../context/cartContext'

const HeaderCartButton = (props) => {
    const [btnHighlighted, setBtnHighlighted] = useState(false);
    const cartContext = useContext(CartContext);

    const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const { items } = cartContext;
    const button = 'button';
    const bump = 'bump';
    const btnClasses = `${button} ${btnHighlighted ? bump : ''}`;

    useEffect(() => {
        if (cartContext.items.length === 0) {
            return;
        }
        setBtnHighlighted(true);
        const timer = setTimeout(() => {
            setBtnHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick} >
            <span className='icon'>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className='badge'>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton
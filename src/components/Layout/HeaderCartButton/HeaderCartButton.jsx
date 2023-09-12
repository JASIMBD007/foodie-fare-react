import { useContext } from 'react'
import './HeaderCartButton.css'
import CartIcon from '../../Cart/CartIcon/CartIcon'
import CartContext from '../../../context/cartContext'

const HeaderCartButton = (props) => {

    const cartContext = useContext(CartContext);
    const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button className='button' onClick={props.onClick} >
            <span className='icon'>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className='badge'>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton
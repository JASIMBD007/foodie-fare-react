import './CartItem.css'

const CartItem = ({ item, onAdd, onRemove }) => {
    const { id, name, price, amount } = item;

    return (
        <li className="cart-item">
            <div>
                <h2>{name}</h2>
                <div className="description">
                    <span className="price">${price.toFixed(2)}</span>
                    <span className="amount">x {amount}</span>
                </div>
            </div>
            <div className="action">
                <button onClick={onRemove}>−</button>
                <button onClick={onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
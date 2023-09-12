import { createContext, useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
};

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { },

});

export const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const handleAddItem = item => {
        dispatchCartAction({ type: 'ADD_ITEM', item: item });
    };

    const handleRemoveItem = id => {
        dispatchCartAction({ type: "REMOVE_ITEM", id: id })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: handleAddItem,
        removeItem: handleRemoveItem
    };

    return (
        <CartContext.Provider value={cartContext}>

            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Foods from './components/Foods/Foods'
import Header from './components/Layout/Header/Header'
import { CartProvider } from './context/cartContext'

function App () {
  const [cartIsShown, setCartIsShown] = useState(false);

  const handleShowCart = () => {
    setCartIsShown(true);
  };

  const handleHideCart = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={handleHideCart} />}
      <Header onShowCart={handleShowCart} />
      <Foods />
    </CartProvider>
  )
}

export default App

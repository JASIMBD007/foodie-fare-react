import { Fragment, useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Foods from './components/Foods/Foods'
import Header from './components/Layout/Header/Header'

function App () {
  const [cartIsShown, setCartIsShown] = useState(false);

  const handleShowCart = () => {
    setCartIsShown(true);
  };

  const handleHideCart = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={handleHideCart} />}
      <Header onShowCart={handleShowCart} />
      <Foods />
    </Fragment>
  )
}

export default App

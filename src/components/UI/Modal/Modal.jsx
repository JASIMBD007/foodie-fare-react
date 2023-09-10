import { Fragment } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import './Modal.css';

const Backdrop = (props) => {
    return <div className='backdrop' onClick={props.onHideCart} />;
};

const ModalOverlay = (props) => { // Pass children as a prop
    return (
        <div className='modal'>
            <div className='content'>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => { // Pass children as a prop
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
}

export default Modal;

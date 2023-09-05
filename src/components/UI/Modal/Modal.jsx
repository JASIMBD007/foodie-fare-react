import { Fragment } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import './Modal.css';

const Backdrop = () => {
    return <div className='backdrop' />;
};

const ModalOverlay = ({ children }) => { // Pass children as a prop
    return (
        <div className='modal'>
            <div className='content'>{children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children }) => { // Pass children as a prop
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
}

export default Modal;

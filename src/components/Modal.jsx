import ReactDOM from 'react-dom';

const Modal = ({ children }) => {

    ReactDOM.render(
        { children },
        document.querySelector('modal-window')
    )
}

export default Modal;
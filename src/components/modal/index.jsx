import { useNavigate } from 'react-router-dom';
import './modal.scss';

const Modal = ({ children, isCanceleable = true }) => {
    const navigateTo = useNavigate();

    const closeModal = (event) => {
        if (isCanceleable) {
            const { className } = event.target;

            if (className === 'modal-window') {
                navigateTo(-1, { replace: true });
            }
        }
    }
    
    return (
        <div 
         className="modal-window"
         onClick={closeModal}
        >
            { children }
        </div>
    )
}

export default Modal;
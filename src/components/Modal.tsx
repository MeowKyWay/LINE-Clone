import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  top: string;
  right: string;
  bottom: string;
  left: string;
}

function Modal({ onClose, children , top , right , bottom , left}: ModalProps) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="absolute inset-0 bg-gray-300 opacity-80"></div>
        <div className={`absolute bg-white`} style={{top , right , bottom , left}}>
            <div className="flex flex-col justify-between h-full">
            {children}
            </div>
        </div>
    </div>,
    document.querySelector('.modal-container') as Element
  );
}

export default Modal;

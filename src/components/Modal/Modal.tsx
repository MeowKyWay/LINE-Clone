import { ReactNode } from 'react';
import ModalOverlay from './ModalOverlay';
import useTheme from '../../theme';
import { IoClose } from "react-icons/io5";

function Modal({ onClose, label, children, height, width }: {
  onClose: () => void;
  label: string
  children: ReactNode;
  height: string;
  width: string;
}) {

  const theme = useTheme().currentTheme;

  return (
    <ModalOverlay onClose={onClose}>
      <div className="grid place-items-center size-full">
        <div style={{
          height: height,
          width: width,
          zIndex: 10000,
          backgroundColor: theme.color.primary.background,
          boxShadow: theme.color.primary.line + ' 0px 0px 5px',
        }}
        className="rounded-lg flex flex-col">
          <div 
            className="h-7.5 w-full rounded-t-lg flex flex-row items-center pl-2 pr-5 text-sm font-light"
            style={{
              backgroundColor: theme.color.secondary.background,
              color: 'white',
            }}>
              <style>
                {`
                  .container:hover .child {
                    display: block;
                  }

                  .child {
                    display: none;
                  }
                `}
              </style>
              <div className="size-3 rounded-full bg-red-500 cursor-pointer container" onClick={onClose}>
                <IoClose fontSize={12} color="black" className="child" />
              </div>
              <span className="flex-1 text-center">{label}</span>
          </div>
          {children}
        </div>
      </div>

    </ModalOverlay>
  );
}

export default Modal;

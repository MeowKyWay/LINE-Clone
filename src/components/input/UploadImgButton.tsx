import React, { useRef } from 'react';
import { FaCamera } from "react-icons/fa";
import classNames from 'classnames';

interface UploadImageButtonProps {
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const UploadImageButton: React.FC<UploadImageButtonProps> = ({ onImageChange , className}) => {
  const imageFileInput = useRef<HTMLInputElement | null>(null);

  const style = classNames("z-10 bg-black opacity-75 border border-white w-6 h-6 rounded-full flex items-center justify-center cursor-pointer " + className)

  const uploadImageRef = () => {
    if (imageFileInput.current) {
      imageFileInput.current.click();
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={imageFileInput}
        onChange={onImageChange}
        className="absolute w-0 h-0"
      />
      <div
        className={style}
        onClick={uploadImageRef}
      >
        <FaCamera style={{color: "white"}} size="12px"/>
      </div>
    </div>
  );
};

export default UploadImageButton;

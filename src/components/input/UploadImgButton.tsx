import React, { useRef } from 'react';
import { CiCamera } from "react-icons/ci";
import classNames from 'classnames';

interface UploadImageButtonProps {
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const UploadImageButton: React.FC<UploadImageButtonProps> = ({ onImageChange , className}) => {
  const imageFileInput = useRef<HTMLInputElement | null>(null);

  const style = classNames("bg-white border border-gray-600 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer " + className)

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
        <CiCamera />
      </div>
    </div>
  );
};

export default UploadImageButton;

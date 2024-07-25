import React from "react";
import { MdCameraAlt } from "react-icons/md";

function ImageInput({setImage, className}: {
    setImage: (image: File) => void
    className?: string
}) {
    const imageInputRef = React.createRef<HTMLInputElement>();

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log("test");
        // console.log("e:", e);
        const image = e.target.files ? e.target.files[0] : null;
        if (!image) return;

        // console.log("image:", image);

        setImage(image);
    }

    return (
        <div className={className}>
            <style>
                {`
                    .input {
                        background-color: rgba(45, 46, 48, 0.5);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `}
            </style>
            <input type="file" accept="image/*" onChange={handleChangeImage} ref={imageInputRef} style={{
                display: "none"
            }} />
            <div className="size-5 rounded-full input cursor-pointer" onClick={() => imageInputRef.current?.click()}>
                <MdCameraAlt size="14px" color="#ffffff"/>
            </div>
        </div>
    )
}

export default ImageInput;
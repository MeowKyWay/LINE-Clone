//For testing

import { generateClient } from "aws-amplify/api";
import useTheme from "../theme";
import { useState } from "react";
import Button from "../components/input/Button";
import { listUserChats } from "../utilities/APIUtils";
import { invokeLambda, LambdaARN } from "../utilities/LambdaUtils";
import { fetchAuthSession } from "aws-amplify/auth";
import { getChat, getMessage, listMessages } from "../graphql/queries";
import UploadImageButton from "../components/input/UploadImgButton";
import { useAppDispatch, useAppSelector } from "../hook";
import { uploadImg } from "../store/thunks/imagesThunk";

function TestPage() {

    const theme = useTheme().currentTheme;

    const client = generateClient();
    const [image , setImage] = useState<File | null>(null)
    const currentUser = useAppSelector(state => state.user.currentUser)
    const [uploadStatus , setUploadStatus] = useState("")
    const [friendLineID, setFriendLineID] = useState('');
    const dispatch = useAppDispatch()

    function onImageChange(e: React.ChangeEvent<HTMLInputElement>){
        const fileUploaded = e.target.files ? e.target.files[0] : null;
        if(!fileUploaded) return;
        setImage(fileUploaded)
    }

    async function uploadImage(){
        if(image){
            const filename = `public/${image?.name}}`
            dispatch(setProfileUser(filename))
            dispatch(uploadImg({filename,image}))
            dispatch(fetchUser())
            setUploadStatus("success")
    }
}

    const test = async () => {
        try {
            const res = await invokeLambda({
                arn: LambdaARN.SEND_MESSAGE,
                body: {
                    accessToken: (await fetchAuthSession()).tokens?.accessToken.toString(),
                    content: 'Test123',
                    friendID: 'dewy_hinges',
                }
            })
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }

    const test2 = async () => {
        const str = "{ input: { chatID: 'dewy_hinges:feeders_wagon', content: 'Test123' } }"
        const query = str.match(/chatID:\s*["']([^"']+)["']/)[1].replace(/^["']|["']$/g, '')

        console.log(query);
    }

    return (
        <div
            className="flex flex-col items-center"
            style={{
                color: theme.color.primary.text,
            }}
        >
            <UploadImageButton onImageChange={onImageChange}></UploadImageButton>
            { image && <img src={URL.createObjectURL(image)}></img>}
            <ProfilePicture size="94px" src={currentUser?.image}></ProfilePicture>
            <button onClick={uploadImage} className="bg-red-500">upload</button>
            { uploadStatus && <div style={{color:"green"}}>{uploadStatus}</div>}
        </div>
    )
}

export default TestPage;
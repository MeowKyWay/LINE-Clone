import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadData , getProperties} from "aws-amplify/storage";

const uploadImg = createAsyncThunk(
  'uploadImg',
  async ({ filename, image }: { filename: string, image: File }) => {
    const result = await uploadData({
      path: filename,
      data: image,
    }).result;

    return result;
  }
);

const fetchProfileImage = createAsyncThunk('users/fetchProfileImage', async (profilePath: string) => {
      try{
      const response = await getProperties({
        path: profilePath
      })
      console.log("response:", response);
      
      return response.path
    }
    catch(error){
      console.log(error);
      throw error

    }

})

const fetchCoverImage = createAsyncThunk('users/fetchCoverImage', async (coverPath: string) => {
  try{
  const response = await getProperties({
    path: coverPath
  })
  console.log("response:", response);
  
  return response.path
}
catch(error){
  console.log(error);
  throw error
}

})


export { uploadImg , fetchProfileImage , fetchCoverImage};

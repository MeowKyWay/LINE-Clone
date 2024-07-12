import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadData } from "aws-amplify/storage";

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

export { uploadImg };

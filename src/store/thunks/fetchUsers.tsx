import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateClient } from "aws-amplify/api";

const client = generateClient();

const fetchUsers = createAsyncThunk('users/fetch', async () => {

})
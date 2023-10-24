import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios"

export const fetchPoints = createAsyncThunk('posts/fetchPosts', async () => {
    const {data} = await axios.get('/points');
    return data;
});
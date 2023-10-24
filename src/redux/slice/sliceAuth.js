import instance from "../../axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params)=> {
    const { data } = await instance.post('/auth/login', params);
    return data;
})
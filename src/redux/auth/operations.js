import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://connections-api/herokuapp.com';

const setAuthHeader = token => axios.defaults.headers.common.Authorization;

export const register = createAsyncThunk('auth/register', async (data, thunkAPI) => {
    try {
        const res = await axios.post('/users/signup', data)
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
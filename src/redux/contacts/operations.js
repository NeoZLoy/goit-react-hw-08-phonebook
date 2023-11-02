import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const fetchContacts = createAsyncThunk('contacts/', async (_, thunkAPI) => {
    try {
        const res = await axios.get('/contacts');
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const addContact = createAsyncThunk('/contacts/addContact', async (newContact, thunkAPI) => {
    try {
        const res = await axios.post('/contacts', newContact);
        console.log(res)
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const removeContact = createAsyncThunk('/contacts/removeContact', async (contactId, thunkAPI) => {
    try {
        const res = await axios.delete(`contacts/${contactId}`);
        setAuthHeader(res.data.token)
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
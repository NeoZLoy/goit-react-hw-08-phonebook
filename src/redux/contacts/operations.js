import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const removeContact = createAsyncThunk('/contacts/removeContact', async (contactId, thunkAPI) => {
    try {
        const res = await axios.delete(`contacts/${contactId}`);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { userAuth: {} },
    reducers: {
        login (state, action) {
            // console.log(action.payload)
            state.userAuth = action.payload
        },
    }
})

export const authActions = authSlice.actions;

export default authSlice;

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { Username: '', Password: ''  },
    reducers: {
        getUsername (state, action) {
            // console.log(action.payload)
            state.Username = action.payload
        },
        getPassword (state, action) {
            // console.log(action.payload)
            state.Password = action.payload
        },
        // getSignupUsername (state, action) {
        //     // console.log(action.payload)
        //     state.userAuth = action.payload
        // },
        // getSignupPassword (state, action) {
        //     // console.log(action.payload)
        //     state.userAuth = action.payload
        // },
    }
})

export const authActions = authSlice.actions;

export default authSlice;

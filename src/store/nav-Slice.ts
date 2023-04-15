import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'nav',
    initialState: { isActive: false, darkMode: true },
    reducers: {
        setNavbar(state, action) {
            state.isActive = !state.isActive;
        },
        setDarkMode(state, action) {
            state.darkMode = !state.darkMode;
        }
    }
})

export const navActions = navSlice.actions;

export default navSlice;

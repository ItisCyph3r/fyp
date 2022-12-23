import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-Slice";
import navSlice from "./nav-Slice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        nav: navSlice.reducer,
    }
});

export default store;
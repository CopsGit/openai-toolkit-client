import {configureStore} from '@reduxjs/toolkit'

import authReducer from "./slice/authSlice";
import pageReducer from "./slice/pageSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        page: pageReducer,
    }
})
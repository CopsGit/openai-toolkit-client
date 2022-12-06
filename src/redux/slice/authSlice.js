import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        saveCurrentUser: async (state, action) => {
            state.currentUser = action.payload
        },
    }
})

export default authSlice.reducer

export const {
    saveCurrentUser,
} = authSlice.actions
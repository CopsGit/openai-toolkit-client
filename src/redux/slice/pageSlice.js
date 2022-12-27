import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentFeature: 'home',
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        saveCurrentPage: async (state, action) => {
            state.currentPage = action.payload
        },
        saveCurFeature: async (state, action) => {
            state.currentFeature = action.payload
        }
    }
})

export default pageSlice.reducer

export const {
    saveCurrentPage,
    saveCurFeature
} = pageSlice.actions
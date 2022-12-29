import {createSlice} from '@reduxjs/toolkit';
import React from 'react';

const initialState = {
    curFeature: "Home",
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        saveCurFeature: (state, action) => {
            state.curFeature = action.payload
        },
    }
})

export default pageSlice.reducer

export const {
    saveCurFeature,
} = pageSlice.actions

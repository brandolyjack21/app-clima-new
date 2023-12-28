import { createSlice } from "@reduxjs/toolkit";

export const statusSlideWindow = createSlice({
    name:'statusSlideWindow',
    initialState:{
        value: false
    },
    reducers:{
        setSlideWindow : (state) => {
            state.value = !state.value
        }
    }
}) 

export const { setSlideWindow } = statusSlideWindow.actions

export default statusSlideWindow.reducer
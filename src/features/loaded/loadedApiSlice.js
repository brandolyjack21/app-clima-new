import { createSlice } from "@reduxjs/toolkit";

export const loadedApiSlice = createSlice({
    name:'loadedApi',
    initialState:{
        value: false
    },
    reducers:{
        loadedApiState: (state) => {
            state.value = true
        }
    }

})

export const { loadedApiState } = loadedApiSlice.actions

export default loadedApiSlice.reducer
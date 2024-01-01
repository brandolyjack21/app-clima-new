import { createSlice } from "@reduxjs/toolkit";

export const cities = createSlice({
    name:'currentCity',
    initialState:{
        value: ''
    },
    reducers:{
        setCurrentCity: (state, action) => {
            
            //console.log(action.payload, '<=== action.payload');
            state.value = action.payload
        },
        cambiarValor : (state, action) => {
            state.value = action.payload
        }
    }

})

export const { setCurrentCity, cambiarValor } = cities.actions

export default cities.reducer
import { createSlice } from "@reduxjs/toolkit";

export const cities = createSlice({
    name:'currentCity',
    initialState:{
        value: 'este es el gran valor'
    },
    reducers:{
        setCurrentCity: (state, action) => {
            state.value = action.payload
            console.log(action.payload, '<=== action.payload');
        },
        cambiarValor : (state, action) => {
            state.value = action.payload
        }
    }

})

export const { setCurrentCity, cambiarValor } = cities.actions

export default cities.reducer
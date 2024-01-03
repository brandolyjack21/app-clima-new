import { createSlice } from "@reduxjs/toolkit";

const numberOfCitiesOnTheList = createSlice({
    name:'numberOfCitiesOnTheList',
    initialState:{
        value: []
    },
    reducers:{
        updateCityLengthQuantity: (state, action) => {
           state.value = action.payload
        }
    }
})

export const { updateCityLengthQuantity } = numberOfCitiesOnTheList.actions

export default numberOfCitiesOnTheList.reducer 
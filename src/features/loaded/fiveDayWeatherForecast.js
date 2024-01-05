import { createSlice } from "@reduxjs/toolkit";

export const fiveDayWeatherForecast = createSlice({
    name : 'fiveDayWeatherForecast',
    initialState:{
        value:[]
    },
    reducers:{
        setfiveDayWeatherForecast: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setfiveDayWeatherForecast } = fiveDayWeatherForecast.actions

export default fiveDayWeatherForecast.reducer
import { createSlice } from "@reduxjs/toolkit";

const fiveDayWeatherForecastSlider = createSlice({
    name: 'fiveDayWeatherForecastSlider',
    initialState:{
        value: false
    }, 
    reducers:{
        setSilderFiveDayWeatherForecast: (state) => {
            state.value = !state.value
        }
    }
})

export const { setSilderFiveDayWeatherForecast } = fiveDayWeatherForecastSlider.actions
export default fiveDayWeatherForecastSlider.reducer
import { configureStore } from "@reduxjs/toolkit";
import currentCityReducer from "../features/loaded/cities";
import  setStatusSlideWindow  from "../features/loaded/slideWindow";
import numberOfCitiesOnTheList from "../features/loaded/numberOfCitiesOnTheList";
import fiveDayWeatherForecast from "../features/loaded/fiveDayWeatherForecast";
import fiveDayWeatherForecastSlider from "../features/loaded/fiveDayWeatherForecastSlider";

export default configureStore({
    reducer:{
        currentCity : currentCityReducer,
        statusSlideWindow : setStatusSlideWindow,
        numberOfCitiesOnTheList:numberOfCitiesOnTheList,
        fiveDayWeatherForecast:fiveDayWeatherForecast,
        fiveDayWeatherForecastSlider: fiveDayWeatherForecastSlider
    }
})
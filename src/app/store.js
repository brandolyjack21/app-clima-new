import { configureStore } from "@reduxjs/toolkit";
import currentCityReducer from "../features/loaded/cities";
import  setStatusSlideWindow  from "../features/loaded/slideWindow";
import numberOfCitiesOnTheList from "../features/loaded/numberOfCitiesOnTheList";

export default configureStore({
    reducer:{
        currentCity : currentCityReducer,
        statusSlideWindow : setStatusSlideWindow,
        numberOfCitiesOnTheList:numberOfCitiesOnTheList
    }
})
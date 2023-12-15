import { configureStore } from "@reduxjs/toolkit";
import loadedApi from "./../features/loaded/loadedApiSlice"

export default configureStore({
    reducer:{
        loadedApi:loadedApi
    }
})
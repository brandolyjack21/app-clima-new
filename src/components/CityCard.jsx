import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCurrentCity } from "../features/loaded/cities";
import { setSlideWindow } from "../features/loaded/slideWindow";

function CityCard({ cityName }) {
  const [cityWeather, setCityWeather] = useState();

  const API_KEY = import.meta.env.VITE_APIKEYCLIMATE;

  const API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setCurrentCity(cityWeather?.name))
    dispatch(setSlideWindow())
  }

  useEffect(() => {
    axios
      .get(API_WEATHER)
      .then((res) => {
        setCityWeather(res.data);
      })
      .catch((error) => {
        console.log(error);
        setCityWeather(false)
      });
  }, []);
  if (cityWeather) {
    return (
      <li onClick={handleClick}>
        <div className="container-cityName">
          <p>
            {cityWeather?.name} <i className="bx bx-map"></i>
          </p>
          <span>
            Max.{Math.round(cityWeather?.main?.temp_max - 273.15)}°C / Min.
            {Math.round(cityWeather?.main?.temp_min - 273.15)}°C
          </span>
        </div>
        <div className="container-weather-temperature">
          {Math.round(cityWeather?.main?.temp - 273.15)}°C
        </div>
      </li>
    );
  }else{
    <></>
  }
}

export default CityCard;

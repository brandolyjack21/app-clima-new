import React, { useEffect, useState } from "react";
import getIP from "../utils/getIP";
import axios from "axios";
import listOfCities from "../utils/listOfCities";
import { setCurrentCity, cambiarValor } from "../features/loaded/cities";
import { useDispatch, useSelector } from "react-redux";

function WidgetTemperatura() {
  const [climateData, setClimaData] = useState({});
  // console.log(process.env.APIKEY);

  console.log();

  const getData = async () => {
    try {
      const APIKEYCLIMATE = await import.meta.env.VITE_APIKEYCLIMATE;
      const ciudad = await getIP();
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${APIKEYCLIMATE}&lang=es`
        )
        .then((res) => {
          setClimaData(res.data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (climateData.name) {
      listOfCities({
        name: climateData?.name,
        temp_max: Math.round(climateData?.main?.temp_max - 273.15),
        temp_min: Math.round(climateData?.main?.temp_min - 273.15),
        temp: Math.round(climateData?.main?.temp - 273.15),
      });
    }
  }, [climateData]);

  return (
    <section className="widgetTemperatura">
      <ul className="widgetTemperatura-container-data">
        <li className="data-temperatura-list data-temperatura-list-number">
          {climateData && typeof climateData.main?.temp === "number"
            ? Math.round(climateData.main.temp - 273.15)
            : "20"}
        </li>
        <li className="data-temperatura-list data-temperatura-list-numbers">
          {climateData?.weather?.[0].description}{" "}
          {Math.round(climateData?.main?.temp_max - 273.15)}º
          <span style={{ color: "#ffffffc7" }}>/</span>
          {Math.round(climateData?.main?.temp_min - 273.15)}º
        </li>
        <li className="data-temperatura-list data-temperatura-list-ciudad">
          {climateData?.name}
        </li>
      </ul>
    </section>
  );
}

export default WidgetTemperatura;

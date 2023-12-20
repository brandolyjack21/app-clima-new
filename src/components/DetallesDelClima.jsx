import React, { useEffect, useState } from "react";
import fiveDayForecastApi from "../utils/getFiveDayForecast";

function DetallesDelClima() {
  const [fiveDayForecast, setFiveDayForecast] = useState({});
  const [weekday, setWeekday] = useState([]);

  const getWeekday = async () => {
    const filterDays = [];
    const days = [];
    const forecastData = await fiveDayForecast;

    forecastData?.list?.map((day) => {
      const date = day.dt_txt.split(" ");

      if (!filterDays.includes(date[0])) {
        filterDays.push(date[0]);
        days.push(day);
      }
    });
    setWeekday(days);
  };

  const getDayOfWeek = (unconvertedDate) => {
    const date = new Date(unconvertedDate);
    const DayOfWeek = date.getDay();

    const week = ["Dom.", "Lun.", "Mar.", "Mie.", "Jue.", "Vie.", "Sab."];

    return week[DayOfWeek];
  };

  const updateData = async () => {
    const forecast = await fiveDayForecastApi();
    setFiveDayForecast(forecast);
  };

  useEffect(() => {
    updateData();
  }, []);

  useEffect(() => {
    getWeekday();
  }, [fiveDayForecast]);
  return (
    <section className="container-clima-data">
      <ul className="container-list-days">
        <li className="list-days">Pronostico de 5 día</li>
        <li className="list-days">
          Más detalles <i class="bx bxs-right-arrow"></i>
        </li>
      </ul>
      <ul className="container-weather-forecast">
        {weekday?.map(
          (day, index) =>
            index < 3 && (
              <li className="weather-forecast" key={index}>
                <p>
                  {getDayOfWeek(day?.dt_txt)} {day?.weather?.[0].description}
                </p>
                <p>
                  {Math.round(day?.main?.temp_max - 273.15)}º/
                  {Math.round(day?.main?.temp_min - 273.15)}º
                </p>
              </li>
            )
        )}
      </ul>
      <button className="button-weather-forecast">Pronóstico de 5 días</button>
    </section>
  );
}

export default DetallesDelClima;

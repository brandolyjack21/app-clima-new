import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import "@mui/styled-engine";
import "../style/FiveDayWeatherForecast.css";
import { useDispatch, useSelector } from "react-redux";
import { setSilderFiveDayWeatherForecast } from "../features/loaded/fiveDayWeatherForecastSlider";

function FiveDayWeatherForecast() {
  const [dataXAxiesAndSeries, setDataXAxiesAndSeries] = useState([
    { x: null, y: null },
  ]);
  const dataFiveDayWeatherForecast = useSelector(
    (state) => state.fiveDayWeatherForecast.value
  );

  const stateSlider = useSelector(state => state.fiveDayWeatherForecastSlider.value)

  const dispatch = useDispatch()

  // const datesOfTheMonth = () => {
  //   const datesOfTheMonth = [null];
  //   dataFiveDayWeatherForecast?.map((day, index) => {
  //     const date = day?.dt_txt?.split(" ")[0]?.split("-");
  //     datesOfTheMonth.push(date[2]);
  //   });
  //   if (datesOfTheMonth.length > 1) {
  //     datesOfTheMonth.push(null);
  //     return datesOfTheMonth;
  //   } else {
  //     return [1, 2, 3, 4, 5, 6];
  //   }
  // };

  const  datesOfTheMonth = () => {
    
    const datesOfTheMonth = [];
    dataFiveDayWeatherForecast?.map((day, index) => {
      const date = new Date(day?.dt_txt);
      const DayOfWeek = date.getDay();

      const week = ["Dom.", "Lun.", "Mar.", "Mie.", "Jue.", "Vie.", "Sab."];

      datesOfTheMonth.push(week[DayOfWeek])
    })
    if (datesOfTheMonth.length > 1) {
      return datesOfTheMonth;
    } else {
      return [1, 2, 3, 4, 5, 6];
    }
  }

  const extractTheTemperature = () => {
    const temperature = [{data:[], color:'#50aaffe5'}];
    dataFiveDayWeatherForecast?.map((day, index) => {
      temperature[0].data.push(Math.round(day?.main?.temp - 273.15));
    });
    if (temperature[0].data.length > 1) {
      return temperature;
    } else {
      return [{data:[10]}];
    }
  };

  const dataSet = () => {
    const data = [];
    dataFiveDayWeatherForecast?.map((day, index) => {
      const date = day?.dt_txt?.split(" ")[0]?.split("-");
      const temperature = Math.round(day?.main?.temp - 273.15);
      const xAxisAndSeries = { x: date[2], Y: temperature };
      data.push(xAxisAndSeries);

      if (data.length > 1) {
        setDataXAxiesAndSeries(data);
      }
    });
    console.log(data, "000000000000 esto es data 000000000");
  };

  useEffect(() => {
    
  }, [dataFiveDayWeatherForecast]);
  return (
    <div className={ stateSlider ? "FiveDayWeatherForecast-container" : "FiveDayWeatherForecast-container FiveDayWeatherForecast-container-disguise" }>
      <header className="FiveDayWeatherForecast-header">
        <div>
          <i onClick={() => {dispatch(setSilderFiveDayWeatherForecast())} } className="bx bx-left-arrow-alt"></i>
        </div>
        <div className="FiveDayWeatherForecast-header-text">
          Grafico del Clima.
        </div>
      </header>
      <main className="FiveDayWeatherForecast-main" >
        <BarChart
          xAxis={[
            { scaleType: "band", data: datesOfTheMonth() },
          ]}
          series={extractTheTemperature()}
          width={320}
          height={300}
        />
      </main>
    </div>
  );
}

export default FiveDayWeatherForecast;

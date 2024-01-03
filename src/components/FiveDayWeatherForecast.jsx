import React from "react";
import { LineChart } from "@mui/x-charts";

function FiveDayWeatherForecast() {
  return (
    <div className="FiveDayWeatherForecast-container">
      <header className="FiveDayWeatherForecast-header">
        <div>
          <i className="bx bx-left-arrow-alt"></i>
        </div>
        <div className="FiveDayWeatherForecast-header-text">Pronóstico de 5 días</div>
      </header>
      <main className="FiveDayWeatherForecast-main">
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          width={500}
          height={300}
        />
      </main>
    </div>
  );
}

export default FiveDayWeatherForecast;

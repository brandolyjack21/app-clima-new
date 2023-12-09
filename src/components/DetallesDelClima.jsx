import React from "react";

function DetallesDelClima() {
  return (
    <section className="container-clima-data">
      <ul className="container-list-days">
        <li className="list-days">Pronostico de 5 día</li>
        <li className="list-days">Más detalles <i class='bx bxs-right-arrow'></i></li>
      </ul>
      <ul className="container-weather-forecast">
        <li className="weather-forecast">
          <p>☀ Sáb. Despejado</p>
          <p>33º/24º</p>
        </li>
        <li className="weather-forecast">
          <p>🌧 Dom. Lluvia</p>
          <p>32º/23º</p>
        </li>
        <li className="weather-forecast">
          <p>🌧 Lun. Lluvia</p>
          <p>33º/24º</p>
        </li>
      </ul>
      <button className="button-weather-forecast">
        Pronóstico de 5 días
      </button>
    </section>
  );
}

export default DetallesDelClima;

import React, { useEffect } from "react";
import "./../style/locationsList.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSlideWindow } from "../features/loaded/slideWindow";

function LocationsList() {

  const windowstatus = useSelector(state => state.statusSlideWindow.value)
  const dispatch = useDispatch()

  useEffect(() => {
  
  },[])
  return (
    <>
      <section className={windowstatus ? 'container-locationsList container-locationsList-hidden': 'container-locationsList'}>
        <section className="locationsList-container-header">
          <i class="bx bx-left-arrow-alt" onClick={() => dispatch(setSlideWindow())}></i>
          <span>Administrar ciudades</span>
          <div className="container-input">
            <i class="bx bx-search"></i>
            <input type="text" placeholder="Ingrese una ubicación" />
          </div>
        </section>
        <section className="locationsList-container-body">
          <ul className="location-list-container">
            <li>
              <div className="container-cityName">
                <p>
                  Ciudad <i class="bx bx-map"></i>
                </p>
                <span>25° / 20°</span>
              </div>
              <div className="container-weather-temperature">
                21°
              </div>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default LocationsList;

import React, { useEffect } from "react";
import "./../style/locationsList.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSlideWindow } from "../features/loaded/slideWindow";
import CityCard from "./CityCard";
import listOfCities from "../utils/listOfCities";
import { updateCityLengthQuantity } from "../features/loaded/numberOfCitiesOnTheList";
import clearSearchHistory from "../utils/clearSearchHistory";

function LocationsList() {
  const [valueChange, setValueChange] = useState("");
  const [citiesToRender, setcitiesToRender] = useState([]);
  const [ clearCityHistoryBanner, setclearCityHistoryBanner ] = useState(false)

  const windowstatus = useSelector((state) => state.statusSlideWindow.value);
  const dispatch = useDispatch();
  const cityName = "cusco";

  const handleChangeValue = (e) => {
    const enteredValue = e.target.value;
    setValueChange(enteredValue);
  };

  const bringCities = async () => {
    const listCities = await localStorage.getItem("cities");
    if (listCities) {
      setcitiesToRender(JSON.parse(listCities));
    }
  };

  useEffect(() => {
    bringCities();
  }, []);

  useEffect(() => {
    dispatch(updateCityLengthQuantity(citiesToRender.length));
  }, [citiesToRender]);
  return (
    <>
      <section
        className={
          windowstatus
            ? "container-locationsList container-locationsList-hidden"
            : "container-locationsList"
        }
      >
        <section className="locationsList-container-header">
          <div className="container-btn-back-and-delete">
            <i
              className="bx bx-left-arrow-alt"
              onClick={() => dispatch(setSlideWindow())}
            ></i>
            <div onClick={() => setclearCityHistoryBanner(!clearCityHistoryBanner)} className="clearCityHistory">Delete</div>
            <div className={ clearCityHistoryBanner? "clearCityHistory-banner": "clearCityHistory-banner-hidden" }>
              <div>
              <p>
                Desea eliminar el historial de sus busquedas? Recuerde que puede
                volver a ingresar las ciudades que necesite.
              </p>
              <button onClick={() => {
                setclearCityHistoryBanner(!clearCityHistoryBanner)
                clearSearchHistory()
                setcitiesToRender([])
              }}>eliminar ciudades</button>
              </div>
            </div>
          </div>
          <span>Administrar ciudades</span>
          <div className="container-input">
            <i
              className="bx bx-search"
              onClick={async () => {
                await listOfCities(valueChange);
                await bringCities();
              }}
            ></i>
            <input
              type="text"
              placeholder="Ingrese una ubicación"
              value={valueChange}
              onChange={handleChangeValue}
              onKeyDown={async (e) => {
                if (e.key === "Enter") {
                  await listOfCities(valueChange);
                  await bringCities();
                }
              }}
            />
          </div>
        </section>
        <section className="locationsList-container-body">
          <ul className="location-list-container">
            {citiesToRender.map((city, index) => {
              return <CityCard key={index} cityName={city} />;
            })}
          </ul>
        </section>
      </section>
    </>
  );
}

export default LocationsList;

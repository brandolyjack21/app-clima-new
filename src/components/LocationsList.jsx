import React, { useEffect } from "react";
import "./../style/locationsList.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSlideWindow } from "../features/loaded/slideWindow";
import CityCard from "./CityCard";
import listOfCities from "../utils/listOfCities";
import { updateCityLengthQuantity } from "../features/loaded/numberOfCitiesOnTheList";

function LocationsList() {
  const [valueChange, setValueChange] = useState("");
  const [citiesToRender, setcitiesToRender] = useState([]);

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
          <i
            className="bx bx-left-arrow-alt"
            onClick={() => dispatch(setSlideWindow())}
          ></i>
          <span>Administrar ciudades</span>
          <div className="container-input">
            <i
              className="bx bx-search"
              onClick={async() => {
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
                if(e.key === 'Enter'){
                  await listOfCities(valueChange);
                  await bringCities();
                }
              }}
            />
          </div>
        </section>
        <section className="locationsList-container-body">
          <ul className="location-list-container">
            {
              citiesToRender.map((city, index) =>{ 
                dispatch(updateCityLengthQuantity(index + 1))
                return <CityCard key={index} cityName={city} />
              })
              
            }
          </ul>
        </section>
      </section>
    </>
  );
}

export default LocationsList;

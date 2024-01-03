import axios from "axios";
import React, { useEffect, useState } from "react";
import informationWeather from "../utils/informationWeather";
import { useDispatch, useSelector } from "react-redux";
import { setSlideWindow } from "../features/loaded/slideWindow";

function NavBar() {
  const [clima, setClima] = useState({});
  const dispatch = useDispatch();

  const lengthOfCities = useSelector(
    (state) => state.numberOfCitiesOnTheList.value
  );

  const lengthOfCitiesComponent = () => {

    if (lengthOfCities < 6) {
      return Array.from({ length: lengthOfCities }, (_, index) => (
        <div key={index}></div>))
    }else{
      return <div style={{ fontSize:'10px', backgroundColor:'rgba(0, 0, 0, 0.219)' , width:'maxContent', display:'flex', flexDirection:'row', borderRadius:'5px', padding:'0px 3px'}}>  mas de 6 ciudades guardadas  </div>
    }
    
  }

  useEffect(() => {
    /*informationWeather({ saludo:'todo bien gracias' })      

        axios.get('https://pixabay.com/api/videos/?key=&q=cielo+despejado')
             .then( async (res) => {
               const clima = JSON.stringify(res.data)
               await localStorage.setItem('climaCieloDespejado', clima)
               await setClima(localStorage.getItem('climaCieloDespejado'))
             })
             .catch(err => console.log(err))*/
  }, []);
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="listItem-navbar listItemPlus">
            <i
              className="bx bx-plus"
              onClick={() => dispatch(setSlideWindow())}
            ></i>
          </li>
          <li className="listItem-navbar listItemNameCity">
            <span>{lengthOfCities > 1 ? "ciudades" : "ciudad"}</span>
            <div className="pages-navbar">
              {
                lengthOfCitiesComponent()
              }
            </div>
          </li>
          <li className="listItem-navbar listItemOptions">
            <i className="bx bx-dots-vertical-rounded"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

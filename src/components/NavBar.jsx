import axios from "axios";
import React, { useEffect, useState } from "react";
import informationWeather from "../utils/informationWeather";
import { useDispatch } from "react-redux";
import { setSlideWindow } from "../features/loaded/slideWindow";

function NavBar() {

    const [clima , setClima] = useState({})
    const dispatch = useDispatch()


    useEffect(() => {

      /*informationWeather({ saludo:'todo bien gracias' })      

        axios.get('https://pixabay.com/api/videos/?key=&q=cielo+despejado')
             .then( async (res) => {
               const clima = JSON.stringify(res.data)
               await localStorage.setItem('climaCieloDespejado', clima)
               await setClima(localStorage.getItem('climaCieloDespejado'))
             })
             .catch(err => console.log(err))*/
    },[])
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="listItem-navbar listItemPlus">
            <i class="bx bx-plus" onClick={() => dispatch(setSlideWindow())}></i>
          </li>
          <li className="listItem-navbar listItemNameCity">
            <span>ciudad</span>
            <div className="pages-navbar">
              <div></div>
              <div></div>
            </div>
          </li>
          <li className="listItem-navbar listItemOptions">
            <i class='bx bx-dots-vertical-rounded'></i>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

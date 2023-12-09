import axios from "axios";
import React, { useEffect, useState } from "react";

function NavBar() {

    const [clima , setClima] = useState({})

    useEffect(() => {

        axios.get('https://pixabay.com/api/videos/?key=15851729-f3066f1772a6703716d0145aa&q=cielo+despejado')
             .then( async (res) => {
               await console.log(res)
               const clima = JSON.stringify(res.data)
               await localStorage.setItem('climaCieloDespejado', clima)
               await setClima(localStorage.getItem('climaCieloDespejado'))
             })
             .catch(err => console.log(err))
    },[])
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="listItem-navbar listItemPlus">
            <i class="bx bx-plus"></i>
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

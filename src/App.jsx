import "./App.css";
import NavBar from "./components/NavBar";
import WidgetTemperatura from "./components/WidgetTemperatura";
import DetallesDelClima from "./components/DetallesDelClima";
import BackgroundVideo from "./components/BackgroundVideo";
import LoadingPage from "./components/LoadingPage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import informationWeather from "./utils/informationWeather";
import dotenv from 'dotenv';
dotenv.config();

function App() {
  const loadedApi = useSelector((state) => state.loadedApi.value);

  const [pages, setPages] = useState([
    <LoadingPage />,
    <NavBar />,
    <WidgetTemperatura />,
    <DetallesDelClima />,
    <BackgroundVideo />,
  ]);


  useEffect(() => {
    informationWeather({ saludo:'ahora si soy yo' })
  }, [])

  return (
    <>
      <div class="video-background">
        <video
          id="video-background"
          src="https://cdn.pixabay.com/vimeo/408654212/birds-35881.mp4?width=640&hash=2a130df3b6157f7ff0c8202b4ca86f4cdcb03c55"
          muted
          autoPlay
          loop
        ></video>
      </div>
      {pages.map((page) => (
        <>{page}</>
      ))}
    </>
  );
}

export default App;

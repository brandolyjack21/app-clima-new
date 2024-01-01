import { useDispatch } from "react-redux";
import { setCurrentCity } from "../features/loaded/cities";

const getIP = async () => {
  try {
    const dispatch = useDispatch();

    const APIKEY_IP = await import.meta.env.VITE_APIKEY_IP;

    const response = await fetch(`https://api.ipdata.co?api-key=${APIKEY_IP}`);
    const responseJson = await response.json();
    const city = responseJson.city;
    dispatch(setCurrentCity(city));
  } catch (error) {
    console.log(error);
  }
};

export default getIP;

import axios from "axios";

const fiveDayForecast = async (city) => {
  const APIKEYCLIMATE = await import.meta.env.VITE_APIKEYCLIMATE;
  try {

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=40&lang=es&appid=${APIKEYCLIMATE}`);
    return response.data;

  } catch (error) {
        console.error(error)
  }
};

export default fiveDayForecast;

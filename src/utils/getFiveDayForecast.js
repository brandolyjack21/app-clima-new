import axios from "axios";

const fiveDayForecast = async () => {
  const APIKEYCLIMATE = process.env.APIKEYCLIMATE;
  const city = "lima";

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=20&lang=es&appid=${APIKEYCLIMATE}`
    );

    return response.data

  } catch (error) {
        console.error(error)
  }
};

export default fiveDayForecast;

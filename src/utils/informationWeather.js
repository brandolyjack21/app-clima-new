const informationWeather = (data = null) => {
  let weatherData = JSON.parse(localStorage.getItem("informationWeather")) || [];

  if (typeof data === 'object' && data !== null) {

    let isDuplicate = false;

    if( weatherData.length === 0 ){
        isDuplicate = true
    }

    for (let i = 0; i < weatherData.length; i++) {
      if (weatherData[i].saludo === data.saludo) {
         isDuplicate = true
         break
      }
    }

    if (!isDuplicate) {
        weatherData.push(data);
        localStorage.setItem("informationWeather", JSON.stringify(weatherData));
    }
  }
};

export default informationWeather;


const listOfCities = async (city) => {

    const citiesString = await localStorage.getItem('cities')

    const cities = await citiesString ? JSON.parse(citiesString): []

    if (!cities.includes( city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") )) {

        if (!(city.trim().length === 0)) {
            cities.push(city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
            localStorage.setItem('cities' , JSON.stringify(cities))    
        }
        
    }
}

export default listOfCities
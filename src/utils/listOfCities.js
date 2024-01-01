
const listOfCities = async (city) => {

    const citiesString = await localStorage.getItem('cities')

    const cities = await citiesString ? JSON.parse(citiesString): []

    if (!cities.includes( city )) {

        if (!(city.trim().length === 0)) {
            cities.push(city)
            localStorage.setItem('cities' , JSON.stringify(cities))    
        }
        
    }
}

export default listOfCities
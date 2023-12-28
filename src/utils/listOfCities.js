
const listOfCities = async (city) => {

    const citiesString = await localStorage.getItem('cities')

    const cities = citiesString ? JSON.parse(citiesString): []

    if (!cities.some( obj => obj.name )) {
        cities.push(city)
        localStorage.setItem('cities' , JSON.stringify(cities))
    }
}

export default listOfCities
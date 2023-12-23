

const getIP = async () => {
    try {

        const APIKEY_IP = await import.meta.env.VITE_APIKEY_IP
        
        const response = await fetch(`https://api.ipdata.co?api-key=${APIKEY_IP}`)
        const responseJson = await response.json()
        const city = responseJson.city

         return city
    } catch (error) {
        console.log(error)
    }
}

export default getIP
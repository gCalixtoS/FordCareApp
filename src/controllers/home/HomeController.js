// import axios from 'axios'
import {server} from '../../config/common'
import {Alert} from 'react-native'
import {get, session} from '../base/ControllerBase'

export async function getCars() {
    try{
        const res = await get(`${server}api/car/${await session.getItem('owner')}`)
        
        let cars = res.data.cars.map((car) => {
            return {
                text: `${car.model} - ${car.year}` ,
                img: car.picture,
                id:car._id,
                model:car.model,
                year:car.year,
                color:car.color
            }
        })

        cars.push({
            text: 'Novo'
        })
        
        return cars
    }catch(e){
        Alert.alert(e)
        return false
    }
    
}

// export async function getWeather(lat, long){
//     // https://community-open-weather-map.p.rapidapi.com/weather?units=metric&lat=${lat}&lon=${lon}
//     const result = await axios.get(`https://community-open-weather-map.p.rapidapi.com/weather`,{ 
//         params: {
//             "units": "metric",
//             "lat":lat,
//             "lon":long
//         },
//         headers:{
//             "x-rapidapi-key": "426396823bmsh0889eac066ca11dp128b9djsn2cfba7cfe949"
//         }
//     })

//     return result  
// }

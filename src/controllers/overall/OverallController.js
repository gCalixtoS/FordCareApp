import axios from 'axios'
import {server} from '../../config/common'
import {Alert} from 'react-native'
import {get, session} from '../base/ControllerBase'

export async function getCar( carID) {
    try{
        
        const res = await get(`${server}api/car/${await session.getItem('owner')}/${carID}`)
        
        return res.data.car
    }catch(e){
        Alert.alert(e)
        return false
    }
    
}

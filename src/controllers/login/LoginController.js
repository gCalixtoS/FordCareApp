import axios from 'axios'
import {server} from '../../config/common'
import {Alert} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

export async function Login(email, password) {
    try{
        const res = await axios.post(`${server}api/owner/login`, {
            email:email,
            password:password
        }).catch(error => {
            console.log(error)
        })
        
        await AsyncStorage.setItem('x-access-token', res.data.token)
        await AsyncStorage.setItem('owner', res.data.owner._id)
        
        return res.data
    }catch(e){
        Alert.alert(e)
        return false
    }
    
}

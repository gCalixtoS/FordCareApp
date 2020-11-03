import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'



export async function get (url) {
    axios.defaults.headers.common['x-access-token'] = await AsyncStorage.getItem('x-access-token')
    
    const res = await axios.get(url)
        .catch(error => {
            console.warn(error + 'erro')
            console.log('tyrest')
        })

    return res
} 

export const session = AsyncStorage
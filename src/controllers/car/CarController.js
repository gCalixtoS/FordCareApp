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
export async function getParts( carID) {
    try{
        
        const res = await get(`${server}api/part/${await session.getItem('owner')}/${carID}`)
        
        let parts = res.data.parts[0]

        parts.revisao =  10000
        parts.kmRevisao =  (parts.revisao - parts.ODOMETER).toFixed(2)
        parts.revisaoPorcentagem =   (parts.ODOMETER / parts.revisao).toFixed(2)

        parts.overall =  ((parts['motor(%)'] + parts['transmissao(%)'] + (parts['filtro-oleo(%)'] * 1.5) + (parts['filtro-combustivel(%)'] * 1.5) )/4).toFixed(2)
        parts['filtro-combustivel(%)'] = parts['filtro-combustivel(%)'].toFixed(2)
        parts['filtro-oleo(%)'] = parts['filtro-oleo(%)'].toFixed(2)
        parts['tanque'] = parts['tanque'].toFixed(2)
        parts['motor(%)'] = parts['motor(%)'].toFixed(2)
        parts['transmissao(%)'] = parts['transmissao(%)'].toFixed(2)

        if(parts.overall >= 90){
            parts.certificado = 'Ouro'
        }else if (parts.overall < 90 && parts.overall >= 80){
            parts.certificado = 'Prata'
        }else{
            parts.certificado = 'Bronze'
        }

        return parts
    }catch(e){
        Alert.alert(e)
        return false
    }
    
}

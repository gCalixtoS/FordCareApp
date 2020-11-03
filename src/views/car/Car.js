import React, {useEffect, useState} from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import BackgroundImage from '../../components/images/BackgroundImage'
import { ProgressCircle } from 'react-native-svg-charts'
import Ionicons from 'react-native-vector-icons/Ionicons'

import loader from '../../../assets/Spinner-1s-200px.gif'

import { getParts } from '../../controllers/car/CarController'

export default props => {
    const [parts, setParts] = useState({})

    useEffect(() => {
        async function fetchData() {
            setParts(await getParts( props.route.params.car.id))
            
        }
        
        fetchData()
    }, [])
    
    return (
        <>
            <View style={{  flexDirection: 'row', alignItems: "center", paddingLeft: 20, height:125}}>
                <BackgroundImage resizeMode='contain' source={{uri:props.route.params.car.img}}></BackgroundImage>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-start', padding: 20, height:50,}}>
                <TouchableOpacity style={{  flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop:20,}} onPress={() => { props.navigation.push('Overall', { car: props.route.params.car, parts:parts }) }}>
                    <ProgressCircle style={{ height: 75, width:75 }} progress={parts.overall / 100} progressColor={'#003478'} />
                    <Text style={{fontSize: 23, margin:10}}>
                        Overall {"\n"}
                        <Text style={{fontWeight: "bold"}}>{parts.overall} %</Text>
                    </Text>
                    <Ionicons name='chevron-forward-outline' style={{marginRight:0}} size={40} color='#003478' />
                </TouchableOpacity>
                <View style={{  flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop:20,}}>
                    <ProgressCircle style={{ height: 75, width:75 }} progress={parts['tanque'] / 100} progressColor={'#003478'} />
                    <Text style={{fontSize: 23, margin:10}}>
                        Nível do Combustível {"\n"}
                        <Text style={{fontWeight: "bold"}}>{parts['tanque']} %</Text>
                    </Text>
                </View>
                <View style={{  flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop:20,}}>
                    <ProgressCircle style={{ height: 75, width:75 }} progress={parts.ODOMETER / parts.revisao} progressColor={'#003478'} />
                    <Text style={{fontSize: 23, margin:10}}>
                        Odômetro {"\n"}
                        <Text style={{fontWeight: "bold"}}>{parts.ODOMETER} KM {"\n"} <Text style={{fontSize: 15}}>{parts.kmRevisao} KM para a próxima revisão</Text></Text>
                    </Text>
                </View>
            </View>


        </>
    )
}
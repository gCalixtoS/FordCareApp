import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import BackgroundImage from '../../components/images/BackgroundImage'
import { ProgressCircle } from 'react-native-svg-charts'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler'

import loader from '../../../assets/Spinner-1s-200px.gif'

import { getCar } from '../../controllers/overall/OverallController'

export default props => {
    const [car, setCar] = useState({})

    useEffect(() => {
        async function fetchData() {
            setCar(await getCar(props.route.params.car.id))

        }

        // fetchData()
    }, [])
    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, height: 125 }}>
                <BackgroundImage resizeMode='contain' source={{ uri: props.route.params.car.img }}></BackgroundImage>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-start', padding: 20, height: 50, }}>
                <ScrollView>
                    <View>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop: 20, }} >
                            <ProgressCircle style={{ height: 75, width: 75 }} progress={props.route.params.parts.overall / 100} progressColor={'#003478'} />
                            <Text style={{ fontSize: 23, margin: 10 }}>
                                Overall {"\n"}
                                <Text style={{ fontWeight: "bold" }}>{props.route.params.parts.overall} %</Text>
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop: 20, }} onPress={() => { props.navigation.push('Background', { car: props.route.params.car }) }}>
                            <Ionicons style={{ alignItems: 'center', justifyContent: 'center' }} name='star-outline' size={70} color='#003478' />
                            <Text style={{ fontSize: 23, margin: 10 }}>
                                Certificação {"\n"}
                                <Text style={{ fontWeight: "bold" }}>Nível Ouro</Text>
                            </Text>
                            <Ionicons name='chevron-forward-outline' style={{ marginRight: 0 }} size={40} color='#003478' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop: 20, }} onPress={() => { props.navigation.push('Parts', { car: props.route.params.car, partId: props.route.params.id }) }}>
                            <ProgressCircle style={{ height: 75, width: 75 }} progress={props.route.params.parts['filtro-oleo(%)'] / 100} progressColor={'#003478'} />
                            <Text style={{ fontSize: 23, margin: 10 }}>
                                Filtro de Óleo {"\n"}
                                <Text style={{ fontWeight: "bold" }}>{props.route.params.parts['filtro-oleo(%)']}%</Text>
                            </Text>
                            <Ionicons name='chevron-forward-outline' style={{ marginRight: 0 }} size={40} color='#003478' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop: 20, }} onPress={() => { props.navigation.push('Parts', { car: props.route.params.car, partId: props.route.params.id }) }}>
                            <ProgressCircle style={{ height: 75, width: 75 }} progress={props.route.params.parts['filtro-combustivel(%)'] / 100} progressColor={'#003478'} />
                            <Text style={{ fontSize: 23, margin: 10 }}>
                                Filtro de Combustível {"\n"}
                                <Text style={{ fontWeight: "bold" }}>{props.route.params.parts['filtro-combustivel(%)']}%</Text>
                            </Text>
                            <Ionicons name='chevron-forward-outline' style={{ marginRight: 0 }} size={40} color='#003478' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop: 20, }} onPress={() => { props.navigation.push('Parts', { car: props.route.params.car, partId: props.route.params.id }) }}>
                            <ProgressCircle style={{ height: 75, width: 75 }} progress={props.route.params.parts['motor(%)'] / 100} progressColor={'#003478'} />
                            <Text style={{ fontSize: 23, margin: 10 }}>
                                Motor {"\n"}
                                <Text style={{ fontWeight: "bold" }}>{props.route.params.parts['motor(%)']}%</Text>
                            </Text>
                            <Ionicons name='chevron-forward-outline' style={{ marginRight: 0 }} size={40} color='#003478' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop: 20, }} onPress={() => { props.navigation.push('Parts', { car: props.route.params.car, partId: props.route.params.id }) }}>
                            <ProgressCircle style={{ height: 75, width: 75 }} progress={props.route.params.parts['transmissao(%)'] / 100} progressColor={'#003478'} />
                            <Text style={{ fontSize: 23, margin: 10 }}>
                                Transmissão {"\n"}
                                <Text style={{ fontWeight: "bold" }}>{props.route.params.parts['transmissao(%)']}%</Text>
                            </Text>
                            <Ionicons name='chevron-forward-outline' style={{ marginRight: 0 }} size={40} color='#003478' />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>


        </>
    )
}
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import BackgroundImage from '../../components/images/BackgroundImage'
import Ionicons from 'react-native-vector-icons/Ionicons'

import img from '../../../assets/ecosport-top.png'
import { ScrollView } from 'react-native-gesture-handler'

export default props => {
    
    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, height: 125 }}>
                <BackgroundImage resizeMode='contain' source={{uri:props.route.params.car.img}}></BackgroundImage>
            </View>
            <ScrollView>
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop: 20, }} >
                        <Ionicons style={{ alignItems: 'center', justifyContent: 'center' }} name='star-outline' size={70} color='#003478' />
                        <Text style={{ fontSize: 23, margin: 10 }}>
                            Certificação {"\n"}
                            <Text style={{ fontWeight: "bold" }}>Nível Ouro</Text>
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop: 20, }}>
                        <Text style={{ fontSize: 23, margin: 10 }}>
                            Dados Veículares
                    </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop: 20, }}>
                        <Text style={{ margin: 10 }}>Modelo - {props.route.params.car.model}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop: 20, }}>
                        <Text style={{ margin: 10 }}>Ano - {props.route.params.car.year}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop: 20, }}>
                        <Text style={{ margin: 10 }}>KM - 2.192</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop: 20, }}>
                        <Text style={{ margin: 10 }}>Cor - {props.route.params.car.color}</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop: 20, }}>
                        <Ionicons name='calendar-outline' style={{ marginRight: 0 }} size={75} color='#003478' />
                        <Text style={{ fontSize: 23, margin: 10 }}>
                            Revisão {"\n"}
                            <Text>08/10/2020</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, marginTop: 20, }}>
                        <Ionicons name='calendar-outline' style={{ marginRight: 0 }} size={75} color='#003478' />
                        <Text style={{ fontSize: 23, margin: 10 }}>
                            Conserto {"\n"}
                            <Text>02/10/2020</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}
import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'

import CircularButton from '../../components/buttons/CircularButton'
import BackgroundImage from '../../components/images/BackgroundImage'
import { getCars, getWeather } from '../../controllers/home/HomeController'
import Ionicons from 'react-native-vector-icons/Ionicons'
import PrimaryButton from '../../components/buttons/PrimaryButton'

// import Geolocation from 'react-native-geolocation-service'


import Carousel from 'react-native-snap-carousel'


export default props => {
    const [carousel, setCarousel] = useState(0)
    const [data, setData] = useState([])
    const [weather, setWeather] = useState()
    const [hasLocationPermission, setHasLocationPermission] = useState(false)
    const [userPosition, setUserPosition] = useState(false)

    // async function verifyLocationPermission() {
    //     try {
    //         const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    //         )
    //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //             console.log('permissão concedida')
    //             setHasLocationPermission(true)
    //         } else {
    //             console.error('permissão negada')
    //             setHasLocationPermission(false)
    //         }
    //     } catch (err) {
    //         console.warn(err)
    //     }
    // }

    useEffect(() => {
        async function get() {
            let cars = await getCars()
            setData(cars)
        }
        get()

    }, [])

    // useEffect(() => {
    //     verifyLocationPermission()

    //     if (hasLocationPermission) {
    //         Geolocation.getCurrentPosition(
    //             position => {
    //                 setUserPosition({
    //                     latitude: position.coords.latitude,
    //                     longitude: position.coords.longitude,
    //                 })

    //                 async function callWeather(lat, long) {
    //                     let res = await getWeather(lat, long)
    //                     setWeather(res)
                        
    //                 }
    //                 callWeather(position.coords.latitude, position.coords.longitude)
    //             },
    //             error => {
    //                 console.log(error.code, error.message)
    //             },{ enableHighAccuracy: true, timeout: 10000, }
    //         )
    //     }
    // }, [hasLocationPermission])

    const _renderItem = ({ item, index }) => {
        if (data.length > 0) {
            if (item.text === 'Novo') {
                return (
                    <TouchableOpacity>
                        <View style={style.card}>
                            <View style={style.backgroundView}>
                                <Ionicons name='add-outline' size={100} color='#003478' />
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            } else {
                return (
                    <TouchableOpacity onPress={() => { props.navigation.push('Car', { car: item }) }}>
                        <View style={{ height: 30, width: '100%', backgroundColor: '#003478', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>{item.text}</Text>
                        </View>
                        <View style={style.card}>

                            <View style={style.backgroundView}>
                                <BackgroundImage resizeMode='contain' source={{ uri: `${item.img}` }}></BackgroundImage>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }
        }
    }

    return (
        <>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", paddingLeft: 20 }}>
                <Carousel
                    data={data}
                    onBeforeSnapToItem={(index) => setCarousel(index)}
                    renderItem={_renderItem}
                    sliderWidth={300}
                    itemWidth={300}
                    activeSlideAlignment='center'
                />
            </View>
            <View style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: 'center',
                padding: 20,
                height: 50
            }}>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                        <CircularButton size={90}>
                            <Ionicons style={{ alignItems: 'center', justifyContent: 'center' }} name='lock-closed-outline' size={45} color='white' />
                        </CircularButton>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                        <CircularButton size={120}>
                            <Ionicons style={{ alignItems: 'center', justifyContent: 'center' }} name='power-outline' size={60} color='white' />
                        </CircularButton>
                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                        <CircularButton size={90}>
                            <Ionicons style={{ alignItems: 'center', justifyContent: 'center' }} name='lock-open-outline' size={45} color='white' />
                        </CircularButton>
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.5, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: 20, width:'100%'}}>
                <PrimaryButton style={style.view} title="Detalhes do Veículo"  />
            </View>
        </>
    )
}

const style = StyleSheet.create({
    card: {
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
    },
    cardHome: {
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 150,
        width: 125,
        marginRight: 20,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    backgroundView: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    view: {
        flex: 1,
        justifyContent: "center",
        padding: 20
    },
})
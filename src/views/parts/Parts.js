import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import BackgroundImage from '../../components/images/BackgroundImage'
import { LineChart, Grid, ProgressCircle, YAxis } from 'react-native-svg-charts'
import Ionicons from 'react-native-vector-icons/Ionicons'

import img from '../../../assets/ecosport-top.png'

export default props => {
    const data = [100, 100, 100, 100, 100, 100, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 98, 98, 98, 98, 98, 98, 98, 98, 97, 96, 95, 94, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93, 93,]
    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: "center", paddingLeft: 20, height: 125 }}>
                <BackgroundImage resizeMode='contain' source={{uri: props.route.params.car.img}}></BackgroundImage>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-start', padding: 20, height: 50, }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", padding: 20 }}>
                    <ProgressCircle style={{ height: 75, width: 75 }} progress={0.92} progressColor={'#003478'} />
                    <Text style={{ fontSize: 23, margin: 10 }}>
                        Óleo {"\n"}
                        <Text style={{ fontWeight: "bold" }}>92%</Text>
                    </Text>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'flex-start', padding: 20 }}>
                    <Text style={{ fontSize: 23, }}>
                        Desgaste do item
                    </Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", }}>
                        <YAxis
                            data={data}
                            contentInset={{ top: 20, bottom: 20 }}
                            svg={{
                                fill: 'grey',
                                fontSize: 12,
                            }}
                            numberOfTicks={10}
                            formatLabel={(value) => `${value}%`}
                            min={0}
                            max={100}
                        />
                        <LineChart
                            style={{ height: 200, width: '100%' }}
                            data={data}
                            svg={{ stroke: '#003478' }}
                            contentInset={{ top: 20, bottom: 20 }}
                            gridMin={0}
                            gridMax={100}
                        >
                            <Grid />
                        </LineChart>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
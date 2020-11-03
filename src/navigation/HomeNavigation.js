import React from 'react'
// import {} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../views/home/Home'
import Car from '../views/car/Car'
import Overall from '../views/overall/Overall'
import Parts from '../views/parts/Parts'
import Background from '../views/background/Background'

const Stack = createStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Home"
                options={{ title: 'Home' }}
                component={Home}
            ></Stack.Screen>
            <Stack.Screen
                name="Car"
                options={{ title: 'Car' }}
                component={Car}
            ></Stack.Screen>
            <Stack.Screen
                name="Overall"
                options={{ title: 'Overall' }}
                component={Overall}
            ></Stack.Screen>
            <Stack.Screen
                name="Background"
                options={{ title: 'Background' }}
                component={Background}
            ></Stack.Screen>
            <Stack.Screen
                name="Parts"
                options={{ title: 'Parts' }}
                component={Parts}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}
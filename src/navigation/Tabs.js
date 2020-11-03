import React from 'react'
// import {} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeNavigation from '../navigation/HomeNavigation'

const Tab = createBottomTabNavigator()

export default props => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = focused
                            ? 'home'
                            : 'home-outline'
                            break;
                        case 'Home1':
                            iconName = focused
                            ? 'location'
                            : 'location-outline'
                            break;
                        case 'Home2':
                            iconName = focused
                            ? 'person'
                            : 'person-outline'
                            break;
                        case 'Home3':
                            iconName = focused
                            ? 'cog'
                            : 'cog-outline'
                            break;
                        case 'Home4':
                            iconName = focused
                            ? 'menu'
                            : 'menu-outline'
                            break;
                    
                        default:
                            break;
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: '#003478',
                inactiveTintColor: '#373737',
                showLabel:false
            }} initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeNavigation} options={{title: 'Inicial'}}/>
            <Tab.Screen name="Home1" component={HomeNavigation} options={{title: 'Meio'}}/>
            <Tab.Screen name="Home2" component={HomeNavigation} options={{title: 'Final'}}/>
            <Tab.Screen name="Home3" component={HomeNavigation} options={{title: 'Final'}}/>
            <Tab.Screen name="Home4" component={HomeNavigation} options={{title: 'Final'}}/>
        </Tab.Navigator>
    )
}
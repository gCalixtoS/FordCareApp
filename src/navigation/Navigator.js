import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Login from '../views/login/Login'
import Tabs from './Tabs'

export default props => {
    const login = false
    return (
        <NavigationContainer>
            {
                login ? <Tabs></Tabs> : <Login></Login>
            }
        </NavigationContainer>
    )
}
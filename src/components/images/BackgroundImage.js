import React from 'react'
import {ImageBackground, StyleSheet} from 'react-native'

export default props => {
    return (
        <ImageBackground style={style.background}{...props}></ImageBackground>
    )
}

const style = StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-start',
    }
})
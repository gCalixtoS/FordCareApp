import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

export default props => {
    return (
        <TextInput style={style.input} secureTextEntry={props.secureTextEntry ? true : false} placeholder={props.placeholder} value={props.value} onChangeText={props.onChangeText}></TextInput>
    )
}

const style = StyleSheet.create({
    input: {
        borderBottomColor: '#003478',
        borderBottomWidth: 1
    }
})
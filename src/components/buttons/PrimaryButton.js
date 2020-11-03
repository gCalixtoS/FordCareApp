import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text} from 'react-native'

export default props => {
    return (
        <>
            <TouchableOpacity style={{width:'100%'}} onPress={props.onPress}>
                <View style={style.btn}>
                    <Text style={{color:'#FFF'}}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

const style = StyleSheet.create({
    btn: {
        backgroundColor: '#003478',
        marginTop: 10,
        padding:10,
        alignItems:'center',
    }
    
})
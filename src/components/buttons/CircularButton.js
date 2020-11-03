import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default props => {
    return (
        <>
            <TouchableOpacity onPress={props.onPress}>
                <View style={{
                        backgroundColor: '#003478',
                        marginTop: 10,
                        padding:10,
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius:props.size/2,
                        width: props.size,
                        height:props.size,shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 7,
                        },
                        shadowOpacity: 0.43,
                        shadowRadius: 9.51,
                        
                        elevation: 15,
                    }}>
                    {props.children}
                </View>
            </TouchableOpacity>
        </>
    )
}

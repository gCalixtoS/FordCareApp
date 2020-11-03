import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Alert} from 'react-native'

import {Login} from '../../controllers/login/LoginController'

import PrimaryButton from '../../components/buttons/PrimaryButton'
import TextInput from '../../components/textInputs/TextInput'
import BackgroundImage from '../../components/images/BackgroundImage'

import fordLogo from '../../../assets/ford_logo.png'
export default props => {
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    const signIn = async () =>{
        let result = await Login(email, password)
        if(result){
            props.navigation.navigate('Tabs')
        }
    }

    return (
        <SafeAreaView style={style.view}>
            <View style={style.backgroundView}>
                <BackgroundImage resizeMode='contain' source={fordLogo}></BackgroundImage>
            </View>
            <View style={style.formView}>
                <View>
                    <TextInput placeholder='E-mail' value={email} onChangeText={(text) => setEmail(text)}></TextInput>
                    <TextInput placeholder='Senha' secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}></TextInput>
                </View>
                <View>
                    <PrimaryButton style={style.view} title="Login" onPress={signIn} />
                </View>
            </View>
                        
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    backgroundView: {
        flex: 1,
        justifyContent: "center"
    },
    formView: {
        flex: 1,
        justifyContent: "flex-start",
        padding:20
    },
    view: {
        flex: 1,
        justifyContent: "center",
        padding:20
    },
})
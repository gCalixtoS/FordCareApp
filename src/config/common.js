import { Alert } from 'react-native'

function showError(err){
    Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err}`)
}

const server = 'http://10.0.2.2:4040/'

export { showError, server }
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const NumeroEmergencia = () => {
    const [numero, setNumero] = useState('')
    const [value, setValue] = useState('')

    const saveValue = () =>{
        if(numero){
            AsyncStorage.setItem('numero', numero)
            setNumero('')
            alert('Numero guardado')
        } else{
            alert('Ingrese un numero')
        }
    }

    const getValue = () => {
        AsyncStorage.getItem('numero')
        .then(value => {
            setValue(value)
        })
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    AsyncStorage in React Native
                </Text>
                <TextInput
                    placeholder='Enter Mobile Number'
                    value={numero}
                    onChangeText={(data)=>setNumero(data)}
                    keyboardType='numeric'
                    underlineColorAndroid='transparent'
                    style={styles.textInputStyle}
                />
                <TouchableOpacity style={styles.buttonStyle} onPress={saveValue}>
                    <Text style={styles.buttonTextStyle}>Save Value</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={getValue}>
                    <Text style={styles.buttonTextStyle}>Get Value</Text>
                </TouchableOpacity>
                <Text style={styles.textStyle}>{value}</Text>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20
    },
    textInputStyle: {
        textAlign: 'center',
        height: 60,
        width: '100%',
        borderWidth: 1,
        borderColor: 'blue',
        fontSize: 22,
    },
    buttonStyle: {
        fontSize: 16,
        color: 'white',
        backgroundColor: 'blue',
        padding: 5,
        marginTop: 10,
        minWidth: 250,
        justifyContent: 'center'
    },
    buttonTextStyle: {
        padding: 5,
        color: 'white',
        textAlign: 'center',
        fontSize: 22
    },
    textStyle: {
        padding: 10,
        textAlign: 'center',
    }
})

export default NumeroEmergencia
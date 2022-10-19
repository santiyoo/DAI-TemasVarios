import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View , Linking} from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function AccelerometerScreen() {
    const [data, setData] = useState({
        x:0,
        y:0,
        z:0
    });

    const [subscription, setSubscription] = useState(null);

    const _slow = () => {
        Accelerometer.setUpdateInterval(1000);
    };

    const _fast = () => {
        Accelerometer.setUpdateInterval(16);
    };

    const _subscribe = () => {
        setSubscription(
        Accelerometer.addListener(accelerometerData => {
            setData(accelerometerData);
        })
        );
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };


    useEffect(() => {
        setTimeout(() => {
            _subscribe();
            return () => _unsubscribe();
        }, 1000);
    }, [data]);
    
    const handleEmailPress = async () => {
        if(data[0].x > 0.5){
            await Linking.openURL("mailto:mailto:yoopy2705@gmail.com?subject=Asunto Predefinido&body=Probando React Native")
        }
    }

    //   const handleWhatsAppPress = async () => {
    //     await Linking.openURL("https://wa.me/{aca iria el numero de telefono}?text=Probando React Native")
    //   }
    let { x, y, z } = data;
    return (
        <View>
            <Text>x: {Math.round(x, 2)}</Text>
            <Text>y: {Math.round(y, 2)}</Text>
            <Text>z: {Math.round(z, 2)}</Text>
            {data.x > 0.5 ? Linking.openURL("mailto:mailto:yoopy2705@gmail.com?subject=Asunto Predefinido&body=Probando React Native") : null}
            {data.y > 0.5 ? Linking.openURL("mailto:mailto:yoopy2705@gmail.com?subject=Asunto Predefinido&body=Probando React Native") : null}
            {data.z > 0.5 ? Linking.openURL("mailto:mailto:yoopy2705@gmail.com?subject=Asunto Predefinido&body=Probando React Native") : null}
            
            <View>
                <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe}>
                    <Text>{subscription ? 'On' : 'Off'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={_slow}>
                    <Text>Slow</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={_fast}>
                    <Text>Fast</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View , Linking, ImageBackground} from 'react-native';
import BackgroundContext from '../../../context/BackgroundContext';
import { Accelerometer } from 'expo-sensors';

export default function AccelerometerScreen() {
    const {background, setBackground} = useContext(BackgroundContext);
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
        <View style={styles.container}>
            <ImageBackground source={{uri: background}} style={styles.image}>
                <View>
                    <Text style={styles.text}>x: {Math.round(x, 2)}</Text>
                    <Text style={styles.text}>y: {Math.round(y, 2)}</Text>
                    <Text style={styles.text}>z: {Math.round(z, 2)}</Text>
                    {data.x > 0.5 ? Linking.openURL("mailto:mailto:yoopy2705@gmail.com?subject=Asunto Predefinido&body=Probando React Native") : null}
                    {data.y > 0.5 ? Linking.openURL("mailto:mailto:yoopy2705@gmail.com?subject=Asunto Predefinido&body=Probando React Native") : null}
                    {data.z > 0.5 ? Linking.openURL("mailto:mailto:yoopy2705@gmail.com?subject=Asunto Predefinido&body=Probando React Native") : null}
                    <View>
                        <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe}>
                            <Text>{subscription ? 'On' : 'Off'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={_slow}>
                            <Text style={styles.text}>Slow</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={_fast}>
                            <Text style={styles.text}>Fast</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
      flex: 1
    },
    text: {
      color: "white",
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0",
      marginVertical: 20,
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
    imageStyle: {
      width: 250, 
      height: 250,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
  })
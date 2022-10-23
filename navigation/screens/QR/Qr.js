import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import BackgroundContext from '../../../context/BackgroundContext';
import {frame} from '../../../assets/frame.png';

export default function Qr() {
  const navigation = useNavigation();
  const {background, setBackground} = useContext(BackgroundContext);

  const Camera = () => {
    navigation.navigate('Camera')
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: background}} style={styles.image}>
      <Image source={require('../../../assets/frame.png')} style={styles.imageStyle}/>
        <TouchableOpacity onPress={Camera}>
          <Text style={styles.text}> To Camera </Text>
        </TouchableOpacity>
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
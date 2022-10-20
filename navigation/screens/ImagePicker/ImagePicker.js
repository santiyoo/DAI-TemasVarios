import React, { useState, useEffect, useContext } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import BackgroundContext from '../../../context/BackgroundContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ImagePickerScree() {
    const {background, setBackground} = useContext(BackgroundContext);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        console.log('pickImage: ', result);

        if (!result.cancelled) {
            setBackground(result.uri);
            alert('Fondo guardado')
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {background && <Image source={{ uri: background }} style={{ width: 200, height: 200 }} />}
        </View>
    );
}
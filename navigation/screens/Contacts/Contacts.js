import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View, Text, FlatList, StatusBar, ImageBackground } from 'react-native';
import * as Contacts from 'expo-contacts';
import BackgroundContext from '../../../context/BackgroundContext';

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function Contactos() {
    const [contacts, setContacts] = useState([]);
    const {background, setBackground} = useContext(BackgroundContext);

    useEffect(() => {
        (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.PhoneNumbers],
            });

            if (data.length > 0) {
            setContacts(data);
            console.log(contacts[0].phoneNumbers[0].number);
            }
        }
        })();
    }, []);

    return contacts.length ? (
        <View style={styles.container}>
            {!background ? (
                <View style={styles.container}>
                    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <FlatList
                    data={contacts}
                    renderItem={({ item }) => (
                        <View style={{marginVertical: 10}}>
                            <Text>Contacto: {item.name}</Text>
                            <Text>Numero: {item.phoneNumbers[0].number}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    />
                    </ImageBackground>    
                </View>
            ) : (
                <View style={styles.container}>
                    <ImageBackground source={{uri:background}} resizeMode="cover" style={styles.image}>
                    <FlatList
                        data={contacts}
                        renderItem={({ item }) => (
                            <View style={{marginVertical: 10}}>
                                <Text>Contacto: {item.name}</Text>
                                <Text>Numero: {item.phoneNumbers[0].number}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                        />
                    </ImageBackground>
                </View>
            )}
        </View>
    ):(
        <View style={styles.container}>
            {!background ? (
                <View style={styles.container}>
                        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                            <Text style={styles.title}>Contactos</Text>
                            <Text style={styles.text}>No hay contactos</Text>
                        </ImageBackground>
                </View>
                ) : (
                <View style={styles.container}>
                    <ImageBackground source={{uri:background}} resizeMode="cover" style={styles.image}>
                        <Text style={styles.title}>Contactos</Text>
                        <Text style={styles.text}>No hay contactos</Text>
                    </ImageBackground>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    big: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
    container: {
        flex: 1,
    },
    title:{
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        backgroundColor: 'teal',
    },
    root: {
        flex: 1,
        padding: 30,
    },  
    image: {
        flex: 1,
        justifyContent: "center",
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 10,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    text: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0",
        marginVertical: 20,
    },
});
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, StatusBar } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function Contactos() {
    const [contacts, setContacts] = useState([]);

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

    return (
        <View style={styles.container}>
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
        <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
import React from "react";
import { Button, Platform, Text, Vibration, View, SafeAreaView, StyleSheet } from "react-native";

const Separator = () => {
  return <View style={Platform.OS === "android" ? styles.separator : null} />;
}

const Vibrar = () => {

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    0.5 * ONE_SECOND_IN_MS,
    0.5 * ONE_SECOND_IN_MS,
    0.5 * ONE_SECOND_IN_MS
  ];


  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header, styles.paragraph]}>TERREMOTO TERREMOTO</Text>
      <View>
        <Button title="Vibrar una vez" onPress={() => Vibration.vibrate()} />
      </View>
      <Separator />
      {Platform.OS == "android"
        ? (
          <>
            <View>
              <Button
                title="Vibrar 3 segundos"
                onPress={() => Vibration.vibrate(3 * ONE_SECOND_IN_MS)}
              />
            </View>
            <Separator />
        </>
        )
        : <View>
            <Button
            title="Vibrar 3 segundos"
            onPress={() => Vibration.vibrate(3 * ONE_SECOND_IN_MS)}
            />
        </View>}
      <Button
        title="Vibrar intercalado"
        onPress={() => Vibration.vibrate(PATTERN, true)}
      />
      <Separator />
      <Button
        title="Frenar la vibracion intercalada"
        onPress={() => Vibration.cancel()}
        color="#FF0000"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 44,
    padding: 8,
    backgroundColor: "#f17df5"
  },
  button: {
    color: "#36f763"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  paragraph: {
    margin: 24,
    textAlign: "center",
  },
});

export default Vibrar;
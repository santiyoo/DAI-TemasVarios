import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import HomeStackScreen from './navigation/stacks/HomeStackScreen';
import { BackgrounddProvider } from './context/BackgroundContext';

export default function App() {
  return (
    <BackgrounddProvider>
      <HomeStackScreen/>
    </BackgrounddProvider>
  );
}

// In App.js in a new project

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import COLORS from './src/constants/Colors';
import HomeScreen from './src/screens/home';
import SettingsScreen from './src/screens/settings';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = { screenOptions: { headerShown: false } };
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardProvider>
        <NavigationContainer>
          <Stack.Navigator {...screenOptions}>
            <Stack.Screen name="Tabs" component={Tabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardProvider>
    </SafeAreaView>
  );
}

function Tabs() {
  return (
    <Tab.Navigator {...screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

export default App;

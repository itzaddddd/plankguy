import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './screen/HomeScreen'
import LoginScreen from './screen/LoginScreen'
import SignUpScreen from './screen/Signup.Screen'

const Drawer = createDrawerNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="SignUp" component={SignUpScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './home'
import LoginScreen from './login'


const StacksOverTabs = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
})


export default createAppContainer(StacksOverTabs);
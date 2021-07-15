import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from './screens/home';
import DetailsScreen from './screens/details';
export default function App() {
  return (
    <AppContainer/>
  );
}

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:{
      headerShown: false
    }
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions:{
      headerShown: false
    }
  }
},{
  initialRouteName: "Home"
})

const AppContainer = createAppContainer(AppStackNavigator);



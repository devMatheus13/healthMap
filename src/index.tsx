import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';
import {createStackNavigator} from '@react-navigation/stack'

const AppStack = createStackNavigator()
import Home from "./pages/Home"
import Map from "./pages/Map"
const Routes: React.FC = () => {
  return (
      <AppStack.Navigator initialRouteName="Home" headerMode="none">
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Map" component={Map} />
      </AppStack.Navigator>
    );
}

export default Routes;
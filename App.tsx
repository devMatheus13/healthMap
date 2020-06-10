import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import Routes from './src'
export default function App() {
  return (
    
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
        <Routes/>
    </NavigationContainer>
  );
}
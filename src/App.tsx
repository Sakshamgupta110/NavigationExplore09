import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//Navigation
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator} from "@react-navigation/native-stack";

//screens
import Home from './screens/Home';
import Details from './screens/Details';
export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string}
};

const stack=  createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {
  

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen
        name='Home'
        component={Home}
        options={{
          title:"Trending Product"
        }}/>
         <stack.Screen
        name='Details'
        component={Details}
        options={{
          title:"Product Details"
        }}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
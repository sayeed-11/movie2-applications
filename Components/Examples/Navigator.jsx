import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../MovieApp/HomeScreen';

import Home from './Home';


const Stacknavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='home' component={HomeScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}



const Navigator = () => {
    return (

        <Drawer.Navigator>
            <Drawer.Screen name='home' component={Stacknavigator} options={{headerShown:false}}/>
        </Drawer.Navigator>
    )
}

export default Navigator
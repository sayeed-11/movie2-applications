import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
import { NavigationContainer } from '@react-navigation/native';

import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveWidth as rw
} from 'react-native-responsive-dimensions'


import HomeScreen from './HomeScreen';
import MovieScreen from './MovieScreen';
import Person from './Person';
import SearchScreen from './SearchScreen';
import SeeAll from './SeeAll';

import { CheckBadgeIcon } from 'react-native-heroicons/outline';
import { UserCircleIcon } from 'react-native-heroicons/outline'
import { HomeIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/outline'

import DrawerSreen from './DrawerSreen';
import Account from './Account';
import Favourite from './Favourite';

const DrawerNavigatorSystem = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerSreen {...props} />} initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} options={{
                drawerIcon : (() => <HomeIcon size={rw(7)} strokeWidth={1.5} color={'#FFF'}/>),
                headerShown: false,
                drawerActiveBackgroundColor:'orange',
                drawerInactiveTintColor:'#FFF',
                drawerActiveTintColor:'#FFF',
                drawerLabelStyle:{
                    fontSize:rf(2),
                    color:'#FFF',
                    marginLeft:-rw(5)
                }
                
            }} />
            <Drawer.Screen name="Account" component={Account} options={{
                drawerIcon : (() => <UserCircleIcon size={rw(7)} strokeWidth={1.5} color={'#FFF'}/>),
                drawerActiveBackgroundColor:'orange',
                drawerInactiveTintColor:'#FFF',
                drawerLabelStyle:{
                    fontSize:rf(2),
                    marginLeft:-rw(5),
                    color:'#FFF',
                }
            }} />
            <Drawer.Screen name="Favourite" component={Favourite} options={{
                drawerIcon : (() => <HeartIcon size={rw(7)} strokeWidth={1.5} color={'#FFF'}/>),
                drawerActiveBackgroundColor:'orange',
                drawerInactiveTintColor:'#FFF',
                drawerLabelStyle:{
                    fontSize:rf(2),
                    marginLeft:-rw(5),
                    color:'#FFF',
                }
            }} />
        </Drawer.Navigator>
    )
}

// export default DrawerNavigatorSystem;


const AppNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomePage" component={DrawerNavigatorSystem} options={{ headerShown: false }} />
            <Stack.Screen name="Movie" component={MovieScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Person" component={Person} options={{ headerShown: false }} />
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SeeAll" component={SeeAll} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AppNavigation
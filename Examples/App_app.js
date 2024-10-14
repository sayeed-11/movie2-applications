// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
// import 'react-native-gesture-handler';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { MyTabs } from './DrawerPages';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// const Drawer = createDrawerNavigator();

import WelcomePage from './WelcomePage';
import MyDrawer from './DrawerPages';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
      {/* <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Screen',
            headerStyle: {
              backgroundColor: 'orange'
            },
            headerShown: false
          }} />
        <Stack.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={{
            title: 'Home Screen',
            headerStyle: {
              backgroundColor: 'orange'
            },
            headerShown: false
          }}
        />
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{
            title: 'Home Screen',
            headerStyle: {
              backgroundColor: 'orange'
            },
            headerShown: false
          }}
        />
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{
            title: 'Home Screen',
            headerStyle: {
              backgroundColor: 'orange'
            },
            headerShown: false
          }}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{
        marginBottom: 10
      }}>Home Screen</Text>
      <Button onPress={() => navigation.navigate('LogInScreen')} title='click here' />
    </View>
  );
}

function LogInScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange' }}>
      <View style={{
        width:200,
        gap:10,
      }}>
        <Text style={{
          textAlign:'center',
          backgroundColor:'#FFF',
          padding:10
        }}>This is Home Screen</Text>
        <Button onPress={() => navigation.goBack()} title='go back' />
        <Button onPress={() => navigation.navigate('WelcomePage')} title='welcome page' />
      </View>
    </View>
  );
}



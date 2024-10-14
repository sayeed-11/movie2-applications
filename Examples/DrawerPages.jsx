
import React from "react";
import { View, Text } from "react-native";


import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export default function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={Feed}/>
            <Drawer.Screen name="Article" component={Article} />
            <Drawer.Screen name="News" component={News} />
            <Drawer.Screen name="Discover" component={Discover} />
        </Drawer.Navigator>
    );
}

function Feed() {
    return (
        <View style={{
            backgroundColor: 'orange',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}><Text>Feed</Text></View>
    )
}
function Article() {
    return (
        <View style={{
            backgroundColor: 'yellow',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}><Text>Article</Text></View>
    )
}
function News() {
    return (
        <View style={{
            backgroundColor: 'green',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}><Text>Article</Text></View>
    )
}
function Discover() {
    return (
        <View style={{
            backgroundColor: 'violet',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Article</Text>
            {/* <MyTabs/> */}
        </View>
    )
}





export function MyTabs() {
    return (
      <Tab.Navigator initialRouteName="Settings">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
  }


  function Home(){
    return(
        <View style={{
            backgroundColor: 'violet',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}><Text style={{
            color:'#FFF',
            fontSize:30
        }}>Home</Text></View>
    )
  }
  function Settings(){
    return(
        <View style={{
            backgroundColor: 'orange',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}><Text style={{
            color:'#FFF',
            fontSize:30
        }}>Settings</Text></View>
    )
  }
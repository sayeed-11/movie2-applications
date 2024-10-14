import { View, Text, Dimensions, FlatList, Button } from 'react-native'
import React, { useState } from 'react';

import MyDrawer from './DrawerPages';

const list = [1, 2, 3, 4, 5, 6, 7, 8];

const WelcomePage = ({navigation}) => {

    const [ind, setInd] = useState(0);

    return (
        <View style={{
            flex: 1,
            // backgroundColor: 'red',
        }}>
            <View style={{
                flex: 5,
                // backgroundColor: 'green',
                width: Dimensions.get('window').width,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
            }} >
                <View style={{
                    width: Dimensions.get('window').width,
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <FlatList
                        data={list}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        onScroll={e => {
                            const i = (e.nativeEvent.contentOffset.x/Dimensions.get('window').width).toFixed(0);
                            setInd(i);
                        }}
                        renderItem={({ item, index }) => <View key={index} style={{
                            width: Dimensions.get('window').width,
                            backgroundColor: 'orange',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // borderColor: 'gray',
                            // borderWidth: 2
                        }}>
                            <Text style={{
                                fontSize: 150
                            }}>{item}</Text>
                        </View>}
                    />
                </View>
            </View >

            <View style={{
                    flexDirection:'row',
                    gap:10,
                    flex:.3,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    {
                        list.map((item,index) => {
                            return (
                                <View key={index} style={{
                                    width: ind == index ? 30 : 10,
                                    height: 10,
                                    backgroundColor: ind == index ? 'orange' : '#000',
                                    borderRadius:50,
                                }}></View>
                            )
                        })
                    }
                </View>

            <View style={{
                flex: 2,
                width: Dimensions.get('window').width,
                // backgroundColor: 'yellow'
                padding:10,
                justifyContent:'center',
                gap:20
            }}>
                <Button onPress={() => navigation.goBack()} title='go back'/>
                <Button onPress={() => navigation.navigate('LogInScreen')} title='go to Log in'/>
                <Button onPress={() => navigation.navigate('MyDrawer')} title='go to Drawer'/>


            </View>
        </View>
    )
}

export default WelcomePage

// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

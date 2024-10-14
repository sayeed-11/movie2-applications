import { View, Text, Image } from 'react-native'
import React from 'react'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveWidth as rw
} from 'react-native-responsive-dimensions'

import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer'

import {UserCircleIcon} from 'react-native-heroicons/outline'

const DrawerSreen = (props) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor:'#000'
        }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{
                // backgroundColor: '#000',
            }}>
                <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    // backgroundColor:'red',
                    height:rh(30),
                    gap:rh(3)
                }}>
                    <Image source={require('../../assets/movie/user.png')} style={{
                        width: rw(20),
                        height: rw(20),
                        borderRadius: 50
                    }} />
                    <Text style={{
                        fontSize:rf(2),
                        color:'#FFF',
    
                    }}>DEAR USER</Text>
                </View>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
        </View>
    )
}

export default DrawerSreen
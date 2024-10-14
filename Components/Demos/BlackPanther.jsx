import { View, Text, Image } from 'react-native'
import React from 'react'
import {
    responsiveHeight as rh,
    responsiveWidth as rw,
    responsiveFontSize as rf
  } from "react-native-responsive-dimensions";

import logo from '../assets/pic/blackPanther.jpeg'

const BlackPanther = () => {
    return (
        <View style={{
            flex: 1,
            position:'relative'
        }}>
            <Image source={logo} style={{
                width: '100%',
                height: '100%',
                position:'absolute'
            }} />

            {/* <View style={{
                position:'absolute',
                width:rw(100),
                top:rh(10),
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text style={{
                    fontSize:rf(7),
                    color:'#664EAE'
                }}>Marvel</Text>
            </View> */}

        </View>
    )
}

export default BlackPanther
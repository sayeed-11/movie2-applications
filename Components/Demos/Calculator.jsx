import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {
    responsiveHeight as rh,
    responsiveWidth as rw,
    responsiveFontSize as rf
} from "react-native-responsive-dimensions";

const Calculator = () => {
    const [count, setCount] = useState(0);
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{ flexDirection: 'row', gap: rw(10), alignItems: 'center' }}>
                <TouchableOpacity style={{
                    borderWidth: rw(.5),
                    borderRadius: rw(2),
                    borderColor: '#FFF'
                }} onPress={() => {setCount(count > 0 ? count-1 : count)}}>
                    <Text style={{
                        padding: rw(2),
                        fontSize: rf(3)
                    }}>DEC</Text>
                </TouchableOpacity>
                <Text style={{
                    borderWidth: rw(.5),
                    borderColor: '#FFF',
                    paddingHorizontal: rw(10),
                    paddingVertical:rh(1),
                    fontSize: rf(3),
                    borderRadius: rw(2),
                }}>{count}</Text>
                <TouchableOpacity style={{
                    borderWidth: rw(.5),
                    borderRadius: rw(2),
                    borderColor: '#FFF'
                }} onPress={() => {setCount(count+1)}}>
                    <Text style={{
                        padding: rw(2),
                        fontSize: rf(3)
                    }}>INC</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Calculator
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveWidth as rw
} from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native';

const Casts = ({ cast }) => {
    const navigation = useNavigation();
    return (
        <View style={{
            paddingHorizontal: rw(1)
        }}>
            <Text style={{
                color: '#FFF',
                fontSize: rf(2.5)
            }}>Top casts</Text>
            <View style={{
                marginTop: rh(2)
            }}>
                <FlatList
                    data={cast}
                    horizontal
                    renderItem={({item,index}) => {
                        const {name, city, img_url, bio, s_info} = item;
                        return (
                            <TouchableOpacity key={index} style={{
                                padding: rw(2)
                            }} onPress={() => {navigation.push('Person',{name, city,img_url, bio, s_info})}}>
                                <Image source={{uri:img_url}} style={{
                                    width: rw(20),
                                    height: rw(20),
                                    borderRadius: 50,
                                    borderWidth: 1.5,
                                    borderColor: '#FFF'
                                }} />
                                <Text style={{
                                    color: '#FFF',
                                    textAlign:'center',
                                    fontWeight:'bold'
                                }}>{name.length > 8 ? name.slice(0,8) + '....' : name}</Text>
                                {/* <Text style={{
                                    color: '#FFF',
                                    textAlign:'center',
                                }}>{realName.length > 5 ? realName.slice(0,10) + '....' : realName}</Text> */}
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

        </View>
    )
}

export default Casts
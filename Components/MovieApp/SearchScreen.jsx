import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveWidth as rw
} from 'react-native-responsive-dimensions'
import { SafeAreaView } from 'react-native-safe-area-context'

import { XMarkIcon } from 'react-native-heroicons/outline'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'


const SearchScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#000',
            paddingHorizontal: rw(2),
        }}>
            <View style={{
                paddingTop: rh(1),
                paddingBottom: rh(2)
            }}>
                <SafeAreaView style={{
                    width: '100%',
                    height: rh(10),
                }}>
                    <View style={{
                        borderWidth: 2,
                        borderColor: '#424242',
                        borderRadius: 100,
                        padding: rh(2),
                        position: 'relative',
                        justifyContent: 'center'
                    }}>
                        <TextInput placeholder='Search' style={{
                            fontSize: rf(2.5),
                            height: rh(3),
                            color: 'gray',
                            paddingRight: rw(12)
                        }} placeholderTextColor={'gray'} />

                        <View style={{
                            position: 'absolute',
                            right: rw(1),
                        }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#424242',
                                borderRadius: 50,
                                opacity: 0.8,
                                padding:rw(2.5)
                            }} onPress={() => { navigation.goBack() }}>
                                <XMarkIcon size={rw(7)} strokeWidth={1.5} color={'#9E9E9E'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <MagnifyingGlassIcon size={rw(100)} strokeWidth={1.5} color={'#212121'} />
                    <Text style={{
                        color: '#212121',
                        fontSize: rf(10)
                    }}>Search</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default SearchScreen
import { View, Text, Image, FlatList, TouchableNativeFeedback, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveWidth as rw
} from 'react-native-responsive-dimensions'
import { SafeAreaView } from 'react-native-safe-area-context';

import {Bars3BottomLeftIcon} from 'react-native-heroicons/outline'
import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'
// import { FlatList } from 'react-native-gesture-handler';

const SeeAll = () => {
    const navigation = useNavigation()
    const { params } = useRoute();
    const { moviesDetails, header } = params;
    return (
        <View style={{
            flex: 1,
            // backgroundColor: 'orange',
            // justifyContent: 'center',
            // alignItems: 'center'
            backgroundColor:'#212121'
        }}>
            <View style={{
                width:rw(100),
                backgroundColor:'#000',
                // flex:1
            }}>
                <SafeAreaView style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    paddingHorizontal:rw(2),
                    paddingVertical:rh(2)
                }}>
                    <TouchableOpacity onPress={() => {navigation.goBack()}}>
                        <ChevronLeftIcon size={rw(9)} strokeWidth={2.5} color={'#FFF'}/>
                    </TouchableOpacity>
                    <Text style={{
                        color:'orange',
                        fontSize:rf(3)
                        }}>{header}</Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('Search')}}>
                        <MagnifyingGlassIcon size={rw(9)} strokeWidth={2.5} color={'#FFF'}/>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
            <View style={{
                justifyContent: 'center',
                width: rw(100),
                alignItems: 'center',
               flex:1
            }}>
                <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:rh(0)}}
                    numColumns={2}
                    data={moviesDetails}
                    renderItem={({ item }) => {
                        const { id, name, src, casts } = item;
                        return (
                            <View>
                                <TouchableOpacity style={{
                                    padding:rw(2)
                                }}>
                                    <Image source={src} style={{
                                        width: rw(45),
                                        height: rw(65),
                                        borderRadius:10
                                    }} />
                                </TouchableOpacity>
                                <Text style={{
                                    textAlign: 'center',
                                    color:'#FFF',
                                    marginBottom:rh(3)
                                }}>{name.length > 15 ? name.slice(0, 15) + '...' : name}</Text>
                            </View>
                        )
                    }}
                />
            </View>
            {/* <Text>{moviesDetails[0].src}</Text> */}
        </View>
    )
}

export default SeeAll
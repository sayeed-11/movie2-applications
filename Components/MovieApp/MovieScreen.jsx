import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveWidth as rw
} from 'react-native-responsive-dimensions'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { LinearGradient } from 'expo-linear-gradient'

import Casts from './Casts'
import MovieList from './MovieList'
import { TrendingMovies } from './MovieDetails'

const MovieScreen = () => {
    const navigation = useNavigation();
    const [isFav, setIsFav] = useState(false);
    const {params} = useRoute();
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                backgroundColor: '#000'
            }}
        >
            <View style={{
                width: rw(100),
            }}>
                <SafeAreaView style={{
                    width: rw(100),
                    zIndex: 100,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: rw(5),
                    position: 'absolute',
                    marginTop: rh(1)
                }}>
                    <TouchableOpacity style={{
                        borderRadius: 10,

                    }} onPress={() => { navigation.goBack() }}>
                        <ChevronLeftIcon size={rw(10)} strokeWidth={3.5} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setIsFav(!isFav) }}>
                        <HeartIcon size={rw(10)} color={isFav ? 'red' : 'white'} />
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <Image source={params.src} style={{
                        width: rw(100),
                        height: rh(55),
                    }} />
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,1)']}
                        style={{
                            width: rw(100),
                            height: rh(40),
                            position: 'absolute',
                            bottom: 0
                        }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1.5 }}
                    />
                </View>
            </View>
            <View style={{
                width: rw(100),
                marginTop: -rh(4),
                gap: rh(1.5)
            }}>
                <Text style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontSize: rf(3.5),
                    fontWeight: 700
                }}>{params.name}</Text>
                <Text style={{
                    color: '#FFF',
                    textAlign: 'center',
                    color: 'gray',
                    fontWeight: 'bold'
                }}>Release • 2020 • 170min </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: '#FFF',
                        textAlign: 'center',
                        color: 'gray',
                        fontWeight: 'bold'
                    }}>Action • </Text>
                    <Text style={{
                        color: '#FFF',
                        textAlign: 'center',
                        color: 'gray',
                        fontWeight: 'bold'
                    }}>Thrill • </Text>
                    <Text style={{
                        color: '#FFF',
                        textAlign: 'center',
                        color: 'gray',
                        fontWeight: 'bold'
                    }}>Comedy  </Text>
                </View>
                <View style={{
                    paddingHorizontal: rw(2)
                }}>
                    <Text style={{
                        color: '#FFF',
                        fontSize: rf(2),
                        textAlign: 'justify'

                    }}>
                        In Marvel Studios’ Black Panther: Wakanda Forever, the secluded Kingdom of Wakanda quickly learns they aren’t the only secluded nation out there. Taking everyone by surprise, the Talakon emerge out of the water, led by their fearless leader who the Talokanil call “Ku’ku’lkán,” meaning the Feathered Serpent God. But more commonly, he’s called Namor.
                    </Text>
                </View>
            </View>
            <View style={{
                marginTop: rh(4),
            }}>
                <Casts cast={params.casts}/>
            </View>
            <View style={{
                paddingHorizontal:rw(2)
            }}>
                <MovieList name={'Similar Movies'} data={TrendingMovies}/>
            </View>
            {/* <Casts cast={cast} /> */}

        </ScrollView>
    )
}

export default MovieScreen
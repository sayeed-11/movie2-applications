import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveWidth as rw
} from 'react-native-responsive-dimensions'

import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useState } from 'react'

import MovieList from './MovieList'
import { TrendingMovies } from './MovieDetails'

const Person = () => {
    const navigation = useNavigation();
    const [isFav, setIsFav] = useState(false);

    const {params} = useRoute();

   const {name, city,img_url, bio, s_info} = params;
   const {gender, birthday, known_for, popularity} = s_info;

//    console.log(typeof(index.toString()));
    return (
        <ScrollView
            contentContainerStyle={{
                backgroundColor: '#000',
                gap: rh(5)
            }}
        >
            <SafeAreaView style={{
                width: rw(100),
                paddingHorizontal: rw(5),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: rh(2),
            }}>
                <TouchableOpacity style={{
                    borderRadius: 10,
                }} onPress={() => { navigation.goBack() }}>
                    <ChevronLeftIcon size={rw(10)} strokeWidth={3.4} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setIsFav(!isFav) }}>
                    <HeartIcon size={rw(10)} color={isFav ? 'red' : 'white'} />
                </TouchableOpacity>
            </SafeAreaView>

            <View style={{
                alignItems: 'center',
                gap: rh(7)
            }}>
                <View style={{
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: rw(3)
                }}>
                    <View style={{
                        width: rw(60),
                        height: rw(60),
                        borderRadius: 500,
                        position: 'absolute',
                        backgroundColor: '#e1e1e1',
                        opacity: .3
                    }} />
                    <View style={{
                        width: rw(80),
                        height: rw(80),
                        borderRadius: 500,
                        position: 'absolute',
                        backgroundColor: '#e1e1e1',
                        opacity: .3
                    }} />
                    <Image source={{uri:img_url}} style={{
                        width: rw(55),
                        height: rw(55),
                        borderRadius: 500,
                        borderWidth: rw(1),
                        borderColor: 'gray',
                    }} />
                </View>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: '#FFF',
                        fontSize: rf(4)
                    }}>{name}</Text>
                    <Text style={{
                        color: '#FFF',
                        fontSize: rf(1.5)
                    }}>{city}</Text>
                </View>

                <View style={{
                    width: rw(95),
                    // backgroundColor:'#2c2c2c',
                    backgroundColor: '#232323',
                    height: rh(8),
                    borderRadius: 50,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        padding: rw(2),
                        borderRightColor: '#fff',
                        borderRightWidth: rw(.5)
                    }}>
                        <Text style={{
                            color: '#FFF',
                            fontSize: rf(1.7),
                            textAlign: 'center'
                        }}>Gender</Text>
                        <Text style={{
                            color: '#FFF',
                            fontSize: rf(1.3),
                            textAlign: 'center',
                            color: '#b1b1b1'
                        }}>{gender}</Text>
                    </View>
                    <View style={{
                        padding: rw(2),
                        borderRightColor: '#fff',
                        borderRightWidth: rw(.5)
                    }}>
                        <Text style={{
                            color: '#FFF',
                            fontSize: rf(1.7),
                            textAlign: 'center'
                        }}>Birthday</Text>
                        <Text style={{
                            color: '#FFF',
                            fontSize: rf(1.3),
                            textAlign: 'center',
                            color: '#b1b1b1'
                        }}>{birthday}</Text>
                    </View>
                    <View style={{
                        padding: rw(2),
                        borderRightColor: '#fff',
                        borderRightWidth: rw(.5)
                    }}>
                        <Text style={{
                            color: '#FFF',
                            fontSize: rf(1.7),
                            textAlign: 'center'
                        }}>Known for</Text>
                        <Text style={{
                            color: '#FFF',
                            fontSize: rf(1.3),
                            textAlign: 'center',
                            color: '#b1b1b1'
                        }}>{known_for}</Text>
                    </View>
                    <View style={{
                        padding: rw(2),
                    }}>
                        <Text style={{
                            color: '#FFF',
                            fontSize: rf(1.7),
                            textAlign: 'center'
                        }}>Popularity</Text>
                        <Text style={{
                            color: '#FFF',
                            fontSize: rf(1.3),
                            textAlign: 'center',
                            color: '#b1b1b1'
                        }}>{popularity}</Text>
                    </View>
                </View>
            </View>
            <View style={{
                paddingHorizontal: rw(3),
                gap: rh(2),
                marginBottom: -rh(5)
            }}>
                <Text style={{
                    color: '#FFF',
                    fontSize: rf(2),
                    fontWeight: 'bold'
                }}>Biography</Text>

                <Text style={{
                    color: '#FFF',
                    textAlign: 'justify'
                }}>{bio}</Text>
            </View>

            <View style={{
                paddingHorizontal:rw(2)
            }}>
                <MovieList name={'Movies'} data={TrendingMovies} />
            </View>

        </ScrollView>
    )
}

export default Person
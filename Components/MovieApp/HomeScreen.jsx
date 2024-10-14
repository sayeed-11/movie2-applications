import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { responsiveFontSize as rf, responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'

const ios = Platform.OS == 'ios';

import TrendingData from './TrendingData';
import MovieList from './MovieList';


import { useNavigation, DrawerActions } from '@react-navigation/native';
import { TrendingMovies } from './MovieDetails';

const HomeScreen = () => {
    const navigation = useNavigation();
    
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#161616',
            paddingHorizontal: rw(2)
        }}>
            <SafeAreaView style={{
                marginBottom: ios ? 5 : 10,
            }}>
                <StatusBar style='light' />
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: rw(3),
                    alignItems: 'center'
                }}>
                    <TouchableOpacity>
                        <Bars3BottomLeftIcon size={rf(4)} strokeWidth={"2"} color={"white"} onPress={() => {
                            navigation.dispatch(DrawerActions.openDrawer())
                        }} />
                    </TouchableOpacity>
                    <Text style={{
                        color: 'white',
                        fontSize: rf(4),
                        fontWeight: 500
                    }}><Text style={{
                        color: 'orange'
                    }}>M</Text>ovies</Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('Search')}}>
                        <MagnifyingGlassIcon size={rf(4)} strokeWidth={"2"} color={"white"} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: rh(1) }}>
                <TrendingData data={TrendingMovies} />
                <MovieList name={'Upcoming'} data={TrendingMovies} />
                <MovieList name={'Top Rated'} data={TrendingMovies} />
            </ScrollView>
        </View>
    )
}

export default HomeScreen
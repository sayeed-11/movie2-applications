import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveWidth as rw
}from 'react-native-responsive-dimensions'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'


const TrendingData = ({data}) => {

    const navigation = useNavigation();
    const handleClick = (src, name,casts) => {
        navigation.navigate('Movie', {src, name, casts});
    }
    return (
        <View style={{
            marginTop:rh(1)
        }}>
            <Text style={{
                color: '#FFF',
                fontSize:rf(2.5)
            }}>Trendings</Text>

            <Carousel
                data = {data}
                renderItem={({item}) => <MovieCard item = {item} handleClick={handleClick}/>}
                firstItem={1}
                sliderWidth={rw(100)}
                itemWidth={rw(60.2)}
                inactiveSlideOpacity={0.5}
                slideStyle={{alignItems:'center', marginTop:rh(2)}}
            />
        </View>
    )
}

export default TrendingData;


const MovieCard = ({item, handleClick}) => {
    const {name , src, casts} = item;
    return (
        <TouchableWithoutFeedback onPress={() => handleClick(src, name,casts)}>
            <Image source={src} style={{
                width:rw(60),
                height:rh(40),
                borderRadius:rw(5)
            }}/>
        </TouchableWithoutFeedback>
    )
}
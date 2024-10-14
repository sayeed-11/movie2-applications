import { View, Text, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import {
  responsiveFontSize as rf,
  responsiveHeight as rh,
  responsiveWidth as rw
} from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'

const MovieList = ({ name, data}) => {
  const navigation = useNavigation();

  return (
    <View style={{
      marginBottom: 5,
      marginTop: rh(5)
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: rw(1)
      }}>
        <Text style={{ color: '#FFF', fontSize: rf(2) }}>{name}</Text>
        <TouchableOpacity>
          <Text style={{
            color: 'orange'
          }} onPress={() => {navigation.push('SeeAll', {moviesDetails : data, header:name})}}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        width: '100%'
      }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => {
            const {name, src} = item;
            return (
              <TouchableOpacity style={{
                margin: rw(1)
              }} onPress={() => {navigation.push('Movie', item)}}>
                <Image source={src}
                  style={{
                    width: rw(30),
                    height: rh(30),
                    borderRadius: rw(2),
                    borderWidth: 1,
                    borderColor: 'gray'
                  }} />
                <Text style={{
                  color: '#FFF',
                  marginTop: rh(1),
                  textAlign:'center'
                }}>
                  {
                    name.length > 14 ? name.slice(0, 14) + '.....' : name
                  }
                </Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </View>
  )
}

export default MovieList
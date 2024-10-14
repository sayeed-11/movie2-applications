import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState,useEffect,useRef } from 'react';

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Main() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(()=>{
    item1.current.scrollToIndex({
      index : selectedIndex,
      animated : true,
    });
  },[selectedIndex])

  const item1 = useRef(null);
  const item2 = useRef(null);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor='orange' />
      <View style={styles.flatListBox}>
        <FlatList
          ref={item1}
          horizontal
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={selectedIndex}
          data={list}
          renderItem={({ item, index }) => {
            return <TouchableOpacity onPress={()=>{setSelectedIndex(index)}} style={[styles.horizontalFlatlist, { backgroundColor: selectedIndex == index ? "#000" : "#FFF" }]}>
              <Text style={[styles.text, { color: selectedIndex == index ? "#FFF" : "#000" }]}>{item}</Text>
            </TouchableOpacity>
          }}
        />
      </View>
      <View style={styles.verticalflatListBox}>
        <FlatList
          ref={item2}
          horizontal={false}
          initialScrollIndex={selectedIndex}
          showsVerticalScrollIndicator={false}
          data={list}
          onScroll={event => {
            const ind = event.nativeEvent.contentOffset.y/70;
            setSelectedIndex(ind.toFixed(0));
          }}
          renderItem={({ item, index }) => {
            return <TouchableOpacity onPress={()=>{setSelectedIndex(index)}} style={[styles.verticalFlatlist, { backgroundColor: selectedIndex == index ? "#000" : "#FFF" }]}>
              <Text style={[styles.text, { color: selectedIndex == index ? "#FFF" : "#000" }]}>{item}</Text>
            </TouchableOpacity>
          }}
        />
      </View>
      {/* <StatusBar style="auto" backgroundColor='orange' /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 35
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    // color: '#000',

  },
  horizontalFlatlist: {
    margin: 5,
    borderWidth: 1,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  },
  verticalFlatlist: {
    borderWidth: 1,
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5

  },
  flatListBox: {
    flex: 1,
    elevation: 1
  },
  verticalflatListBox: {
    flex: 8,
    paddingHorizontal: 10
  }


});

import * as React from 'react';

import { Text, View, SafeAreaView, StatusBar, Image, FlatList } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import mypng1 from './assets/page_1.png';
import mypng2 from './assets/page-2.png';
import mypng3 from './assets/page-3.png';
import mypng4 from './assets/page-4.png';

const imagedata = [
    { img: mypng1 },
    { img: mypng2 },
    { img: mypng3 },
    { img: mypng4 },
]

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            {/* <Text>hello world</Text> */}
            {/* <Image source={mypng1} style={{ width: 100, height: 100 }} />
            <Image source={mypng2} style={{ width: 100, height: 100 }} />
            <Image source={mypng3} style={{ width: 100, height: 100 }} />
            <Image source={mypng4} style={{ width: 100, height: 100 }} /> */}
            <View style={{ paddingBottom: 0, flex: 1, backgroundColor: 'red' }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={imagedata}
                    renderItem={({ item }, index) => {
                        return (
                            <View style={{
                                margin: 10,
                                width: windowWidth - 20,
                                height: 350,
                                borderWidth: 1,
                                // borderColor: '#1a43bf',
                                borderColor: '#FFF',
                                borderRadius: 20
                            }} key={index}>
                                <Image style={{ width: '100%', height: '100%' }} source={item.img} />
                            </View>
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;
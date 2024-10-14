
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppNavigation from './Components/MovieApp/AppNavigation'
import { NavigationContainer } from '@react-navigation/native';
// import HomePage from './Demo/HomePage';

// import { UserCircleIcon } from 'react-native-heroicons/outline'
// import { KeyIcon } from 'react-native-heroicons/outline'

// import logo from './assets/page_1.png'

import { AppRegistry } from 'react-native';

const App = () => {
  // console.log(logo);
  return (


    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>

    // <View className='flex-1 p-0 bg-black'>
    //   <SafeAreaView className='w-full h-2/6 justify-center items-center border'>
    //     <Image source={logo} className='h-64 w-64' />
    //   </SafeAreaView>
    //   <View className='w-full h-4/6 items-center justify-center gap-y-1'>
    //     <Text className='text-4xl font-semibold text-white uppercase'>Log In</Text>
    //     <View className='w-full px-5 py-4 gap-y-5'>
    //       <View>
    //         <TextInput placeholder='username' placeholderTextColor={'#fff'} className='w-full bg-slate-500 h-12 rounded-md pl-10 pr-5 text-white text-base' />
    //         <UserCircleIcon size={30} strokeWidth={1.5} color={'#FFF'} style={{
    //           position: 'absolute',
    //           top: '20%',
    //           left: '1%'
    //         }} />
    //       </View>
    //       <View>
    //         <TextInput placeholder='password' secureTextEntry={true} placeholderTextColor={'#fff'} className='w-full bg-slate-500 h-12 rounded-md pl-10 pr-5 text-white text-base' />
    //         <KeyIcon size={25} strokeWidth={1.5} color={'#FFF'} style={{
    //           position: 'absolute',
    //           top: '30%',
    //           left: '1%'
    //         }} />
    //       </View>
    //       <TouchableOpacity>
    //         <Text className='text-blue-500'>Forgot Password?</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <View className='w-full px-5 py-4 gap-y-4'>
    //       <TouchableOpacity className='w-full bg-blue-500 p-3 rounded-md'>
    //         <Text className='text-white text-center text-base'>LOG IN</Text>
    //       </TouchableOpacity>
    //       <View className='flex-row gap-x-2'>
    //         <Text className='text-white text-base'>Don't have any account?</Text>
    //         <TouchableOpacity>
    //           <Text className='text-blue-500 text-base'>Sign up</Text>
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   </View>
    // </View>
  )
}

export default App

// <HomePage/>
// <NavigationContainer>
//   <AppNavigation />
// </NavigationContainer>
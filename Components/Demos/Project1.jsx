import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import logo from '../assets/pic/menu.png'

const Project1 = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#F2F2F2',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10
        }}>
            <View style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 40,
                    fontWeight: 700
                }}>LOG IN</Text>
                <View style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: 20,
                    gap: 20
                }}>
                    <View style={{
                        // elevation: 1,
                        // backgroundColor: '#FFF',
                        // borderRadius: 5
                    }}>
                        <TextInput
                            // placeholder='username'
                            // cursorColor={'gray'}
                            // // defaultValue='USERNAME'
                            // // editable={false}
                            // inlineImageLeft='username'
                            // inlineImagePadding={2}
                            // underlineColorAndroid="transparent"

                            autoCapitalize={'words'}
                            autoFocus={true}
                            caretHidden={false}
                            keyboardType={'phone-pad'}
                            defaultValue={'Hello!'}
                            placeholder={'hello world'}
                            placeholderTextColor={'red'}
                            returnKeyType={'send'}
                            selectTextOnFocus={false}
                            inlineImageLeft="search"
                            // multiline={true}
                            selectionColor={'gray'}
                            underlineColorAndroid={'orange'}

                            style={{
                                padding: 10,
                                fontSize: 15,

                            }} />
                    </View>
                    <View style={{
                        width: '100%',
                        justifyContent: 'center',
                        // borderRadius: 5,
                        // elevation: 1,
                        // backgroundColor: '#FFF'
                    }}>
                        <TextInput
                            placeholder='password'
                            secureTextEntry={true}
                            underlineColorAndroid={'orange'}
                            style={{
                                padding: 10,
                                fontSize: 15,

                            }} />
                    </View>

                    <TouchableOpacity style={{
                        width: 150,
                        marginLeft: 5
                    }}>
                        <Text style={{
                            fontSize: 15,
                            textDecorationLine: 'underline'
                        }}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    padding: 20,
                    width: '100%'
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#FFF',
                        width: '100%',
                        borderRadius: 5,
                        elevation: 3
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 25,
                            padding: 10,
                        }}>LOG IN</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>or</Text>
                </View>
                <View style={{
                    width: '100%',
                    padding: 20,
                    flexDirection: 'row',
                    gap: 5,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 15
                    }}>Don't Have any account? </Text>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize: 15,
                            textDecorationLine: 'underline'
                        }}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Project1
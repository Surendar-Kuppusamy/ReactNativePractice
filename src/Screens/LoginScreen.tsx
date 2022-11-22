import React, { useMemo, useState, FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, TextInput, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity } from 'react-native';
import type { LoginProps } from '@root/src/Types/DefaultTypes';
import { CommonActions, useNavigation } from '@react-navigation/native';


function LoginScreen(props: LoginProps) {
    
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEvent = (e: NativeSyntheticEvent<TextInputChangeEventData>):void => {
        /* console.log(e.nativeEvent.target);
        console.log(e.nativeEvent.text); */
        setEmail(e.nativeEvent.text);
    }

    const submitForm = (): void => {
        /* console.log('Email', email);
        console.log('Password', password); */
        navigation.dispatch(
            CommonActions.navigate({
                name: "Home"
            })
        );
    }

    return (
      <SafeAreaView>
        <StatusBar
            animated={true}
            backgroundColor="#61dafb"
        />
        <View style={ styles.textField }>
            <Text>Email</Text>
            <TextInput
                style={ styles.textBox }
                placeholder='Email'
                defaultValue=''
                keyboardType='email-address'
                onChange={changeEvent}
                placeholderTextColor="#61dafb"
            />  
        </View>
        <View style={ styles.textField }>
            <Text>Password</Text>
            <TextInput
                style={ styles.textBox }
                placeholder='Password'
                defaultValue=''
                onChangeText={setPassword}
                secureTextEntry={true}
                placeholderTextColor="#61dafb"
            />
        </View>
        <View>
            <TouchableOpacity
                style={ styles.btn }
                onPress={submitForm}
            >
                <Text>
                    Sign in
                </Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    textField: {
        marginHorizontal:20,
        paddingHorizontal: 20,
        marginTop: 20
    },
    textBox: {
        borderStyle: 'solid',
        borderRadius: 45,
        borderColor: '#f4511e',
        borderWidth: 5,
        paddingHorizontal: 20
    },
    btn: {
        marginTop: 20,
        alignSelf: 'center',
        padding: 5,
        backgroundColor: '#f4511e',
        tintColor: '#FFF'
    }
})

export default LoginScreen;
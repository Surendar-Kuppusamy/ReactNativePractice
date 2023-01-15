import React, { useMemo, useState, FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, TextInput, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';
import type { LoginProps } from '@root/src/Types/DefaultTypes';
import { CommonActions, useNavigation } from '@react-navigation/native';


function LoginScreen(props: LoginProps) {
    
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const changeEvent = (e: NativeSyntheticEvent<TextInputChangeEventData>):void => {
        /* console.log(e.nativeEvent.target);
        console.log(e.nativeEvent.text); */
        setEmail(e.nativeEvent.text);
    }

    const submitForm = (): void => {
        /* console.log('Email', email);
        console.log('Password', password); */

        Alert.alert('Title','Move to home', [
                {
                    text: 'cancel',
                    onPress: () => Alert.alert("Cancel Pressed")
                },
                {
                    text: 'open',
                    onPress: () => setModalVisible(true)
                }
            ],
            {
                cancelable: true,
                onDismiss: () => Alert.alert("Alert was dismmissed clicking outside")
            }
        );
        

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
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Text>
                    Modal
                </Text>
            </Pressable>
        </View>

        
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
            </View>
            </View>
            </Modal>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})

export default LoginScreen;
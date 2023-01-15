import React, { useMemo, useState, FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button, SafeAreaView, FlatList, TextInput, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';
import type { LoginProps } from '@root/src/Types/DefaultTypes';
import { CommonActions, useNavigation } from '@react-navigation/native';
//import { LoginImage } from 'assets/Demo/LoginImage.png';


const image = require('../../assets/Demo/loginimage.png');
//const image = { uri: "https://reactjs.org/logo-og.png" };


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
        <View style={ styles.container }>
			<ImageBackground source={image} resizeMode="cover" style={styles.image}>
				<View style={ [styles.linkBlock, styles.mb] }>
					<Text style={ styles.textWhite }>
						Login
					</Text>
					<Text style={ [styles.textWhite, styles.tb] }>
						Signup
					</Text>
				</View>
			</ImageBackground>
		</View>
    );
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
	},
	borderWhite: {
		borderStyle: "solid",
		borderColor: "#FFF"
	},
	mb: {
		marginBottom: 80
	},
	tb: {
		opacity: 0.5,
		color: "#FFF",
		borderStyle: "solid",
		borderWidth: 2,
		borderColor: "#FFF",
		backgroundColor: "transparent",
	},
	textWhite: {
		color: "#000",
		marginBottom: 25,
		backgroundColor: "#FFF",
		borderRadius: 50,
		paddingHorizontal: 120,
		paddingVertical: 10,
		fontWeight: "bold"
	},
	textGrey: {
		color: "#EEE",
		marginVertical: 35
	},
	image: {
		flex: 1,
		justifyContent: "center"
	},
	linkBlock: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "center"
	},
	text: {
		color: "white",
		fontSize: 42,
		lineHeight: 84,
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "#000000c0"
	}
})

export default LoginScreen;
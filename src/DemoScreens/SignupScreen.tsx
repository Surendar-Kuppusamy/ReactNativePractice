import React, { useMemo, useState, FC } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, ImageBackground, Button, SafeAreaView, FlatList, TextInput, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity, Alert, Modal, Pressable, Image, StatusBar } from 'react-native';
import type { SignupProps } from '@root/src/Types/DefaultTypes';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';


const image = require('../../assets/Demo/antona.png');


function SignupScreen(props: SignupProps) {

	const [username, setUserName]			=	useState('');
	const [password, setPassword]			=	useState('');
	const [passwordType, setPasswordType]	=	useState(false);

	const changeEvent = (e: NativeSyntheticEvent<TextInputChangeEventData>):void => {
        console.log(e.nativeEvent.target);
        console.log(e.nativeEvent.text);
    }

    return (
		<SafeAreaView style={ styles.container }>
			<StatusBar
				animated={true}
				backgroundColor="#61dafb"
			/>
			<View style={ styles.locationColumn }>
				<View style={ styles.locationContent }>
					<Ionicons name="location" size={25} color="#000" />
					<Text>
						Perth, Western Australia
					</Text>
				</View>
			</View>
			<View style={ styles.formColumn }>
				<View style={ styles.formText }>
					<Text style={ styles.header }>
						Let's Sign You In
					</Text>
					<Text style={ styles.subHeader }>
						Welcome back you've been missed!
					</Text>
				</View>
			</View>
			<View style={ styles.formColumn }>
				<View style={ styles.forms }>
					<View style={ styles.formInput }>
						<View style={ styles.inputLabel }>
							<Text style={ styles.label }>
								Username or email
							</Text>
						</View>
						<View style={ styles.username }>
							<Ionicons style={ styles.inputIcon } name="location" size={25} color="#000" />
							<TextInput
								style={ styles.textBox }
								placeholder='User Name '
								defaultValue=''
								keyboardType='email-address'
								onChange={changeEvent}
								placeholderTextColor="#000"
							/>
						</View>
					</View>
					<View style={ styles.formInput }>
						<View style={ styles.inputLabel }>
							<Text style={ styles.label }>
								Password
							</Text>
						</View>
						<View style={ styles.username }>
							<Ionicons style={ styles.inputIcon } name="lock-closed" size={25} color="#000" />
							<TextInput
								style={ styles.textBox }
								placeholder='Password'
								defaultValue=''
								//keyboardType='email-address'
								onChange={changeEvent}
								placeholderTextColor="#000"
								secureTextEntry={passwordType}
							/>
							<Pressable style={ styles.passIcon } onPress={e => setPasswordType(!passwordType)}>
								<Ionicons  name={ passwordType ? "eye" : "eye-off" } size={25} color="#000" />
							</Pressable>
						</View>
					</View>
				</View>
				
			</View>
			<View style={ styles.buttonColumn }>
				<View style={ styles.btns }>
					<TouchableOpacity style={ styles.btnText }>
						<Text style={ styles.whiteColor }>
							GET STARTED
						</Text>
						<Ionicons style={ styles.btnIcon } name="arrow-forward" size={20} color="white" />
					</TouchableOpacity>
				</View>

				<View style={ styles.hintBlock }>
					<Text style={ styles.hint }>
						Don't have an account? Signup
					</Text>
				</View>
				
				<View style={ styles.btns }>
					<TouchableOpacity style={ styles.btnText1 }>
						<Text style={ styles.whiteColor }>
							Connect with Facebook
						</Text>
						<Ionicons style={ styles.btnIcon1 } name="md-logo-facebook" size={20} color="white" />
					</TouchableOpacity>
					
				</View>
			</View>
		</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		flexDirection: "column"
	},
	locationColumn: {
		flex: 1,
		maxHeight: 110,
		paddingHorizontal: 20,
		paddingTop: 25
	},
	formColumn: {
		flex: 1,
		maxHeight: 340,
		paddingHorizontal: 20,
		backgroundColor: "orange"
	},
	buttonColumn: {
		flex: 1,
		maxHeight: 150,
		marginTop: 30
	},
	locationContent: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center"
	},
	locationIcon: {
		alignSelf: "baseline"
	},
	header: {
		fontSize: 25,
		fontWeight: "bold"
	},
	subHeader: {
		fontSize: 14
	},
	textBox: {
        paddingLeft: 35,
		minWidth: 350,
		elevation: 0.3,
		minHeight: 55
    },
	username: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		//backgroundColor: "red",
		//maxHeight: 80
	},
	formText: {
		flex: 1,
		maxHeight: 100,
		//backgroundColor: "orange",
		marginBottom: 60
	},
	forms: {
		flex: 1,
	},
	formInput: {
		flex: 1,
		backgroundColor: "red",
		marginTop: 10
	},
	label: {
		position: "absolute",
		top: 0,
		fontSize: 14,
		//backgroundColor: "green"
	},
	inputIcon: {
		position: "absolute",
		left: 5
	},
	passIcon: {
		position: "absolute",
		left: 310
	},
	btns: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	btnText: {
		backgroundColor: "#C6AB59",
		paddingHorizontal: 20,
		paddingVertical: 17,
		marginHorizontal: 50,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	btnText1: {
		backgroundColor: "#3C79E6",
		paddingHorizontal: 20,
		paddingVertical: 17,
		marginHorizontal: 50,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		color: "#FFF"
	},
	btnIcon: {
		position: "absolute",
		right: 10
	},
	btnIcon1: {
		position: "absolute",
		left: 10
	},
	whiteColor: {
		color: "#FFF"
	},
	hintBlock: {
		flex: 1,
		justifyContent: "center"
	},
	hint: {
		textAlign: "center"
	},
	inputLabel: {
		flex: 1,
		justifyContent: "flex-start",
		maxHeight: 10
	}
})

export default SignupScreen;
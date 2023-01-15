import React, { useMemo, useState, FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, ImageBackground, Button, SafeAreaView, FlatList, TextInput, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity, Alert, Modal, Pressable, Image } from 'react-native';
import type { LoginProps } from '@root/src/Types/DefaultTypes';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { rStyle } from '../Styles/DemoStyles';

const image = require('../../assets/Demo/antona.png');

function RegisterScreen() {

    return (
		<SafeAreaView style={ rStyle.container }>
			<StatusBar
				animated={true}
				backgroundColor="#61dafb"
			/>
			<View style={ rStyle.location }>
				<View style={ rStyle.locationText }>
					<Ionicons name="location" size={25} color="#000" />
					<Text style={ rStyle.locationName }>
						Perth, Western Australia
					</Text>
				</View>
			</View>
			<View style={ rStyle.header }>
				<Text style={ rStyle.headerTitle }>
					Let's Sign You In
				</Text>
				<Text style={ rStyle.headerHint }>
					Welcome back you've been missed!
				</Text>
			</View>
			<View style={ rStyle.form }>
				<View style={ rStyle.formEmail }>
					<Text style={ rStyle.formLabel }>
						Username or Email
					</Text>
					<View style={ rStyle.formInputBox }>
						<Ionicons name="fitness-sharp" size={25} color="#000" />
						<TextInput
							style={ rStyle.formInputField }
							placeholder='User Name '
							defaultValue=''
							keyboardType='email-address'
							placeholderTextColor="#000"
						/>
					</View>
				</View>
				<View style={ rStyle.formPassword }>
					<Text style={ rStyle.formLabel }>
						Password
					</Text>
					<View style={ rStyle.formInputBox }>
						<Ionicons name="fitness-sharp" size={25} color="#000" />
						<TextInput
							style={ rStyle.formInputField }
							placeholder='Password'
							defaultValue=''
							/* keyboardType='email-address' */
							placeholderTextColor="#000"
							secureTextEntry={true}
						/>
						<Ionicons style={ rStyle.formIcon } name="logo-electron" size={25} color="#000" />
					</View>
				</View>
				
			</View>
			<View style={ rStyle.buttons }>
				<View style={ rStyle.buttonSignup }>
					<TouchableOpacity style={ rStyle.buttonSignupBtn }>
						<Text style={ rStyle.buttonSignupBtnText }>
							SIGN IN
						</Text>
						<Ionicons style={ rStyle.buttonSignupBtnIcon } name="arrow-forward" size={20} color="white" />
					</TouchableOpacity>
					<Text style={ rStyle.buttonSignupBtnHint }>
						Don't have an account? <Text style={ rStyle.buttonSignupBtnTxt }>Sign up</Text>
					</Text>
				</View>
				<View style={ rStyle.buttonFacebook }>
					<TouchableOpacity style={ rStyle.buttonFacebookBtn }>
						<Ionicons style={ rStyle.buttonFacebookBtnIcon } name="md-logo-facebook" size={20} color="white" />
						<Text style={ rStyle.buttonSignupBtnText }>
							Connect with Facebook
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
    );
}


export default RegisterScreen;
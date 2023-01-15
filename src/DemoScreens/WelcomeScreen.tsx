import React, { useMemo, useState, FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, ImageBackground, Button, SafeAreaView, FlatList, TextInput, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity, Alert, Modal, Pressable, Image } from 'react-native';
import type { LoginProps } from '@root/src/Types/DefaultTypes';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
//import { LoginImage } from 'assets/Demo/LoginImage.png';



const image = require('../../assets/Demo/antona.png');
//const image = { uri: "https://reactjs.org/logo-og.png" };


function WelcomeScreen() {

    return (
        <View style={ styles.container }>
			<StatusBar
				animated={true}
				backgroundColor="#61dafb"
			/>
			<View style={ styles.block1 }>
				<Image
					source={image}
					style={ styles.imageBlock }
				/>
			</View>
			<View style={ styles.block2 }>
				
			</View>
			<View style={ styles.block3 }>

			</View>
			<View style={ styles.block4 }>
				<Text style={ styles.header }>
					Welcome to STStore !
				</Text>
				<Text style={ styles.small }>
					With long experience in the audio industry we created the best quality products
				</Text>
				<TouchableOpacity style={ styles.btn }>
					<Text style={ styles.btnText }>
						GET STARTED
					</Text>
					<Text style={ styles.float }>
						<Ionicons name="arrow-forward" size={20} color="white" />
					</Text>
				</TouchableOpacity>
			</View>
		</View>
    );
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		flexDirection: 'column',
	},
	float: {
		position: "absolute",
		right: 8,
		top: 8
	},
	header: {
		fontSize: 25,
		fontWeight: "bold",
		textAlign: "center",
		marginVertical: 12
	},
	small: {
		fontSize: 14,
		fontWeight: "normal",
		textAlign: "center",
		marginVertical: 12
	},
	btn: {
		fontSize: 10,
		backgroundColor: "#C6AB59",
		textAlign: "center",
		padding: 10
	},
	btnText: {
		color: "#FFF",
		textAlign: "center"
	},
	block1: {
		flex: 1,
		position: "absolute",
		width: 326,
		height: 305,
		left: -20,
		top: 0,
		zIndex: 999
	},
	block2: {
		flex: 1,
		position: "absolute",
		width: 305,
		height: 305,
		left: 223,
		top: 60,
		borderRadius: 200,
		backgroundColor: "#C6AB59"
	},
	block3: {
		flex: 1,
		position: "absolute",
		width: 205,
		height: 205,
		left: -103,
		top: 277,
		borderRadius: 200,
		backgroundColor: "#8F92A1",
		opacity: 0.4
	},
	block4: {
		flex: 1,
		position: "absolute",
		width: 305,
		height: 188,
		left: 35,
		top: 553
	},
	row: {
		flexDirection: "row",
		justifyContent: "flex-start"
	},
	topBlock: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-around",
		elevation: 20,
		shadowColor: "#eee"
	},
	topText: {
		position: "absolute",
		width: 631,
		height: 422,
		left: -103,
		top: 60
	},
	bottomBlock: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-around"
	},
	bottomText: {
		position: "absolute",
		width: 305,
		height: 188,
		left: 35,
		bottom: 70
	},
	rightBlock: {
		position: "absolute",
		width: 305,
		height: 305,
		left: 223,
		top: 60,
		backgroundColor: "#C6AB59",
		borderRadius: 300,
		zIndex: -1
	},
	leftBlock: {
		position: "absolute",
		width: 205,
		height: 205,
		left: -103,
		top: 277,
		backgroundColor: "#8F92A1",
		borderRadius: 300,
		opacity: 0.4,
		zIndex: -1
	},
	heading: {
		textAlign: "center",
		fontSize: 24,
		fontWeight: "bold"
	},
	description: {
		fontSize: 25
	},
	welcomeText: {
		position: "absolute",
		height: 32,
		left: (Dimensions.get('window').width * .933),
		right: (Dimensions.get('window').width * .933),
		top: (((Dimensions.get('window').height * 50) / 100)- 32/2 + 164),
		fontSize: 24,
		lineHeight: 32,
		textAlign: "center",
		letterSpacing: -0.8,
		color: "#171717"
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
	imageBlock: {
		position: "absolute",
		width: 305,
		height: 305,
		left: 35,
		top: 113
	},
	linkBlock: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
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

export default WelcomeScreen;
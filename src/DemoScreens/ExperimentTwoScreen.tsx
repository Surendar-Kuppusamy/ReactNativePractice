import React, { useMemo, useState, FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, ImageBackground, Button, SafeAreaView, FlatList, TextInput, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity, Alert, Modal, Pressable, Image } from 'react-native';
import type { LoginProps } from '@root/src/Types/DefaultTypes';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { style } from '../Styles/ExperimentStyles';

const image = require('../../assets/Demo/antona.png');

function ExperimentTwoScreen() {

    return (
		<SafeAreaView style={ style.container }>
			<StatusBar
				animated={true}
				backgroundColor="#61dafb"
			/>
			<View style={ style.block1 }>
				<View style={ style.subBlock11 }>
					<Text>
						Block 1.1 Block 1.1Block 1.1Block 1.1Block 1.1Block 1.1Block 1.1Block 1.1Block 1.1Block 1.1
					</Text>
				</View>

				<View style={ style.subBlock12 }>
					<Text>
						Block 1.2
					</Text>
				</View>
			</View>
			<View style={ style.block2 }>
				<View style={ style.subBlock21 }>

				</View>

				<View style={ style.subBlock22 }>
					
				</View>
			</View>
			<View style={ style.block3 }>
				<View style={ style.subBlock31 }>

				</View>
				<View style={ style.subBlock32 }>
					
				</View>
			</View>
			<View style={ style.block4 }>
				<View style={ style.subBlock41 }>

				</View>
				<View style={ style.subBlock42 }>
					
				</View>
			</View>
		</SafeAreaView>
    );
}


export default ExperimentTwoScreen;
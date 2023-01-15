import React, { useMemo, useState, FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, ImageBackground, Button, SafeAreaView, FlatList, TextInput, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity, Alert, Modal, Pressable, Image } from 'react-native';
import type { LoginProps } from '@root/src/Types/DefaultTypes';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '../Styles/ExperimentStyles';

const image = require('../../assets/Demo/antona.png');

function ExperimentScreen() {

    return (
		<SafeAreaView style={ styles.container }>
			<StatusBar
				animated={true}
				backgroundColor="#61dafb"
			/>
			<Text style={ styles.block1 }>
				1. Demo Block
			</Text>
			<Text style={ styles.block2 }>
				2. Demo Block
			</Text>
			<Text style={ styles.block3 }>
				3. Demo Block
			</Text>
			<Text style={ styles.block4 }>
				4. Demo Block
			</Text>
		</SafeAreaView>
    );
}


export default ExperimentScreen;
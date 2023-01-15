import React, { useState } from "react";
import { View, AppStateEvent, TextInput, SafeAreaView, StyleSheet, Text, TouchableHighlight, TextInputProps, NativeSyntheticEvent, TextInputChangeEventData, StyleProp } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import validator from 'validator';
import { AllFormValidations, ValidationTypes } from '../Types/ValidationTypes';

interface TextInputCustomProps {
	setValue : React.Dispatch<React.SetStateAction<string>>;
	value: string;
	name: string;
	label: string;
	inputProps: TextInputProps;
	parentStyles?: StyleProp<Object>;
	inputStyles?: StyleProp<Object>;
	errorStyles?: StyleProp<Object>;
	iconStyles?: StyleProp<Object>;
	iconName?: string;
	iconFlex?: string;

	clearError?: string;
	isFormSub:boolean;
	setIsFormSub: React.Dispatch<React.SetStateAction<boolean>>;
	validation: AllFormValidations;
	setValidation: React.Dispatch<React.SetStateAction<AllFormValidations>>;
}



const TextBoxForState: React.FC<TextInputCustomProps>	=	(props)	=> 	{

	const [errorMessage, setErrorMessage]	=	useState('');

	const changeEvent = (e: NativeSyntheticEvent<TextInputChangeEventData>):void => {
		props.setValue(e.nativeEvent.text);
	}

	const validateValue = async(value:string) => {
		if(props.validation !== undefined) {
			const validationNames   =   await Object.keys(props?.validation[props?.name as keyof AllFormValidations]);
			for await (const validationName of validationNames) {
				if(validationName === 'required') {
					if(!(value !== '')) {
						setErrorMessage(props.validation[props?.name as keyof AllFormValidations][validationName] || '');
					} else {
						setErrorMessage('');
					}
				} else if(validationName === 'email') {
					if(!validator.isEmail(value)) {
						setErrorMessage(props.validation[props?.name as keyof AllFormValidations][validationName] || '');
					} else {
						setErrorMessage('');
					}
				} else if(validationName === 'password') {
					if(!validator.isStrongPassword(value, { minLength: 8, minLowercase: 1, minUppercase: 1, minSymbols: 1 })) {
						setErrorMessage(props.validation[props?.name as keyof AllFormValidations][validationName] || '');
					} else {
						setErrorMessage('');
					}
				}
			}
		}
	};

	return (
		<View style={[props?.parentStyles, styles.mb]}>
			{
				props.iconFlex !== undefined
				&&
				props.iconFlex === 'start'
				&&
				<Ionicons style={[props?.iconStyles, styles.mb]} iconName={props?.iconName} size={25} color="#000" />
			}
			<TextInput
				value={props.value}
				onChange={changeEvent}
				nativeID={props.name}
				{...props?.inputProps}
			/>
			{
				props.iconFlex !== undefined
				&&
				props.iconFlex === 'end'
				&&
				<Ionicons style={[props?.iconStyles, styles.mb]} iconName={props?.iconName} size={25} color="#000" />
			}
			<Text style={[props?.errorStyles, styles.mb]}>
				{
					errorMessage
				}
			</Text>
		</View>
	)
	
}

const styles = StyleSheet.create({
	mb: {
		marginBottom: 80
	}
})

export default TextBoxForState;
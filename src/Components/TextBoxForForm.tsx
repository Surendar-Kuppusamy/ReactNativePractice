import React, { useEffect, useState } from "react";
import { View, TextInput, SafeAreaView, StyleSheet, Text, TouchableHighlight, TextInputProps, NativeSyntheticEvent, TextInputChangeEventData, TextProps, StyleProp } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import validator from 'validator';
import { AllFormValidations, ValidationTypes } from '../Types/ValidationTypes';

//IconProps


interface TextInputCustomProps {
	defaultValue: string;
	name: string;
	label: string;
	setFormValues(name: string, value: string): void;
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

const TextBoxForForm: React.FC<TextInputCustomProps>	=	(props)	=> 	{

	const [errorMessage, setErrorMessage]	=	useState('');
	const [isDirty, setIsDirty]				=	useState(false);

	useEffect(() => {
		clearErrors(props?.clearError || '');
	}, [props?.clearError]);

	const clearErrors = (fieldName: string) => {
		if(props?.name === fieldName) {
			setErrorMessage('');
		}
	}


	useEffect(() => {
		if(props?.isFormSub) {
			//console.log("Name ===>"+ props?.name, "Value ===>"+ props?.defaultValue);
			validateValue(props?.defaultValue);
			props?.setIsFormSub(false);
		}
	},[props?.isFormSub]);

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

	const changeKeyEvent = (e: NativeSyntheticEvent<TextInputChangeEventData>):void => {
		validateValue(e.nativeEvent.text);
		let validation = props.validation;
		props?.setFormValues(props.name, e.nativeEvent.text);
	}

	return (
		<View style={[props?.parentStyles, styles.textField]}>
			{
				props.iconFlex !== undefined
				&&
				props.iconFlex === 'start'
				&&
				<Ionicons style={[props?.iconStyles, styles.mb]} iconName={props?.iconName} size={25} color="#000" />
			}
			<Text>
				{
					props?.label
				}
			</Text>
			<TextInput
				defaultValue={props.defaultValue}
				onChange={changeKeyEvent}
				nativeID={props.name}
				{...props?.inputProps}
				style={[props?.inputStyles, styles.textBox]}
			/>
			{
				props.iconFlex !== undefined
				&&
				props.iconFlex === 'end'
				&&
				<Ionicons style={[props?.iconStyles, styles.mb]} iconName={props?.iconName} size={25} color="#000" />
			}
			<Text style={[props?.errorStyles]}>
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
	},
	borderWhite: {
		borderStyle: "solid",
		borderColor: "#FFF"
	},
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
    }
})

export default TextBoxForForm;
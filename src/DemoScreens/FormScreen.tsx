import React, { useMemo, useState, FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, RefreshControl, StyleSheet, Text, View, ImageBackground, Button, SafeAreaView, FlatList, TextInput, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity, Alert, Modal, Pressable, AppStateEvent } from 'react-native';
import type { LoginProps } from '@root/src/Types/DefaultTypes';
import { CommonActions, useNavigation } from '@react-navigation/native';
import TextBoxForForm from '@root/src/Components/TextBoxForForm';
import { FormValidationObj, CustomValidationTypes, validateValues, AllFormValidations } from '@root/src/Types/ValidationTypes';
import { useAppSelector } from '@root/src/Hooks/hooks';
import Dropdown from './Dropdown';
import { USERS_LIST, USERSS } from '../Constants/GlobalConstants';
import { OptionDataType } from '../Types/DefaultTypes';






function FormScreen() {

    const navigation						=	useNavigation();

	const globalState 						=	useAppSelector(state => state.global);

    const [email, setEmail]					=	useState<string>('');
	const [errorMsg, setErrorMsg]			=	useState<string>('Please fill the form');
	const [validation, setValidation]		=	useState<AllFormValidations>(FormValidationObj);
	const [dirty, setDirty]					=	useState(false);
	const [isFormSub, setIsFormSub]			=	useState(false);
    const [password, setPassword] 			=	useState('');
    const [modalVisible, setModalVisible] 	=	useState(false);
	const [formValues, setFormValues]		=	useState<{ email: string; password: string;}>({ email, password });

    const changeEvent = (e: NativeSyntheticEvent<TextInputChangeEventData>):void => {
        setEmail(e.nativeEvent.text);
    }

	const changeFormValues	=	(name: string, value:string) => {
		setFormValues({ ...formValues, [name]: value })
	}

    const submitForm = (): void => {
		setIsFormSub(true);
		//const formValues 	=	{ email: email, password: password };
		validateValues(formValues, FormValidationObj).then((res: any) => {
			//console.log("Validation Error", res);
			if(res["status"] === 'success') {
				Alert.alert('Form Success', 'Form submitted');
			}
		})
    }

	const selectedItem	=	(item: OptionDataType) => {
		console.log("Selected Item", item);
	}

	React.useEffect(() => {
		console.log("On Load");
	},[]);

	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		console.log("On Load Refresh");
		setTimeout(() => {
			setRefreshing(false);
		}, 2000);
	}, []);

    return (
		<ScrollView
			refreshControl={
			<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
		>
        <View style={ styles.container } >
			<Text style={ styles.textWhite }>
				Login { globalState.value }
			</Text>
			<Dropdown label="Test" data={USERSS} onSelect={selectedItem} />
			{/* <TextBoxForForm
				defaultValue={""}
				name={"email"}
				setFormValues={changeFormValues}
				inputProps={{maxLength: 10, placeholder: "Email"}}
				parentStyles={[styles.borderWhite, styles.image]}
				inputStyles={[styles.borderWhite, styles.image]}
				errorStyles={[styles.borderWhite, styles.image]}
				iconStyles={[styles.borderWhite, styles.image]}
				iconName="location"
				iconFlex="start"
				errorMsg={errorMsg}
				setErrorMsg={setErrorMsg}
				dirty={dirty}
				setDirty={setDirty}
				isFormSub={isFormSub}
				setIsFormSub={setIsFormSub}
			/> */}
			<TextBoxForForm
				label="Email"
				defaultValue={formValues["email"]}
				name={"email"}
				setFormValues={changeFormValues}
				inputProps={{placeholder: "Email"}}
				setValidation={setValidation}
				validation={validation}
				isFormSub={isFormSub}
				setIsFormSub={setIsFormSub}
			/>
			<TextBoxForForm
				label="Password"
				defaultValue={formValues["password"]}
				name={"password"}
				setFormValues={changeFormValues}
				inputProps={{placeholder: "Password", secureTextEntry: true}}
				setValidation={setValidation}
				validation={validation}
				isFormSub={isFormSub}
				setIsFormSub={setIsFormSub}
			/>
			<TouchableOpacity
                style={ styles.btn }
                onPress={submitForm}
            >
                <Text>
                    Sign in
                </Text>
            </TouchableOpacity>
			<Text>
				{
					JSON.stringify(formValues)+
					errorMsg
				}
			</Text>
		</View>
		</ScrollView>
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
	},
	btn: {
        marginTop: 20,
        alignSelf: 'center',
        padding: 5,
        backgroundColor: '#f4511e',
        tintColor: '#FFF'
    },
})

export default FormScreen;
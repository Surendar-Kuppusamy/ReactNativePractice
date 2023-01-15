import { connectToDevTools } from "react-devtools-core";
import React, { useMemo, useEffect, useRef, useState, FC } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { AppState, StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList, DrawerParamList } from '@root/src/Types/DefaultTypes';
import { store } from './src/store';
import { LoadingContext } from '@root/src/Contexts/LoadingContext';
import HomeScreen from '@root/src/Screens/HomeScreen';
import AboutScreen from '@root/src/Screens/AboutScreen';
import UserListScreen from '@root/src/Screens/UsersList';
//import LoginScreen from '@root/src/Screens/LoginScreen';
import TabsScreen from '@root/src/Screens/TabsScreen';
import DrawerScreen from '@root/src/Screens/DrawerScreen';
//import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from '@root/src/DemoScreens/LoginScreen';
import WelcomeScreen from '@root/src/DemoScreens/WelcomeScreen';
import SignupScreen from '@root/src/DemoScreens/SignupScreen';
import ExperimentScreen from '@root/src/DemoScreens/ExperimentScreen';
import ExperimentTwoScreen from '@root/src/DemoScreens/ExperimentTwoScreen';
import RegisterScreen from '@root/src/DemoScreens/RegisterScreen';
import ProductListScreen from '@root/src/DemoScreens/ProductListScreen';
import FormScreen from '@root/src/DemoScreens/FormScreen';


const RootStack =	createNativeStackNavigator<RootStackParamList>();

if (__DEV__) {
  connectToDevTools({
    host: "localhost",
    port: 8097,
  });
}

function App() {

	const appState	=	useRef(AppState.currentState);
	const [appStateVisible, setAppStateVisible] = useState(appState.current);

	useEffect(() => {
		const subscription = AppState.addEventListener("change", nextAppState => {
		  if (
			appState.current.match(/inactive|background/) &&
			nextAppState === "active"
		  ) {
			console.log("App has come to the foreground!");
		  }
	
		  appState.current = nextAppState;
		  setAppStateVisible(appState.current);
		  console.log("AppState", appState.current);
		});
	
		return () => {
		  	subscription.remove();
		};
	}, []);

  	const [loading, setLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
		<Provider store={store}>
			<NavigationContainer>
				<RootStack.Navigator initialRouteName="Home">
					<RootStack.Screen
						name="Home"
						component={HomeScreen}
						options={{
						'title': 'My Home',
						'headerStyle': {
							backgroundColor: '#f4511e',
						},
						'headerTintColor': '#fff',
						'headerTitleStyle': {
							fontWeight: 'bold'
						},
						'headerTitleAlign': 'center'
						}}
					/>
					<RootStack.Screen
						name="Users"
						component={UserListScreen}
					/>
					<RootStack.Screen
						name="Login"
						component={LoginScreen}
						options={{
							'title': 'Login',
							'headerStyle': {
								backgroundColor: '#f4511e',
							},
							'headerTintColor': '#fff',
							'headerTitleStyle': {
								fontWeight: 'bold'
							},
							'headerTitleAlign': 'center',
							headerShown: false
						}}
					/>
					<RootStack.Screen
						name="About"
						component={AboutScreen}
						initialParams={{ id: 1, name: 'Test' }}
					/>
					<RootStack.Screen
						name="Tabs"
						component={TabsScreen}
					/>
					<RootStack.Screen
						name="Drawer"
						component={DrawerScreen}
					/>
					<RootStack.Screen
						name="Welcome"
						options={{ 'headerShown': false }}
						component={WelcomeScreen}
					/>
					<RootStack.Screen
						name="Signup"
						options={{ 'headerShown': false }}
						component={SignupScreen}
						initialParams={{ email: "surendar@gmail.com", name: "Surendar" }}
					/>
					<RootStack.Screen
						name="Experiment"
						options={{ 'headerShown': false }}
						component={ExperimentScreen}
					/>
					<RootStack.Screen
						name="Register"
						options={{ 'headerShown': false }}
						component={RegisterScreen}
					/>
					<RootStack.Screen
						name="ProductList"
						options={{ 'headerShown': false }}
						component={ProductListScreen}
					/>
					<RootStack.Screen
						name="ExperimentTwo"
						options={{ 'headerShown': false }}
						component={ExperimentTwoScreen}
					/>

					<RootStack.Screen
						name="Form"
						options={{ 'headerShown': false }}
						component={FormScreen}
					/>
				</RootStack.Navigator>
			</NavigationContainer>
		</Provider>
    </LoadingContext.Provider>
  );
}

export default App;
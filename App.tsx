import { connectToDevTools } from "react-devtools-core";
import React, { useMemo, useState, FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList, DrawerParamList } from '@root/src/Types/DefaultTypes';
import { LoadingContext } from '@root/src/Contexts/LoadingContext';
import HomeScreen from '@root/src/Screens/HomeScreen';
import AboutScreen from '@root/src/Screens/AboutScreen';
import UserListScreen from '@root/src/Screens/UsersList';
import LoginScreen from '@root/src/Screens/LoginScreen';
import TabsScreen from '@root/src/Screens/TabsScreen';
//import DrawerScreen from '@root/src/Screens/DrawerScreen';
//import { createDrawerNavigator } from '@react-navigation/drawer';

const RootStack =	createNativeStackNavigator<RootStackParamList>();

if (__DEV__) {
  connectToDevTools({
    host: "localhost",
    port: 8097,
  });
}

function App() {

  const [loading, setLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
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
						'headerTitleAlign': 'center'
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
				{/* <RootStack.Screen
					name="Drag"
					component={DrawerScreen}
				/> */}
			</RootStack.Navigator>
    	</NavigationContainer>
    </LoadingContext.Provider>
  );
}

export default App;
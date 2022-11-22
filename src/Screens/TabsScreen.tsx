import React, { useMemo, useState, FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, TabNavigationState  } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBarProps, BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { TabParamList } from '@root/src/Types/DefaultTypes';
import type { NativeStackScreenProps  } from '@react-navigation/native-stack';
import SignupScreen from '@root/src/Screens/Tabs/SignupScreen';
import TermsAndConditionScreen from '@root/src/Screens/Tabs/TermsAndConditionScreen';


const Tab = createBottomTabNavigator<TabParamList>();

function MyTabBar({ navigation }:BottomTabBarProps) {
    return (
        <View style={ { flexDirection:'row', justifyContent: 'space-evenly' } }>
            <Button
                title="Signup"
                onPress={() => {
                // Navigate using the `navigation` prop that you received
                navigation.navigate('Signup');
                }}
            />
            <Button
                title="Terms"
                onPress={() => {
                // Navigate using the `navigation` prop that you received
                navigation.navigate('TermsAndCondition');
                }}
            />
        </View>
    );
}

function TabsScreen() {
    const navigation = useNavigation();
    return (
      <Tab.Navigator initialRouteName="Signup" screenOptions={{ 'headerShown': false }} tabBar={props => <MyTabBar {...props} /> }>
        <Tab.Screen name="Signup" component={SignupScreen} />
        <Tab.Screen name="TermsAndCondition" component={TermsAndConditionScreen} />
      </Tab.Navigator>
    );
}

export default TabsScreen;
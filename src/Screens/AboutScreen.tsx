import React, { useMemo, useState, FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import type { RootStackParamList, AProps } from '@root/src/Types/DefaultTypes';
import { NavigationContainerProps, RouteProp, useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps  } from '@react-navigation/native-stack';

function AboutScreen(props: AProps) {
    const navigation = useNavigation();
    const { id, name } = props.route.params;
    /* const updateValue = () => {
      navigation.setOptions({ id: 55, name: 'Thenmozhi' });
    } */
    return (
      <View>
        <Text>About Screen</Text>
        <Text>ID: { id !== undefined && id }</Text>
        <Text>Name: { name !== undefined && name }</Text>

        {/* <TouchableOpacity
          onPress={updateValue}
        >
          <Text>Update Value</Text>
        </TouchableOpacity> */}
        <Button title="Go to Home" onPress={() => props.navigation.navigate('Home')} />
        <Button title="Go to Users" onPress={() => props.navigation.navigate('Users')} />
        <Button title="Go to Tabs" onPress={() => props.navigation.navigate('Tabs')} />
        <Button title="Go to Drawer" onPress={() => props.navigation.navigate('Drawer')} />
        <Button title="Go to First" onPress={() => props.navigation.popToTop()} />
      </View>
    );
}

export default AboutScreen;
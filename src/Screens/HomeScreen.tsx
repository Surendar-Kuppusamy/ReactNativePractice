import React, { useMemo, useState, FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList } from 'react-native';
import type { Props } from '@root/src/Types/DefaultTypes';

function HomeScreen(props: Props) {
    return (
      <SafeAreaView>
        <View>
          <Text>Home Screen...</Text>
          <Button title="Go to Login" onPress={() => props.navigation.navigate('Login')} />
          <Button title="Go to Welcome" onPress={() => props.navigation.navigate('Welcome')} />
          <Button title="Go to Experiment" onPress={() => props.navigation.navigate('Experiment')} />
          <Button title="Go to ExperimentTwo" onPress={() => props.navigation.navigate('ExperimentTwo')} />
          <Button title="Go to Register" onPress={() => props.navigation.navigate('Register')} />
          <Button title="Go to Product List" onPress={() => props.navigation.navigate('ProductList')} />
          <Button title="Go to Form" onPress={() => props.navigation.navigate('Form')} />
          <Button title="Go to Signup" onPress={() => props.navigation.navigate('Signup', { "email": "surendar@yopmail.com", "name": "Surendar" })} />
          <Button title="Go to About" onPress={() => props.navigation.navigate('About', { id: 10, name: 'Surendar' })} />
        </View>
      </SafeAreaView>
    );
}

export default HomeScreen;
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
          <Button title="Go to About" onPress={() => props.navigation.navigate('About', { id: 10, name: 'Surendar' })} />
        </View>
      </SafeAreaView>
    );
}

export default HomeScreen;
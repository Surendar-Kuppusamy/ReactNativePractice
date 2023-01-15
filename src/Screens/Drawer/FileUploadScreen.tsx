import React, { useMemo, useState, FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

function FileUploadScreen() {
  const navigation = useNavigation();
    return (
      <SafeAreaView>
        <View>
          <Text>File Upload</Text>
          <Button title="Go to Gallery" onPress={() => navigation.dispatch(
            CommonActions.navigate({
              name: 'Gallery',
              params: {}
            })
          )} />
        </View>
      </SafeAreaView>
    );
}

export default FileUploadScreen;
import React, { useMemo, useState, FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, TabNavigationState  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { DrawerParamList } from '@root/src/Types/DefaultTypes';

import FileUploadScreen from '@root/src/Screens/Drawer/FileUploadScreen';
import GalleryScreen from '@root/src/Screens/Drawer/GalleryScreen';

const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerScreen() {
    const navigation = useNavigation();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="FileUpload" component={FileUploadScreen} />
            <Drawer.Screen name="Gallery" component={GalleryScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerScreen;
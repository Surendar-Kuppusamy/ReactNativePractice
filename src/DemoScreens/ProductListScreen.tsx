import React, { useMemo, useState, FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, ImageBackground, Button, SafeAreaView, FlatList, TextInput, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity, Alert, Modal, Pressable, Image } from 'react-native';
import type { LoginProps } from '@root/src/Types/DefaultTypes';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { pStyle } from '../Styles/ProductStyles';
import { PRODUCTS } from '../Constants/GlobalConstants';

const image = require('../../assets/Demo/antona.png');


function ProductListScreen() {

    return (
		<SafeAreaView style={ pStyle.container }>
			<StatusBar
				animated={true}
				backgroundColor="#61dafb"
			/>
			<View style={ pStyle.searchBlock }>
				<Ionicons name="search" size={20} color="#000" />
				<TextInput
					style={ pStyle.input }
					placeholder='Search...'
					defaultValue=''
					placeholderTextColor="#000"
				/>
				<Ionicons style={ pStyle.rightIcon } name="add-circle" size={22} color="#000" />
			</View>

			<View style={ pStyle.productListBlock }>
				<Text style={ pStyle.resultCount }>
					FOUND 50 RESULT
				</Text>

				<FlatList
					style={ pStyle.productFlat }
					ItemSeparatorComponent={() => <View style={ pStyle.separator }></View>}
					data={PRODUCTS}
					numColumns={2}
					showsVerticalScrollIndicator={false}
					renderItem={({ item, index, separators }) => (
						<View style={ (index % 2 === 0) ? pStyle.evenProduct : pStyle.oddProduct } key={item.id}>
							<Image
								source={{uri: item.images[0] }}
								style={ pStyle.productImage }
							/>
							<Text style={ pStyle.productTitle } ellipsizeMode="tail" numberOfLines={1} >{ item.title }</Text>
							<Text style={ pStyle.productPrice }>${ item.price }</Text>
						</View>
					)}
				/>

			</View>
			
		</SafeAreaView>
    );
}


export default ProductListScreen;
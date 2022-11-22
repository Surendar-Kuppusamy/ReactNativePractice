import React, { useMemo, useState, FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import type { UProps } from '@root/src/Types/DefaultTypes';
import { USERSS } from '../../src/Constants/GlobalConstants';
import { USERSS as U } from '@root/src/Constants/GlobalConstants';



export const USERS: any  = [
    {
      no: '1',
      name: 'Surendar',
      email: 'surendar@yopmail.com',
      address: 'No. 16, Putthumarimman koil street, Ganesh Nagar, Puducherry-03'
    },
    {
      no: '2',
      name: 'Rajsekar',
      email: 'rajsekar@yopmail.com',
      address: 'No. 16, Putthumarimman koil street, Ganesh Nagar, Puducherry-03'
    },
    {
      no: '3',
      name: 'Ravikumar',
      email: 'ravikumar@yopmail.com',
      address: 'No. 16, Putthumarimman koil street, Ganesh Nagar, Puducherry-03'
    },
    {
      no: '4',
      name: 'Raja',
      email: 'raja@yopmail.com',
      address: 'No. 16, Putthumarimman koil street, Ganesh Nagar, Puducherry-03'
    },
    {
      no: '5',
      name: 'Arun',
      email: 'arun@yopmail.com',
      address: 'No. 16, Putthumarimman koil street, Ganesh Nagar, Puducherry-03'
    },
    {
      no: '5',
      name: 'Arun',
      email: 'arun@yopmail.com',
      address: 'No. 16, Putthumarimman koil street, Ganesh Nagar, Puducherry-03'
    },
    {
      no: '5',
      name: 'Arun',
      email: 'arun@yopmail.com',
      address: 'No. 16, Putthumarimman koil street, Ganesh Nagar, Puducherry-03'
    }
];

function UserListScreen(props: UProps) {
    const [users, setUsers] = useState(U);
    const userList  = useMemo(() => {
      return users;
    }, [users]);
  
    return (
        <View>
        <View style={{ flexDirection:'row' }}>
            <View style={{ padding: 10 }}>
            <Text>No.</Text>
            </View>
            <View style={{ padding: 10 }}>
            <Text>Name</Text>
            </View>
            <View style={{ padding: 10 }}>
            <Text>Email</Text>
            </View>
            <View style={{ padding: 10 }}>
            <Text>Address</Text>
            </View>
        </View>
        <FlatList
            ItemSeparatorComponent={() => <View></View>}
            data={userList}
            renderItem={({ item, index, separators }) => (
                <View style={{ flexDirection:'row' }}>
                    <Text>{ item.no }</Text>
                    <Text>{ item.name }</Text>
                    <Text>{ item.email }</Text>
                    <Text>{ item.address }</Text>
                </View>
            )}
            />
            <Button title="Home" onPress={() => props.navigation.navigate('About', { id: 5, name: 'Arun Kumar' })} />
      </View>
    );
}

export default UserListScreen;
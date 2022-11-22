import { NavigationContainer, NavigatorScreenParams, CompositeNavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps  } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined;
    About: { id: number, name: string };
    Users: undefined;
    Login: undefined;
    Tabs: undefined;
    Drawer: undefined;
    Drag: undefined;
}

export type TabParamList = {
    Signup: undefined;
    TermsAndCondition: undefined;
};

export type DrawerParamList = {
    FileUpload: undefined;
    Gallery: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Home', 'Users'>

export type AProps = NativeStackScreenProps<RootStackParamList, 'About', 'MyStack'>

export type UProps = NativeStackScreenProps<RootStackParamList, 'Users'>

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>

export type TabsProps = NativeStackScreenProps<RootStackParamList, 'Tabs'>


import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';


//Screens
import HomeScreen from '../screens/Home';
import TopFiveScreen from '../screens/TopFive';
import SearchScreen from '../screens/Search';
import MyAccountScreen from '../screens/MyAccount/MyAccount';

import RegisterScreen from '../screens/MyAccount/Register';


const homeScreenStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) =>({
            title: "Home"
        })
    },
});

const topFiveScreenStack = createStackNavigator({
    TopFive: {
        screen: TopFiveScreen,
        navigationOptions: ({ navigation }) =>({
            title: "Top 5 Restaurantes"
        })
    },
});

const searchScreenStack = createStackNavigator({
    Search: {
        screen: SearchScreen,
        navigationOptions: ({ navigation }) =>({
            title: "Buscar"
        })
    },
});

const myAccountScreenStack = createStackNavigator({
    MyAccount: {
        screen: MyAccountScreen,
        navigationOptions: ({ navigation }) =>({
            title: "Mi Cuenta"
        })
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Regresar"
        })
    }
});




const RootStack = createBottomTabNavigator ({
    Home: {
        screen: homeScreenStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel:"Inicio",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                name ='compass-outline' 
                type="material-community"
                size={22}
                color={tintColor} />
            )
        })
    },
    TopFive: {
        screen: topFiveScreenStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel:"Top 5",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                name ='star-outline' 
                type="material-community"
                size={22}
                color={tintColor} />
            )
        })
    },
    Search: {
        screen: searchScreenStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel:"Buscar",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                name ='magnify' 
                type="material-community"
                size={22}
                color={tintColor} />
            )
        })
    },
    MyAccount:{
        screen: myAccountScreenStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel:"Mi Cuenta",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                name ='home-outline' 
                type="material-community"
                size={22}
                color={tintColor} />
            )
        })
    }
},
 {
     initialRouteName: "MyAccount",
    tabBarOptions: {
        inactiveTintColor: "#646464",
        activeTintColor: "#00a680"
    }
 } 

);

export default createAppContainer(RootStack);
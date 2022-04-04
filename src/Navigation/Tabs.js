import * as React from 'react';
import Home from '../Screens/Home.js';
import SignInScreen from '../Screens/SignInScreen.js';
import SignUpScreen from '../Screens/SignUpScreen.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function UserTabNavigation() {

    return(

        <Tab.Navigator initialRouteName="SignIn"
        screenOptions={{
            "tabBarShowLabel": true,
            "tabBarStyle": [
                {
                padding: 20,
                position: "absolute",
                bottom: 25,
                right: 20,
                left: 20,
                elevation: 0,
                backgroundColor: "white",
                borderRadius: 15,
                height: 90,
                ...styles.shadow
            }
            ]
            }}>

        {/* <Tab.Screen name="Home" component={Home}
        options={{
            tabBarIcon: ({color, size}) => (
                <Entypo name="home" size={24} color="black" />)
        }}
        /> */}

        <Tab.Screen name="SignIn" component={SignInScreen}
        options={{
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="account-circle" size={40} color="black" />)
        }}
        />

        <Tab.Screen name="SignUp" component={SignUpScreen}
        options={{
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="account-edit" size={40} color="black" />)
        }}
        />

       


        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 3.5,
        shadowOpacity: 0.25,
    }
})


export default UserTabNavigation;
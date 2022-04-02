// import * as React from 'react';
// import Home from '../Screens/Home.js';
// import City from '../Screens/City.js';
// import Details from '../Screens/Details.js'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { StyleSheet } from 'react-native';
// import { Entypo } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// import MyStack from './Stack.js';

// const Tab = createBottomTabNavigator();

// function UserTabNavigation() {

//     return(

//         <Tab.Navigator initialRouteName="Home"
//         screenOptions={{
//             "tabBarShowLabel": true,
//             "tabBarStyle": [
//                 {
//                 position: "absolute",
//                 bottom: 25,
//                 right: 20,
//                 left: 20,
//                 elevation: 0,
//                 backgroundColor: "white",
//                 borderRadius: 15,
//                 height: 90,
//                 ...styles.shadow
//             }
//             ]
//             }}>

//         <Tab.Screen name="Home" component={Home}
//         options={{
//             tabBarIcon: ({color, size}) => (
//                 <Entypo name="home" size={24} color="black" />)
//         }}
//         />

//         <Tab.Screen name="City" component={City}
//         options={{
//             tabBarIcon: ({color, size}) => (
//                 <FontAwesome name="plane" size={24} color="black" />)
//         }}
//         />

//         <Tab.Screen name="Datails" component={MyStack}
//         options={{
//             tabBarIcon: ({color, size}) => (
//                 <FontAwesome name="plane" size={24} color="black" />)
//         }}
//         />

       


//         </Tab.Navigator>

//     );
// }

// const styles = StyleSheet.create({
//     shadow: {
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: 10 },
//         shadowRadius: 3.5,
//         shadowOpacity: 0.25,
//     }
// })


// export default UserTabNavigation;
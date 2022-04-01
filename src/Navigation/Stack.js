import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import City from '../Screens/City.js';
import Details from '../Screens/Details.js';
import Comments from '../Screens/Comments.js';

const Stack = createNativeStackNavigator();


export default function MyStack() {

  return (

    <Stack.Navigator initialRouteName="City"
    screenOptions={{ headerBackTitle: 'Black' }}
    >
      <Stack.Screen name="City" component={City} />
      <Stack.Screen name="Details" component={Details} />
      
    </Stack.Navigator>
  );
}



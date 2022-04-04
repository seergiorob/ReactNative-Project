import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import City from '../Screens/City.js';
import Details from '../Screens/Details.js';
import CommentScreen from '../Screens/CommentScreen.js';

const Stack = createNativeStackNavigator();


export default function PlaceStackNavigation() {

  return (

    <Stack.Navigator initialRouteName="Cities"
    screenOptions={{ headerBackTitle: 'Black' }}
    >
      <Stack.Screen name="Cities" component={City} 
      options={{ headerShown: false, }}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Comments" component={CommentScreen} />
    </Stack.Navigator>
  );
}



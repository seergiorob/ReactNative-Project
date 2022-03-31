import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import City from '../Screens/City.js';
import Details from '../Screens/Details.js';
import Comments from '../Screens/Comments.js';

const Stack = createStackNavigator();


export default function createStackNavigator() {

  return (

    <Stack.Navigator initialRouteName="City"
    screenOptions={{ headerBackTitle: 'Black' }}
    >
      <Stack.Screen name="City" component={City} />
      <Stack.Screen name="Details" component={Details} options={({ navigation, route }) => ({headerTitle: 'Details'
    })} />
      <Stack.Screen name="Comments" component={Comments} options={({ navigation, route }) => ({headerTitle: 'Comments'
    })} />
    </Stack.Navigator>
  );
}



import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../Screens/Home.js';
import City from '../Screens/City.js';
import PlaceStackNavigation from './Stack.js';
import UserTabsNavigation from './Tabs.js';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Cities" component={PlaceStackNavigation} />
      <Drawer.Screen name="SignIn" component={UserTabsNavigation} />
    </Drawer.Navigator>
  );
}
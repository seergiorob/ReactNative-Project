import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
// import Home from './src/Screens/Home.js'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import mainReducer from './src/redux/reducers/mainReducer.js'
import DrawerNavigator from './src/Navigation/Drawer'

export default function App() {

  const reduxStore = createStore(mainReducer, applyMiddleware(thunk))

  return (

    // <View style={styles.container}>
      <Provider store={reduxStore}>
        <NavigationContainer>
            <DrawerNavigator />      
      {/* <Home/> */}
      {/* <StatusBar style="auto" /> */}
        </NavigationContainer>
      </Provider>
    // </View>
  );
}

// const styles = StyleSheet.create({
  // container: {
    // marginTop: 50,
    // flex: 1,
    // backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  // }
// });

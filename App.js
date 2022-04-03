import { NavigationContainer } from '@react-navigation/native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import mainReducer from './src/redux/reducers/mainReducer.js'
import DrawerNavigator from './src/Navigation/Drawer'


function App() {


  const reduxStore = createStore(mainReducer, applyMiddleware(thunk))

  return (

      <Provider store={reduxStore}>
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
      </Provider>
  );
}

export default App;
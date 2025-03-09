import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/store';
import AppNavigator from './src/navigations/AppNavigator';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;

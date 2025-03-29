import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {persistor, store} from './src/redux/store';
import AppNavigator from './src/navigations/AppNavigator';
import {PaperProvider} from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <PaperProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

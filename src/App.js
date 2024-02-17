import React, { useEffect, useState } from 'react';
import RoutesContainer from './routes';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Appearance } from 'react-native';
import { store } from './redux/index';

export default function App() {

  useEffect(() => {
    Appearance.setColorScheme('light');
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RoutesContainer />
      </Provider>
    </SafeAreaProvider>
  );
}

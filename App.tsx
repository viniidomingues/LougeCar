import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes'
import { ActionSheetProvider, connectActionSheet } from '@expo/react-native-action-sheet';

function App() {
  return (
    <ActionSheetProvider>
      <Routes />
    </ActionSheetProvider>
  );
}


const ConnectedApp = connectActionSheet(App);

export default ConnectedApp;

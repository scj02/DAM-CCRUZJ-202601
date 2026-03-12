import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { CountScreen } from './components/screens/CountScreen/CountScreen';

const App = () => {
  return (

    <SafeAreaView style={{ flex: 1 }}>
      
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <CountScreen />
      
    </SafeAreaView>
  );
};

export default App;
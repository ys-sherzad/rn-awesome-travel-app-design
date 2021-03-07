/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import Content from './src/Content';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaProvider>
        <SafeAreaView style={styles.flexOne} edges={['right', 'left']}>
          <Content />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  flexOne: {
    flex: 1
  },

});

export default App;

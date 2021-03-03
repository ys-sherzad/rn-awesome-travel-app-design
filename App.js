/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  // View,
  // Text,
  StatusBar,
  View,
} from 'react-native';
import AnimatedTabs from './src/AnimatedTabs';
import List from './src/List';


// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <AnimatedTabs />
          <List />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
    // padding: 20
  }
});

export default App;

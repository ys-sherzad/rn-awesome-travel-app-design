import React from 'react';
import { StyleSheet, View } from 'react-native';
import IntroGetStarted from './components/IntroGetStarted';
import Home from './components/Home';

function Content(props) {
    return (
        <View style={styles.container}>
            <IntroGetStarted />
            <Home />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default Content;

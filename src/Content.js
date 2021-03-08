import React from 'react';
import { StyleSheet, View } from 'react-native';
import IntroGetStarted from './containers/IntroGetStarted.container';
import Home from './containers/Home.container';

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

import React from 'react';
import { StyleSheet, View } from 'react-native';
import IntroGetStarted from './components/IntroGetStarted';

function Content(props) {
    return (
        <View style={styles.container}>
            <IntroGetStarted />
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

/**
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import { WIDTH } from './utils';

const TABS_WIDTH = WIDTH * 0.7;
const TAB_WIDTH = (WIDTH * 0.7) / 3;
const LINE_WIDTH = (WIDTH * 0.7) / 3;

const tabs = [
    { id: 0, name: 'Profile' },
    { id: 1, name: 'Album' },
    { id: 2, name: 'Chat' },
];

function Animatedtabs(props) {
    const offset = useSharedValue(0);

    const [selectedTabId, setSelectedTabId] = useState(0);

    const animatedOffset = useAnimatedStyle(() => {
        return {
            transform: [{
                translateX: withTiming(offset.value, {
                    duration: 180,
                    easing: Easing.inOut(Easing.ease)
                })
            }]
        };
    });

    useEffect(() => {
        setAnimationValue();
    }, [selectedTabId]);

    const setAnimationValue = () => {
        let animateToValue;

        if (selectedTabId === 0) {
            animateToValue = 0;
        }
        if (selectedTabId === 1) {
            animateToValue = TAB_WIDTH;
        }
        if (selectedTabId === 2) {
            animateToValue = TAB_WIDTH * 2;
        }
        offset.value = animateToValue;
    };

    const renderTabs = () => tabs.map(tab => {
        const textStyle = selectedTabId === tab.id ? { fontWeight: 'bold' } : undefined;
        return (
            <TouchableWithoutFeedback key={tab.name} onPress={() => setSelectedTabId(tab.id)}>
                <View style={styles.tab}>
                    <Text style={[styles.tabName, textStyle]}>{tab.name}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    });

    return (

        <View style={styles.container}>

            {renderTabs()}

            <Animated.View style={[styles.line, animatedOffset]} />

        </View>




    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 15,
        alignSelf: 'center',
        width: TABS_WIDTH,
        height: 40,
        backgroundColor: '#ddd',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        overflow: 'hidden',
    },
    tab: {
        height: '100%',
        width: TAB_WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabName: {
    },
    line: {
        position: 'absolute',
        bottom: .2,
        height: 2,
        width: LINE_WIDTH,
        backgroundColor: 'black',
    }
});

export default Animatedtabs;

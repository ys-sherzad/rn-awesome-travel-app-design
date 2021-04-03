import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import { colors } from '../../utils';

const tabs = [
    { id: 0, name: 'Experiences' },
    { id: 1, name: 'Places' },
    { id: 2, name: 'Housings' },
];

const CONTAINER_WIDTH = 150 * 3;
const TAB_WIDTH = 150;

function AnimatedTabs({ selectedTabId, setSelectedTabId }) {
    const offset = useSharedValue(0);


    const animatedX = useAnimatedStyle(() => {
        return {
            transform: [{
                translateX: withTiming(offset.value, {
                    duration: 250,
                    easing: Easing.inOut(Easing.sin)
                })
            }]
        };
    });

    useEffect(() => {
        animate();
    }, [selectedTabId]);

    const animate = () => {
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

    const tabButton = (tab) => {
        const textStyle = tab.id === selectedTabId ?
            StyleSheet.flatten([styles.tabText, { color: colors.primary }])
            : styles.tabText;
        return (
            <TouchableWithoutFeedback onPress={() => setSelectedTabId(tab.id)}>
                <View style={styles.tabBtn}>
                    <Text style={textStyle}>{tab.name}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    const dotIndicator = () =>
        <Animated.View style={[styles.dotContainer, animatedX]}>
            <View style={styles.dot} />
        </Animated.View>;

    return (
        <View style={styles.container}>

            <View style={styles.tabsContainer}>
                {tabs.map((tab) => {
                    return (
                        <View key={tab.id}>
                            {tabButton(tab)}
                        </View>
                    );
                })}
            </View>

            {dotIndicator()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: CONTAINER_WIDTH,
        justifyContent: 'center',
        marginHorizontal: 35,
    },
    tabsContainer: {
        flexDirection: 'row',
    },
    tabBtn: {
        height: '100%',
        width: TAB_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        color: colors.inactive
    },
    dotContainer: {
        width: TAB_WIDTH,
        alignItems: 'center',
        marginTop: -12
    },
    dot: {
        height: 6,
        width: 6,
        backgroundColor: colors.primary,
        borderRadius: 10 / 2,
    }
});

export default AnimatedTabs;

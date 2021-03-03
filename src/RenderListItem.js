import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { WIDTH } from './utils';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, } from 'react-native-reanimated';

const ROW_WIDTH = WIDTH * .9;
const initialX = -(ROW_WIDTH + 20);

function Renderlistitem({ item, index }) {
    const offset = useSharedValue(initialX);
    const opacity = useSharedValue(0);

    useEffect(() => {
        offset.value = withTiming(0, {
            duration: (index * 80) + 400,
            easing: Easing.in(Easing.ease)
        });
        opacity.value = withTiming(1, {
            duration: (index * 120) + 400,
            easing: Easing.in(Easing.ease)
        });
    }, []);

    const animatedX = useAnimatedStyle(() => {
        return {
            transform: [{
                translateX: offset.value
            }]
        };
    });

    const animatedOpacity = useAnimatedStyle(() => {
        return {
            opacity: opacity.value
        };
    });

    return (
        <Animated.View style={[styles.container, animatedX, animatedOpacity]}>
            <Text>{'CARD -----------------> ' + index}</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: ROW_WIDTH,
        height: 100,
        backgroundColor: '#eee',
        borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: 20,
    }
});

export default Renderlistitem;

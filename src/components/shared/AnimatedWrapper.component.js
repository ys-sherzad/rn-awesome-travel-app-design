import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, withDelay, } from 'react-native-reanimated';

const opacityConfig = {
    duration: 1200,
    easing: Easing.inOut(Easing.cubic)
};

function AnimatedWrapper({ children, delayOpacity, delayY }) {
    const opacity = useSharedValue(0);
    const yValue = useSharedValue(-20);

    const animatedContainer = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [{
                translateY: yValue.value
            }]
        };
    });

    useEffect(() => {
        opacity.value = withDelay(delayOpacity ?? 700, withTiming(1, opacityConfig));
        yValue.value = withDelay(delayY ?? 500, withTiming(0, opacityConfig));
    }, []);

    return (
        <Animated.View style={[styles.container, animatedContainer]}>
            {children}
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
    }
});

export default AnimatedWrapper;
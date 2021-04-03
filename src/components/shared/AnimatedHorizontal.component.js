import React, { useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, withDelay } from 'react-native-reanimated';
import { WIDTH } from '../../utils';

const timingConfig = {
    duration: 1000,
    easing: Easing.inOut(Easing.cubic)
};

const delayTime = 1800;

function AnimatedHorizontal({ children, index }) {
    const offset = useSharedValue(WIDTH * .4);

    const animatedX = useAnimatedStyle(() => {
        const dur = (index * 80) + delayTime;
        return {
            transform: [{
                translateX: withDelay(dur,
                    withTiming(offset.value, timingConfig))
            }]
        };
    });

    useEffect(() => {
        offset.value = 0;
    }, []);

    return (
        <Animated.View style={[animatedX]}>
            {children}
        </Animated.View>
    );
}

export default AnimatedHorizontal;
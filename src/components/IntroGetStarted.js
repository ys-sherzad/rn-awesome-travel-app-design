import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { WIDTH } from '../utils';
import ImageContent from './ImageContent';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, } from 'react-native-reanimated';

const VIEW_WIDTH = WIDTH * 0.6;

function IntroGetStarted(props) {
    const width = useSharedValue(0);
    const opacity = useSharedValue(0.7);

    const animatedWidth = useAnimatedStyle(() => {
        return {
            width: width.value
        };
    });

    const animatedImageOpacity = useAnimatedStyle(() => {
        return {
            opacity: opacity.value
        };
    });

    useEffect(() => {
        width.value = withTiming(VIEW_WIDTH, {
            duration: 1400,
            easing: Easing.inOut(Easing.sin)
        });
        opacity.value = withTiming(0.3, {
            duration: 1900,
            easing: Easing.inOut(Easing.quad)
        });
    }, []);

    return (
        <Animated.View style={[styles.container, animatedWidth]}>
            <ImageBackground
                source={require('../../assets/bamyan.jpg')}
                style={styles.bgImage}
                imageStyle={styles.imgStyle}>
                <ImageContent />
                <Animated.View style={[styles.overlay, animatedImageOpacity]} />
            </ImageBackground>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
    },
    imgStyle: {
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
    },
    overlay: {
        position: 'absolute',
        zIndex: 1,
        ...StyleSheet.absoluteFill,
        backgroundColor: 'black',
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
    }
});

export default IntroGetStarted;

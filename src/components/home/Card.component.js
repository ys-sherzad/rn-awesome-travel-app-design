import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, withDelay } from 'react-native-reanimated';
import { WIDTH } from '../../utils';

const gradientColors = ['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.15)', 'rgba(0,0,0,0.6)'];


function Card({ item, index }) {
    const { title, location, image } = item;

    const offset = useSharedValue(WIDTH * .4);

    const timingConfig = {
        duration: 1000,
        easing: Easing.inOut(Easing.cubic)
    };

    const animatedX = useAnimatedStyle(() => {
        const dur = (index * 80) + 2300;
        return {
            transform: [{
                translateX: withDelay(dur,
                    withTiming(offset.value, timingConfig))
            }]
        };
    });

    useEffect(() => {
        // animate();
        offset.value = 0;
    }, []);

    return (
        <Animated.View style={[styles.container, animatedX]}>

            <Image source={require('../../../assets/image2.jpg')} style={styles.bgImage} />

            <LinearGradient colors={gradientColors} style={styles.gradientLayer} />

            <View style={styles.textContent}>
                <Text style={styles.titleText}>{title}</Text>


                <View style={styles.locationContainer}>
                    <Feather name='map-pin' size={18} color='#fff' />
                    <Text style={styles.locationText}>{location}</Text>
                </View>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 260,
        height: 360,
        borderRadius: 10,
        overflow: 'hidden',
        zIndex: 2
    },
    bgImage: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        zIndex: 1
    },
    gradientLayer: {
        ...StyleSheet.absoluteFill,
        zIndex: 2
    },
    textContent: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 26,
        marginLeft: 20,
        zIndex: 3,
    },
    titleText: {
        fontSize: 18,
        fontFamily: 'Montserrat-Bold',
        color: '#fff'
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    locationText: {
        fontSize: 16,
        fontFamily: 'Montserrat-Medium',
        color: '#fff',
        marginLeft: 7
    }
});

export default Card;

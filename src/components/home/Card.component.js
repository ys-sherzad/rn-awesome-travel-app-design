import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import AnimatedHorizontal from '../shared/AnimatedHorizontal.component';

const gradientColors = [
    'rgba(0,0,0,0.0)',
    'rgba(0,0,0,0.0)',
    'rgba(0,0,0,0.8)'
];

function Card({ item, index }) {
    const { title, location, image } = item;

    return (
        <AnimatedHorizontal {...{ index }}>

            <View style={styles.container}>
                <Image source={image} style={styles.bgImage} />

                <LinearGradient colors={gradientColors} style={styles.gradientLayer} />

                <View style={styles.textContent}>
                    <Text style={styles.titleText}>{title}</Text>

                    <View style={styles.locationContainer}>
                        <Feather name='map-pin' size={13} color='#fff' />
                        <Text style={styles.locationText}>{location}</Text>
                    </View>
                </View>
            </View>

        </AnimatedHorizontal>
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
        left: 0,
        right: 0,
        marginBottom: 26,
        marginHorizontal: 20,
        zIndex: 3,
    },
    titleText: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: '#fff'
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    locationText: {
        fontSize: 13,
        fontFamily: 'Montserrat-Medium',
        color: '#fff',
        marginLeft: 7
    }
});

export default Card;

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { colors } from '../../utils';

function Avatar(props) {
    return (
        <View>
            <Image source={require('../../../assets/profileImg.jpeg')} style={styles.img} />

            <View style={styles.dotContainer}>
                <View style={styles.dot} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        height: 48,
        width: 48,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    dotContainer: {
        height: 18,
        width: 18,
        borderRadius: 20 / 2,
        backgroundColor: '#fff',
        position: 'absolute',
        right: -5,
        top: -5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 20 / 2,
        backgroundColor: colors.primary,
    }
});

export default Avatar;

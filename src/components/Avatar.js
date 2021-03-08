import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function Avatar(props) {
    return (
        <View>
            <Image source={require('../../assets/profile.jpeg')} style={styles.img} />

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
        backgroundColor: '#F75D36',
        // position: 'absolute',
        // right: 0
    }
});

export default Avatar;

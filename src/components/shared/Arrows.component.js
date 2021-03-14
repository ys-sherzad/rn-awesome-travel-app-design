import React from 'react';
import { StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

function Arrows({
    leftArrowColor,
    rightArrowColor,
    size
}) {
    return (
        <View style={styles.container}>
            <Feather
                name='chevron-left'
                size={size ?? 22}
                color={leftArrowColor}
            />
            <View style={styles.separator} />
            <Feather
                name='chevron-right'
                size={size ?? 22}
                color={rightArrowColor}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    separator: {
        width: 16,
    },
});

export default Arrows;

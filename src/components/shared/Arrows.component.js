import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

function Arrows({
    leftArrowColor,
    rightArrowColor,
    size,
    onLeftArrowPress,
    onRightArrowPress
}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onLeftArrowPress}>
                <Feather
                    name='chevron-left'
                    size={size ?? 22}
                    color={leftArrowColor}
                />
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity onPress={onRightArrowPress}>
                <Feather
                    name='chevron-right'
                    size={size ?? 22}
                    color={rightArrowColor}
                />
            </TouchableOpacity>
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

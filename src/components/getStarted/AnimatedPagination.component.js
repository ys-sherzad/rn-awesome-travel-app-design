import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Arrows from '../shared/Arrows.component';

function AnimatedPagination(props) {
    const [count, setCount] = useState(1);

    const getLineWidth = () => (100 * (count / 3));

    const renderAnimatedLine = () =>
        <View style={styles.lineContainer}>
            <View style={[styles.innerLine, { width: `${getLineWidth()}%` }]} />
            <View style={styles.lineBackground} />
        </View>;

    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                <Text style={styles.text}>01</Text>
                {renderAnimatedLine()}
                <Text style={styles.text}>03</Text>
            </View>
            <View style={styles.separator} />
            <Arrows leftArrowColor='#51504E' rightArrowColor='#fff' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
    },
    slider: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Montserrat-SemiBold'
    },
    lineContainer: {
        height: 2,
        width: 200,
        marginHorizontal: 20,
        borderRadius: 50,
        overflow: 'hidden',
    },
    innerLine: {
        position: 'absolute',
        height: '100%',
        backgroundColor: '#fff',
        zIndex: 10,
    },
    lineBackground: {
        position: 'absolute',
        ...StyleSheet.absoluteFill,
        backgroundColor: '#51504E',
        zIndex: 2,
    },
    separator: {
        width: 30
    },


});

export default AnimatedPagination;

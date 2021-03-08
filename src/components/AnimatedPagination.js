import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

function AnimatedPagination(props) {
    const [count, setCount] = useState(1);

    const getLineWidth = () => (100 * (count / 3));

    const renderAnimatedLine = () =>
        <View style={styles.lineContainer}>
            <View style={[styles.innerLine, { width: `${getLineWidth()}%` }]} />
            <View style={styles.lineBackground} />
        </View>;

    const renderArrows = () =>
        <View style={styles.chevronsContainer}>
            <Feather
                name='chevron-left'
                size={22}
                color='#51504E'
            />
            <View style={styles.separator2} />
            <Feather
                name='chevron-right'
                size={22}
                color='#fff'
            />
        </View>;

    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                <Text style={styles.text}>01</Text>
                {renderAnimatedLine()}
                <Text style={styles.text}>03</Text>
            </View>
            <View style={styles.separator} />
            {renderArrows()}
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
    separator2: {
        width: 20,
    },
    chevronsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default AnimatedPagination;

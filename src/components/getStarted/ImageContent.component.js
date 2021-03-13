import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Strings from '../../strings';
import { colors } from '../../utils';
import AnimatedWrapper from '../shared/AnimatedWrapper.component';
import AnimatedPagination from './AnimatedPagination.component';

function Imagecontent(props) {

    const renderButton = () =>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.getStarted}>{Strings.getStarted}</Text>
        </TouchableOpacity>;

    const renderFooter = () =>
        // <View style={{ flex: 1 }}>
        <AnimatedPagination />;
    // </View>;



    const renderContent = () =>
        <>
            <AnimatedWrapper delayOpacity={800} delayY={600}>
                <Text style={styles.mainText}>{Strings.imageContentTitle}</Text>
            </AnimatedWrapper>

            <View style={styles.separator} />

            <AnimatedWrapper delayOpacity={1000} delayY={800}>
                <Text style={styles.subText}>{Strings.imageContentSubTitle}</Text>
            </AnimatedWrapper>

            <View style={styles.separator2} />

            <AnimatedWrapper delayOpacity={1200} delayY={1000}>
                {renderButton()}
            </AnimatedWrapper>
        </>;

    return (
        <View style={styles.container}>
            <AnimatedWrapper>
                <Text style={styles.headerTitle}>{Strings.imageHeaderTitle}</Text>
            </AnimatedWrapper>
            <View style={styles.flexOne} />

            {renderContent()}

            <View style={styles.flexOne} />
            <AnimatedWrapper delayOpacity={1400} delayY={1200}>
                {renderFooter()}
            </AnimatedWrapper>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 10,
        padding: 60,
    },
    flexOne: {
        flex: 1,
    },
    headerTitle: {
        fontSize: 23,
        fontWeight: '600',
        color: '#fff',
        fontFamily: 'Montserrat-Bold',
        letterSpacing: 3
    },
    mainText: {
        fontSize: 40,
        color: '#fff',
        fontFamily: 'Montserrat-SemiBold',
        letterSpacing: 1.5
    },
    subText: {
        fontSize: 14,
        color: '#fff',
        fontFamily: 'Montserrat-SemiBold',
        letterSpacing: 1.5,
        lineHeight: 24
    },
    separator: {
        height: 18
    },
    separator2: {
        height: 36
    },
    btn: {
        height: 60,
        width: 280,
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    getStarted: {
        fontSize: 17,
        color: '#fff',
        fontFamily: 'Montserrat-SemiBold'
    },
});

export default Imagecontent;
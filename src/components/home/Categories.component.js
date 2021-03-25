import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Strings from '../../strings';
import { colors } from '../../utils';

function Categories(props) {

    const renderHeader = () =>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{Strings.adventurous_mood}</Text>
            <Text style={styles.showAll}>{Strings.show_all}</Text>
        </View>;

    return (
        <View style={styles.container}>
            {renderHeader()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 46
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontSize: 22,
        fontFamily: 'Montserrat-SemiBold'
    },
    showAll: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: colors.iconInactive
    }
});

export default Categories;
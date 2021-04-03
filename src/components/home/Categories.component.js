import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import Strings from '../../strings';
import { colors } from '../../utils';
import AnimatedHorizontal from '../shared/AnimatedHorizontal.component';

const cats = [
    { name: 'cycling', img: require('../../../assets/bicycle-rider.png') },
    { name: 'swimming', img: require('../../../assets/swimming.png') },
    { name: 'skiing', img: require('../../../assets/ski.png') },
    { name: 'hiking', img: require('../../../assets/traveler.png') },
];

function Categories({ }) {

    const renderHeader = () => (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{Strings.adventurous_mood}</Text>
            <Text style={styles.showAll}>{Strings.show_all}</Text>
        </View>);

    const categoryItems = cats.map((cat, index) => (
        <AnimatedHorizontal key={cat.name} {...{ index }}>
            <View style={styles.categoryBtn}>
                <Image source={cat.img} style={styles.catImage} />
                <View style={{ height: 14 }} />
                <Text style={styles.categoryText}>{cat.name.toUpperCase()}</Text>
            </View>
        </AnimatedHorizontal>
    ));

    const renderCategories = () => (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
        >
            {categoryItems}
        </ScrollView>
    );

    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderCategories()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    header: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: 46
    },
    headerTitle: {
        fontSize: 22,
        fontFamily: 'Montserrat-SemiBold'
    },
    showAll: {
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: colors.iconInactive
    },
    categoriesContainer: {
        paddingHorizontal: 46,
        marginTop: 16
    },
    categoryBtn: {
        height: 120,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    },
    catImage: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
    },
    categoryText: {
        fontSize: 13,
        color: colors.iconInactive,
        fontFamily: 'Montserrat-Medium'
    }
});

export default Categories;
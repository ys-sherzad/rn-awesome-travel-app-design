import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Card from './Card.component';
import * as FakeData from '../../fake_data';
import { colors, PIXEL_RATIO } from '../../utils';
import Arrows from '../shared/Arrows.component';

function Scrollablecards(props) {

    const renderItem = ({ item, index }) =>
        <Card {...{ item }} {...{ index }} />;

    const keyExtractor = (_, i) => `${i}`;

    const ItemSeparatorComponent = () => <View style={styles.cardSeparator} />;

    console.log({ PIXEL_RATIO });

    return (
        <View>
            <FlatList
                horizontal
                data={FakeData.data}
                {...{ renderItem }}
                {...{ keyExtractor }}
                {...{ ItemSeparatorComponent }}
                contentContainerStyle={styles.flatlistContentContainer}
                showsHorizontalScrollIndicator={false}
            />

            <View style={styles.arrowsContainer}>
                <Arrows
                    leftArrowColor={colors.iconInactive}
                    rightArrowColor={colors.iconActive}
                    size={26}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    flatlistContentContainer: {
        paddingHorizontal: 46
    },
    cardSeparator: {
        width: 14
    },
    arrowsContainer: {
        marginTop: 20,
        paddingHorizontal: 46
    }
});

export default Scrollablecards;

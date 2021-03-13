import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Card from './Card.component';
import * as FakeData from '../../fake_data';

function Scrollablecards(props) {

    const renderItem = ({ item }) =>
        <Card {...{ item }} />;

    const keyExtractor = (_, i) => `${i}`;

    const ItemSeparatorComponent = () => <View style={styles.cardSeparator} />;

    console.log({ FakeData });

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
        </View>
    );
}

const styles = StyleSheet.create({
    flatlistContentContainer: {
        paddingHorizontal: 46
    },
    cardSeparator: {
        width: 14
    }
});

export default Scrollablecards;

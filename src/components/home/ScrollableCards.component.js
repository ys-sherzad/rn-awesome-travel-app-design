import React, { useEffect, useRef } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Card from './Card.component';
import * as FakeData from '../../fake_data';

function Scrollablecards({ selectedTabId }) {
    const firstRender = useRef(true);
    const flatListRef = useRef();

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        if (!flatListRef.current) return;
        flatListRef.current.scrollToIndex({
            animated: true,
            index: getIndexToScroll()
        });
    }, [selectedTabId]);

    const getIndexToScroll = () => {
        if (selectedTabId === 0) return 0;
        if (selectedTabId === 1) return 2;
        return 4;
    };

    const renderItem = ({ item, index }) =>
        <Card {...{ item }} {...{ index }} />;

    const keyExtractor = (_, i) => `${i}`;

    const ItemSeparatorComponent = () => <View style={styles.cardSeparator} />;

    const getItemLayout = (_, index) => (
        { length: 260, offset: (260 + 14) * index, index }
    );

    return (
        <View>
            <FlatList
                ref={flatListRef}
                horizontal
                data={FakeData.data}
                {...{ renderItem }}
                {...{ keyExtractor }}
                {...{ ItemSeparatorComponent }}
                contentContainerStyle={styles.flatlistContentContainer}
                showsHorizontalScrollIndicator={false}
                initialNumToRender={2}
                {...{ getItemLayout }}
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
    },
});

export default Scrollablecards;

import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Renderlistitem from './RenderListItem';

function List(props) {

    const renderItem = ({ item, index }) => (<Renderlistitem {...{ item }} {...{ index }} />);

    const keyExtractor = (_, index) => `${index}`;

    const ItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

    return (
        <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0]}
            {...{ renderItem }}
            {...{ keyExtractor }}
            {...{ ItemSeparatorComponent }}
            contentContainerStyle={styles.contentStyle}
        />
    );
}

const styles = StyleSheet.create({
    contentStyle: {
        paddingTop: 15,
        paddingBottom: 20,
        alignItems: 'center'
    },
    itemSeparator: {
        height: 12
    }
});

export default List;


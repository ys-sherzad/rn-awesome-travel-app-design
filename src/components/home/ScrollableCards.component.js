import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Card from './Card.component';
import * as FakeData from '../../fake_data';
import { colors, PIXEL_RATIO } from '../../utils';
import Arrows from '../shared/Arrows.component';

function Scrollablecards(props) {
    const flatListRef = useRef();
    const [animatedCurrentIndex, setAnimatedCurrentIndex] = useState(0);

    const renderItem = ({ item, index }) =>
        <Card {...{ item }} {...{ index }} />;

    const keyExtractor = (_, i) => `${i}`;

    const ItemSeparatorComponent = () => <View style={styles.cardSeparator} />;

    const onLeftArrowPress = useCallback(() => {
        console.log('left pressed');
    }, []);

    const onRightArrowPress = () => {

        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({
                animated: true,
                index: 4
            });
        }
    };

    // const getIndexToAnimate = () => {
    //     const dataLength = FakeData.data.length;

    // }

    getItemLayout = (data, index) => (
        { length: 260, offset: 260 * index, index }
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

            <View style={styles.arrowsContainer}>
                <Arrows
                    {...{ onLeftArrowPress }}
                    {...{ onRightArrowPress }}
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

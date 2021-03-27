import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Card from './Card.component';
import * as FakeData from '../../fake_data';
import { colors } from '../../utils';
import Arrows from '../shared/Arrows.component';

const numOftItemsToScroll = 2;
const numOfTotalItems = FakeData.data.length;

function Scrollablecards(props) {
    const flatListRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(1);

    const renderItem = ({ item, index }) =>
        <Card {...{ item }} {...{ index }} />;

    const keyExtractor = (_, i) => `${i}`;

    const ItemSeparatorComponent = () => <View style={styles.cardSeparator} />;

    const onLeftArrowPress = useCallback(() => {
        console.log('left pressed');
    }, []);

    console.log({ currentIndex });


    const onRightArrowPress = () => {
        const scrollToIndex = currentIndex * numOftItemsToScroll;
        if (scrollToIndex > numOfTotalItems) return;
        console.log({ scrollToIndex });
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({
                animated: true,
                index: scrollToIndex
            });
            setCurrentIndex(scrollToIndex);
        }
    };

    // const getIndexToAnimate = () => {
    //     const dataLength = FakeData.data.length;

    // }

    getItemLayout = (data, index) => (
        { length: 260, offset: (260 + 14) * index, index }
    );

    onMomentumScrollEnd = (event) => {
        console.log({ event });
    };

    onScrollEndDrag = (event) => {
        console.log({ event });
    };

    return (
        <View>
            <FlatList
                ref={flatListRef}
                horizontal
                // pagingEnabled
                data={FakeData.data}
                {...{ renderItem }}
                {...{ keyExtractor }}
                {...{ ItemSeparatorComponent }}
                contentContainerStyle={styles.flatlistContentContainer}
                showsHorizontalScrollIndicator={false}
                initialNumToRender={2}
                {...{ getItemLayout }}
            // {...{ onMomentumScrollEnd }}
            // {...{ onScrollEndDrag }}
            />

            {/* <View style={styles.arrowsContainer}>
                <Arrows
                    {...{ onLeftArrowPress }}
                    {...{ onRightArrowPress }}
                    leftArrowColor={colors.iconInactive}
                    rightArrowColor={colors.iconActive}
                    size={26}
                />
            </View> */}
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

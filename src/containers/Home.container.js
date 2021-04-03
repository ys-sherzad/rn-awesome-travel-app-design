import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Avatar from '../components/shared/Avatar.component';
import Feather from 'react-native-vector-icons/Feather';
import AnimatedTabs from '../components/home/AnimatedTabs.component';
import { colors } from '../utils';
import Scrollablecards from '../components/home/ScrollableCards.component';
import Strings from '../strings';
import Categories from '../components/home/Categories.component';
import AnimatedWrapper from '../components/shared/AnimatedWrapper.component';

function Home({ }) {
    const [selectedTabId, setSelectedTabId] = useState(0);

    const renderHeader = () =>
        <AnimatedWrapper>
            <View style={styles.header}>
                <View>
                    <View style={styles.menuLine1} />
                    <View style={styles.separator8} />
                    <View style={styles.menuLine2} />
                </View>
                <View style={styles.flexOne} />
                <View style={styles.headerRight}>
                    <Text style={styles.menuTabText}>{Strings.discover}</Text>
                    <Text style={styles.menuTabText}>{Strings.blog}</Text>
                    <Avatar />
                </View>
            </View>
        </AnimatedWrapper>;

    const renderSearchInput = () =>
        <AnimatedWrapper delayOpacity={800} delayY={600}>
            <View style={{ paddingHorizontal: 45 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather
                        name='search'
                        size={22}
                        color='#0A0A0A'
                    />
                    <View style={{ width: 12 }} />
                    <Text style={styles.searchText}>{Strings.search}</Text>
                </View>
                <View style={styles.inputBottomLine} />
            </View>
        </AnimatedWrapper>;

    const renderTitle = () =>
        <AnimatedWrapper delayOpacity={1000} delayY={800}>
            <Text style={styles.title}>{Strings.discover}</Text>
        </AnimatedWrapper>;

    const renderCards = () =>
        <View>
            <AnimatedWrapper delayOpacity={1200} delayY={1000}>
                <AnimatedTabs
                    {...{ selectedTabId }}
                    {...{ setSelectedTabId }}
                />
            </AnimatedWrapper>

            <View style={styles.separator20} />

            <AnimatedWrapper delayOpacity={1400} delayY={1200}>
                <Scrollablecards
                    {...{ selectedTabId }}
                />
            </AnimatedWrapper>
        </View>;


    const renderCategories = () =>
        <AnimatedWrapper delayOpacity={1600} delayY={1400}>
            <Categories />
        </AnimatedWrapper>;

    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderSearchInput()}
            {renderTitle()}
            {renderCards()}
            {renderCategories()}
            <View style={styles.separator10} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        marginVertical: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        paddingHorizontal: 45
    },
    headerRight: {
        width: '57%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flexOne: {
        flex: 1
    },
    menuTabText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: '#404040'
    },
    menuLine1: {
        height: 3,
        width: 40,
        backgroundColor: '#404040',
        borderRadius: 20
    },
    menuLine2: {
        height: 3,
        width: 28,
        backgroundColor: '#404040',
        borderRadius: 20
    },
    searchText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        color: colors.inactive
    },
    inputBottomLine: {
        height: 2,
        backgroundColor: colors.border,
        marginTop: 12
    },
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 34,
        paddingHorizontal: 45
    },
    separator8: {
        height: 8
    },
    separator10: {
        height: 10
    },
    separator20: {
        height: 20
    },
});

export default Home;

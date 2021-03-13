import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Avatar from '../components/shared/Avatar.component';
import Feather from 'react-native-vector-icons/Feather';

function Home(props) {

    const renderHeader = () =>
        <View style={styles.header}>
            <View>
                <View style={styles.menuLine1} />
                <View style={{ height: 8 }} />
                <View style={styles.menuLine2} />
            </View>
            <View style={styles.flexOne} />
            <View style={styles.headerRight}>
                <Text style={styles.menuTabText}>Discover</Text>
                <Text style={styles.menuTabText}>Blog</Text>
                <Avatar />
            </View>
        </View>;

    const renderSearchInput = () =>
        <View style={{ paddingHorizontal: 45 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Feather
                    name='search'
                    size={22}
                    color='#0A0A0A'
                />
                <View style={{ width: 12 }} />
                <Text style={styles.searchText}>Search</Text>
            </View>
            <View style={styles.inputBottomLine} />
        </View>;

    const renderTitle = () =>
        <View style={{ paddingHorizontal: 45 }}>
            <Text style={styles.title}>Discover</Text>
        </View>;

    return (
        <View style={styles.container}>
            {renderHeader()}
            <View style={{ height: 50 }} />
            {renderSearchInput()}
            <View style={{ height: 50 }} />
            {renderTitle()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        // backgroundColor: 'yellow',
        marginTop: 30,
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
        color: '#CBCBCB'
    },
    inputBottomLine: {
        height: 2,
        backgroundColor: '#F8F6F7',
        marginTop: 12
    },
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 34
    }
});

export default Home;
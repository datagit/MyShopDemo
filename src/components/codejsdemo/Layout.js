/**
 * Created by datdao on 6/18/17.
 */
import React, {Component} from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

export default class Layout extends Component {

    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.ovuong}></View>
                <View style={styles.ovuong}></View>
                <View style={styles.ovuong}></View>
                <View style={styles.ovuong}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'red',
        flex: 1,
        flexDirection: "row"
    },
    ovuong: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
        borderWidth: 1
    }
});

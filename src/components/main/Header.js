/**
 * Created by datdao on 6/20/17.
 */
import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Dimensions
} from 'react-native';

import menuIcon from '../../images/icons/ic_menu.png';
import logoIcon from '../../images/icons/ic_logo.png';

const {height, width} = Dimensions.get('window');
export default class Header extends Component {
    render() {

        const {text, icon, wrapper, row, textInput} = styles;
        return (
        <View style={{height: height/8, backgroundColor: '#34B089', padding: 10, justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                <TouchableOpacity onPress={
                    this.props.openFunc
                }>
                    <Image source={menuIcon} style={icon}/>
                </TouchableOpacity>

                <Text style={text}>text</Text>
                <Image source={logoIcon} style={icon}/>
            </View>
            <TextInput style={textInput}/>
        </View>

        );
    }
}

const styles = StyleSheet.create({
    wrapper: {backgroundColor: '#31ff0f'},
    row: {flexDirection: 'row'},
    icon: {width: 25, height: 25},
    text: {color: '#000000'},
    textInput: {height: height/15, backgroundColor: '#FFFFFF', marginTop: 10, marginBottom: 10},
});
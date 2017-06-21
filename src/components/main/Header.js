/**
 * Created by datdao on 6/20/17.
 */
import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, Image, TextInput, StyleSheet
} from 'react-native';

import menuIcon from '../../images/icons/ic_menu.png';
import logoIcon from '../../images/icons/ic_logo.png';

export default class Header extends Component {
    render() {
        const {text, icon, wrapper, row} = styles;
        return (
            <View>
                <View style={{height: 100, backgroundColor: '#31ff0f'}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <TouchableOpacity onPress={
                            this.props.openFunc
                        }>
                            <Image source={menuIcon} style={icon}/>
                        </TouchableOpacity>

                        <Text style={text}>text</Text>
                        <Image source={logoIcon} style={icon}/>
                    </View>
                    <View>
                        <TextInput />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {backgroundColor: '#31ff0f'},
    row: {flexDirection: 'row'},
    icon: {width: 40, height: 40},
    text: {color: '#ffffff', flex: 1},
});
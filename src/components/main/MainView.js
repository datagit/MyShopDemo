/**
 * Created by datdao on 6/20/17.
 */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity
} from 'react-native';


export default class MainView extends Component {

    render(){
        return(
            <View style={{flex:1, backgroundColor: 'red'}}>
                <Text>MainView</Text>
                <TouchableOpacity onPress={
                    this.props.onOpen
                }>
                    <Text>open</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

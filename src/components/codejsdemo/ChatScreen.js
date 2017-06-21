/**
 * Created by datdao on 6/19/17.
 */
// step1: import
import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// step2: declare class component with export default class
export default class ChatScreen extends Component {
    //options for navigation
    static navigationOptions = {
        title: "Welcome Chat Screen!"
    };

    render(){
        //object for navigation
        const {params} = this.props.navigation.state;
        console.log(this.props);
        return(
            <View>
                <Text>this is a chat screen.</Text>
                <Text>chat with {params.user}</Text>
            </View>
        );
    }
}
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
export default class HomeScreen extends Component {
    //options for navigation
    static navigationOptions = {
        title: "Welcome Home Screen!"
    };

    render(){
        //object for navigation
        const {navigate} = this.props.navigation;
        console.log(navigate);
        return(
            <View>
                <Text>this is a home screen.</Text>
                <Button
                    title="a button"
                    onPress={()=> navigate('Chat', {user: "DatDao"})}
                />
            </View>
        );
    }
}
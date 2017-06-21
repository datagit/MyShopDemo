/**
 * Created by datdao on 6/18/17.
 */
import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, AsyncStorage
} from 'react-native';

export default class AsyncStorageDemo extends Component {

    setValue = async() =>{
        try {
            await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
            console.log('saveValue OK');
        } catch (error) {
            // Error saving data
            console.log('setValue:-------------');
            console.log(error);
        }
    };

    getValue = async() => {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:key');
            if (value !== null){
                // We have data!!
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
            console.log('getValue:-------------');
            console.log(error);
        }
    };

    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                <TouchableOpacity style={{width: 100, height: 100, borderWidth: 1}} onPress={this.setValue}>
                    <Text>SET</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 100, height: 100, borderWidth: 1}} onPress={this.getValue}>
                    <Text>GET</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

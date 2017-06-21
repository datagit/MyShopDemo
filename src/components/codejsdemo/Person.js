/**
 * Created by datdao on 6/18/17.
 */
import React, {Component} from 'react';
//noinspection JSUnresolvedVariable
import {
    View, Text, TouchableOpacity, StyleSheet
} from 'react-native';

export default class Person extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text>name: {this.props.name}</Text>
                <Text>age: {this.props.age}</Text>
                <TouchableOpacity onPress={this.props.behaviourFunc}>
                    <Text>behaviourFunc 55</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.behaviourFunc}>
                    <Text>behaviourFunc 66</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Person.defaultProps = {
    name: "Dao Man Dat",
    age: 100
};
Person.PropTypes = {
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired,
    behaviourFunc: React.PropTypes.func,
};
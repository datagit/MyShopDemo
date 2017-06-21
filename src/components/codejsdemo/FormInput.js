/**
 * Created by datdao on 6/19/17.
 */
// step1: import
import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Button, TextInput
} from 'react-native';
// import { StackNavigator } from 'react-navigation';

// step2: declare class component with export default class
export default class FormInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            number1: "0",
            number2: "0",
            sum: 0,
        };
    }
    add(){
        var url = "http://192.168.1.83/projects/ws_demo1/add.php";
        fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "number1": this.state.number1,
                    "number2": this.state.number2,
                })
            })
            .then((response) =>
                response.json())

            .then((responseJson) => {
                console.log(responseJson);
                this.setState({sum: responseJson.result});
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });

    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.number1}
                    onChangeText={(text) => this.setState({number1: text})}
                    value={this.state.number1}
                />
                <TextInput
                    style={styles.number2}
                    onChangeText={(text) => this.setState({number2: text})}
                    value={this.state.number2}
                />
                <Button
                    style={styles.add}
                    onPress={()=>{
                        this.add()
                    }}
                    title="Add"
                />
                <View style={{flex: 1}}>
                    <Text style={{color: "red"}}>{this.state.sum}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
        flex: 1,
    },
   number1: {
       flex: 1,
       height: 40,

   }, number2: {
       flex: 1,
        height: 40,
   },add: {
       flex: 1,
   },
});
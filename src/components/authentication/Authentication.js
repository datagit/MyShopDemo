/**
 * Created by datdao on 6/20/17.
 */
import React, {Component} from 'react';
import {View, Text, Button
} from 'react-native';
export default class Authentication extends Component {
    render(){
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        const {navigate, name} = params;
        return(
            <View>
                <Text>Authentication</Text>
                <Button
                    title="sign in"
                    onPress={() =>
                      navigate('SignIn', { name: 'Jane' })
                    }
                />
                <Button
                    title="sign up"
                    onPress={() =>
                      navigate('SignUp', { name: 'Jane' })
                    }
                />
            </View>
        );
    }
}
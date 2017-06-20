/**
 * Created by datdao on 6/20/17.
 */
import React, {Component} from 'react';
import {View, Text, StatusBar
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';
import Authentication from './authentication/Authentication';
import Main from './main/Main';
StatusBar.setHidden(true);

const AppNavigator = StackNavigator({
        Main: { screen: Main },
        Authentication: { screen: Authentication },
    }
    //,{ headerMode: 'none' }
);

export default class App extends Component {
    render(){
        return(
            <AppNavigator />
        );
    }
}
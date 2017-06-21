/**
 * Created by datdao on 6/20/17.
 */
import React, {Component} from 'react';
import {View, Text, StatusBar
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';
//all components(screens)
import Authentication from './authentication/Authentication';
import Main from './main/Main';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import DetailProduct from './detailProduct/DetailProduct';
import ListProduct from './listProduct/ListProduct';

StatusBar.setHidden(true);

const AppNavigator = StackNavigator({
        Main: { screen: Main },
        Authentication: { screen: Authentication },
        SignIn: { screen: SignIn },
        SignUp: { screen: SignUp },
        DetailProduct: { screen: DetailProduct },
        ListProduct: { screen: ListProduct },
    }
    ,{ headerMode: 'none' }
);

export default class App extends Component {
    render(){
        return(
            <AppNavigator />
        );
    }
}
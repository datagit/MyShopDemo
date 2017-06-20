/**
 * Created by datdao on 6/20/17.
 */
import React, {Component} from 'react';
import {View, Text
} from 'react-native';

import * as constantInApp from '../../const/const';

export default class Main extends Component {
    render(){
        return(
            <View>
                <Text>{constantInApp.MY_VERSION}</Text>
            </View>
        );
    }
}
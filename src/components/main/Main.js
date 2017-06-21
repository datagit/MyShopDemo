/**
 * Created by datdao on 6/20/17.
 */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity
} from 'react-native';


import Drawer from 'react-native-drawer';
import ControlPanel from '../menu/ControlPanel';
import MainView from './MainView';
//import * as constantInApp from '../../const/const';
export default class Main extends Component {
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render(){
        const { navigate } = this.props.navigation;
        //console.log(navigate);
        return(
            <Drawer
                ref={(ref) => this._drawer = ref}
                openDrawerOffset={0.2} // 20% gap on the right side of drawer
                tapToClose={true}
                content={<ControlPanel navigate={navigate} />}
            >
                <MainView
                    navigate={navigate}
                    onOpen={this.openControlPanel.bind(this)}/>
            </Drawer>
        );
    }
}
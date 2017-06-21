/**
 * Created by datdao on 6/19/17.
 */
// step1: import
import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Button, TouchableOpacity
} from 'react-native';
//import { StackNavigator } from 'react-navigation';

import Drawer from 'react-native-drawer'


// step2: declare class component with export default class
export default class SliderMenu extends Component {
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };





    render(){
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
            main: {paddingLeft: 3},
        };

        return(
            <Drawer
                type="overlay"
                openDrawerOffset={0.2} // 20% gap on the right side of drawer
                panCloseMask={0.2}
                tapToClose={true}
                tweenHandler={(ratio) => ({
                    main: { opacity:(2-ratio)/2 }
                  })}
                ref={(ref) => this._drawer = ref}
                styles={drawerStyles}
                content={
                    <View style={{flex: 1, backgroundColor: 'yellow'}}>
                           <TouchableOpacity onPress={()=>{
                        this.closeControlPanel()
                    }}>
                        <Text>close</Text>
                    </TouchableOpacity>
                    </View>
                }
            >
                <View style={{flex: 1, backgroundColor: 'red'}}>
                    <TouchableOpacity onPress={()=>{
                        this.openControlPanel()
                    }}>
                        <Text>open</Text>
                    </TouchableOpacity>
                </View>
            </Drawer>
        );
    }

}

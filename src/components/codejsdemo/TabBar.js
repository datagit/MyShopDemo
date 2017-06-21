/**
 * Created by datdao on 6/18/17.
 */
import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class TabBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: "home",
        };
    }

    render(){
        return(
            <TabNavigator tabBarStyle={{backgroundColor: 'blue'}}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    renderIcon={() => <Image style={{width: 30, height: 30}} source={require('../images/homeBack.png')} />}
                    renderSelectedIcon={() => <Image style={{width: 30, height: 30}} source={require('../images/homeGreen.png')} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shop'}
                    title="Shop"
                    onPress={() => this.setState({ selectedTab: 'shop' })}>
                    <View style={{flex: 1, backgroundColor: 'red'}}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'cart'}
                    title="Cart"
                    onPress={() => this.setState({ selectedTab: 'cart' })}>
                    <View style={{flex: 1, backgroundColor: 'black'}}></View>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

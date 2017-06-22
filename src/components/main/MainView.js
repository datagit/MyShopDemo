/**
 * Created by datdao on 6/20/17.
 */
import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, Button, Image, TextInput, Dimensions
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Cart from '../cart/Cart';
import Contact from '../contact/Contact';
import Header from './Header';

import homeIcon from '../../images/icons/home0.png';
import homeActiveIcon from '../../images/icons/home.png';
import cartIcon from '../../images/icons/cart0.png';
import cartActiveIcon from '../../images/icons/cart.png';
import searchIcon from '../../images/icons/search0.png';
import searchActiveIcon from '../../images/icons/search.png';
import contactIcon from '../../images/icons/contact0.png';
import contactActiveIcon from '../../images/icons/cart.png';


export default class MainView extends Component {
    constructor(props) {
        super(props);
        //init state in this component
        this.state = {
            selectedTab: 'home'
        };
    }


    render() {

        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    selectedTitleStyle={{color: 'red', marginTop: 0}}
                    titleStyle={{marginTop: 0}}
                    renderIcon={() => <Image source={homeIcon} style={{width: 30, height: 30}}/>}
                    renderSelectedIcon={() => <Image source={homeActiveIcon} style={{width: 30, height: 30}}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}>

                    {/*st body in tab*/}
                    <View>
                        <Header openFunc={this.props.onOpen}/>

                        <Text>MainView</Text>

                        <Button
                            title="DetailProduct"
                            onPress={() =>
                                this.props.navigate('DetailProduct',
                                    {name: 'Jane', navigate: this.props.navigate})
                            }
                        />
                        <Button
                            title="list Product"
                            onPress={() =>
                                this.props.navigate('ListProduct',
                                    {name: 'Jane', navigate: this.props.navigate})
                            }
                        />
                    </View>
                    {/*ed body in tab*/}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'cart'}
                    title="Cart"
                    badgeText="1"
                    selectedTitleStyle={{color: 'red', marginTop: 0}}
                    titleStyle={{marginTop: 0}}
                    renderIcon={() => <Image source={cartIcon} style={{width: 30, height: 30}}/>}
                    renderSelectedIcon={() => <Image source={cartActiveIcon} style={{width: 30, height: 30}}/>}
                    onPress={() => this.setState({selectedTab: 'cart'})}>
                    {/*st body in tab*/}
                    <View><Text>cart</Text></View>
                    {/*ed body in tab*/}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'search'}
                    title="Search"
                    selectedTitleStyle={{color: 'red', marginTop: 0}}
                    titleStyle={{marginTop: 0}}
                    renderIcon={() => <Image source={searchIcon} style={{width: 30, height: 30}}/>}
                    renderSelectedIcon={() => <Image source={searchActiveIcon} style={{width: 30, height: 30}}/>}
                    onPress={() => this.setState({selectedTab: 'search'})}>
                    {/*st body in tab*/}
                    <View><Text>search</Text></View>
                    {/*ed body in tab*/}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'contact'}
                    title="Contact"
                    selectedTitleStyle={{color: 'red', marginTop: 0}}
                    titleStyle={{marginTop: 0}}
                    renderIcon={() => <Image source={contactIcon} style={{width: 30, height: 30}}/>}
                    renderSelectedIcon={() => <Image source={contactActiveIcon} style={{width: 30, height: 30}}/>}
                    onPress={() => this.setState({selectedTab: 'contact'})}>
                    {/*st body in tab*/}
                    <View><Text>contact</Text></View>
                    {/*ed body in tab*/}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }


}

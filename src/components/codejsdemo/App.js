/**
 * Created by datdao on 6/19/17.
 */
// step1: import
import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import ChatScreen from './ChatScreen.js';
import MyListView from './MyListView.js';
import FormInput from './FormInput.js';
import SliderMenu from './SliderMenu.js';
import AsyncStorageDemo from './AsyncStorageDemo.js';
import Layout from './Layout.js';
import TabBar from './TabBar.js';

const App = StackNavigator({
    TabBar: {screen: TabBar},
    Layout: {screen: Layout},
    AsyncStorageDemo: {screen: AsyncStorageDemo},
    SliderMenu: {screen: SliderMenu},
    FormInput: {screen: FormInput},
    MyListView: {screen: MyListView},
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
},
    { headerMode: 'none' }
);

export default App;


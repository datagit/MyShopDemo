/**
 * Created by datdao on 6/20/17.
 */
import React, {Component} from 'react';
import {View, Text, Button
} from 'react-native';



export default class ControlPanel extends Component {
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'yellow'}}>
                <Text>ControlPanel</Text>
                <Button
                    title="Go to authentication"
                    onPress={() =>
                      this.props.navigate('Authentication', { name: 'Jane' })
                    }
                />
            </View>
        );
    }
}


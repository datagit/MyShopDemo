/**
 * Created by datdao on 6/18/17.
 */
import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, ListView
} from 'react-native';

export default class MyListView extends Component {
    constructor(props){
        super(props);
        this.state = {
            //new object
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        };
    }
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                    <View style={{borderWidth: 1, padding: 20}}>
                        <Text>{rowData.Id}</Text>
                        <Text>{rowData.Name}</Text>
                        <Text>{rowData.Photo}</Text>
                    </View>
                }
            />
        );
    }

    componentDidMount(){
        var url = "http://192.168.1.83/projects/ws_demo1/list.php";

        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                }, function() {
                    // do something with new state
                    console.log("do something with new state");
                    console.log(this.state.dataSource);
                });
            })
            .catch((error) => {
                console.error(error);
            });


    }

}

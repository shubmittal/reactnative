import React, { Component } from 'react';
import {Text, View, TouchHighlight} from 'react-native'



class EventForm extends Component {
    state = {  }
    handleAddPress = () => {}
    render() { 
        return (
            <View>
                <TouchHighlight onPress = {this.handleAddPress}>
                    <Text>Add</Text>
                </TouchHighlight>
            </View>
          );
    }
}
handleAddPress = () => {}
 
export default EventForm;
<View>
    <TouchHighlight onPress = {this.handleAddPress}>
        <Text>Add</Text>
    </TouchHighlight>
</View>
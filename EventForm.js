import React, { Component } from 'react';
import {Text, View, TouchableNativeFeedback, TextInput, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    fieldContainer:
        {
            marginTop:20,
            marginBottom:20,
            backgroundColor: "cyan"
        },
        text:
        {
            height:40,
            margin:0,
            marginRight:7,
            paddingLeft:10

        }
})

class EventForm extends Component {
    state = { 
        title : "popp"
        
     }
    static navigationOptions = {
        title: 'New Event',
      };
      handleChangeTitle = ({text}) => this.setState({title: text})
      handleAdd = () => console.log(this.state) //()=> navigate("list")
    render() { 
        let {navigate} = this.props.navigation
        return (
            <View style = {{flex:1}}>
            <View style = {styles.fieldContainer}>
            <TextInput placeholder = "Event Titele" spellCheck = {true} style = {styles.text} 
            onChangeText = {this.handleChangeTitle }
            value = {this.state.title}
            ></TextInput>
            </View>
                <TouchableNativeFeedback onPress = {this.handleAdd}>
                    <Text>Add</Text>
                </TouchableNativeFeedback>
            </View>
          );
    }
}
 
export default EventForm;
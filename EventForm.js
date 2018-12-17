import React, { Component } from 'react';
import {Text, View,TouchableHighlight, TextInput, StyleSheet} from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import {formatDateTime, saveEvent} from "./api"


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

        },
        button:{
            height: 50,
            backgroundColor: "#48bbec",
            borderColor: '#48bbec',
            alignSelf: "stretch",
            margin:10,
            justifyContent: "center",
            alignItems: 'center',
            borderRadius : 5
        },
        buttonText : {
            color : '#fff',
            fontSize: 18
        },
        borderTop : {
            borderColor: "#edeeef",
            borderTopWidth: 5
        }
})

class EventForm extends Component {
    state = { 
        title : "",
        date : "",
        isDateTimePickerVisible: false      
     }

     _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
     _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    
     _handleDatePicked = date => {
       this.setState({date})
       this._hideDateTimePicker();}
   

    static navigationOptions = {
        title: 'New Event*',
      };
      handleChangeTitle = (text) => {this.setState({title:text})}
      handleAdd = () => { 
        let {title, date}   = this.state;
        alert(title, date)
        saveEvent(title,date)
        .then(()=>this.props.navigation.goBack() ) } 
    render() { 
       
        return (
            <View style = {{flex:1}}>
            <View style = {styles.fieldContainer}>
            <TextInput placeholder = "Event Title" spellCheck = {true} style = {styles.text} 
            onChangeText = {this.handleChangeTitle }
            value = {this.state.title}
            ></TextInput>
            <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          mode = "datetime"
          editable = {this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
        <TextInput 
        value = {formatDateTime(this.state.date)}
        style = {[styles.text, styles.borderTop]} onFocus = {this._showDateTimePicker} placeholder = "Choose a Date"></TextInput>
            </View>
                <TouchableHighlight onPress = {this.handleAdd} style = {styles.button}>
                    <Text style = {styles.buttonText}>Add</Text>
                </TouchableHighlight>
            </View>
          );
    }
}
 
export default EventForm;
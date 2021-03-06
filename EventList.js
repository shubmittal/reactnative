import React, { Component } from 'react';
import {FlatList, StyleSheet} from 'react-native'
import ActionButton from 'react-native-action-button';
import {getEvents} from './api'
import EventCard from './EventCard'


const styles = StyleSheet.create({
    list: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: '#F3F3F3'
    },
  });
class EventList extends Component {

    state = {
        events :[]
    }
    static navigationOptions = {
      title: 'Your Events',
    };
 
    componentDidMount = async ()=> {
        setInterval(() => {
            this.setState({
              events: this.state.events.map(evt => ({
                ...evt,
                timer: Date.now(),
              })),
            });
          }, 1000);
        getEvents()
        .then(events => {console.log(events); this.setState({events})})
     
        
    }
   
    render() {
      let {navigate} = this.props.navigation;
        return ( 
          [ 
           <FlatList
           key = "flatlist"
           data = {this.state.events}
           style = {styles.list}
           renderItem = {({item})=> <EventCard event ={item}/>}
           keyExtractor = {item => item.id}
           />,
<ActionButton key = "addEvent" title = "Add" onPress = {() => navigate("form")} buttonColor = "rgb(255,0,255)"/>
          ]);
    }
}
 
export default EventList;



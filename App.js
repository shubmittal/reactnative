import React from 'react';
import {StackNavigator} from 'react-navigation'
import EventList from "./EventList"
import EventForm from './EventForm';

export default StackNavigator({
  list : {screen : EventList},
  form : {screen: EventForm}
})


import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import EventList from "./EventList"
import EventForm from './EventForm';



const AppNavigator  = createStackNavigator({
  list : {screen : EventList},
  form : {screen : EventForm}
})
const App = createAppContainer(AppNavigator)

export default App;
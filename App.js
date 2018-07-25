import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation'
import StopWatch from './src/screens/StopWatch'
import Timer from './src/screens/Timer'
import Icons from '@expo/vector-icons/Ionicons'
import Settings from './src/screens/Settings'


export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = createBottomTabNavigator({
  
  StopWatch : {
    screen :StopWatch,
   
  },
  Timer : Timer,
  // Settings : Settings
},{
  tabBarOptions : {
    labelStyle : {
      color : '#fff',
      fontSize : 10
    },
    style : {
      backgroundColor : '#283845'
    }
  },
  navigationOptions : ({navigation}) => ({
    tabBarIcon : ({focused, tintColor}) => {
    const {routeName} = navigation.state;
    let iconName;
    if(routeName === 'StopWatch'){
      iconName = 'ios-stopwatch-outline'
    }else if (routeName === 'Timer') {
      iconName = 'ios-clock-outline'
    }
    // else if (routeName === 'Settings'){
    //   iconName = 'ios-settings-outline'
    // }

    return <Icons name = {iconName} size = {25} color = {tintColor}/>
    }
    
  })
},


)

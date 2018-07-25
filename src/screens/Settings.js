import React from "react";
import { Text, View , TouchableOpacity} from "react-native";
import Header from "../components/Header";
import {createStackNavigator} from 'react-navigation'

class Settings extends React.Component {
    static navigationOptions = {
        title : 'Settings',
        headerStyle : {
            backgroundColor :'#283845'
        },
        headerTitleStyle : {
            color : '#F2D492',
            fontSize : 24
        }
    }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#F2D492" }}>
       

        <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity onPress = {() => {
            this.props.navigation.navigate('Details')
        }}>
          <Text
            style={{
              fontSize: 24,
              color: "#202C39",
              fontWeight: "bold",
              marginTop: 20
            }}
          >
            Change Alarm Sound
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


class AlarmSounds extends React.Component {
    static navigationOptions = {
        title : 'Alarm Sounds',
        headerStyle : {
            backgroundColor :'#283845'
        },
        headerTitleStyle : {
            color : '#F2D492',
            fontSize : 24
        }
    }
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: "#F2D492" }}>
            <Text>
                Alarm Sounds
            </Text>
            </View>

        );
    }
}

export default createStackNavigator ( {
   Home : Settings,
   Details : AlarmSounds

}, {
    initialRouteName : 'Home'
})



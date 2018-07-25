import React from "react";
import { Text, View, Picker, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Expo from "expo";
import {createStackNavigator} from 'react-navigation'
import Icons from '@expo/vector-icons/Ionicons'
var soundObject = new Expo.Audio.Sound();
class Alarm extends React.Component {
  static navigationOptions = {
    title : 'Timer',
    headerStyle : {
        backgroundColor :'#283845'
    },
    headerTitleStyle : {
        color : '#F2D492',
        fontSize : 24
    }
}
  constructor(props) {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      clockActive: false,
      paused: false
    };
  }
  Start() {
    if (
      this.state.seconds < 1 &&
      this.state.minutes < 1 &&
      this.state.hours < 1
    ) {
      alert("Time Must Be Greater Than 0!");
    } else {
      this.setState({ clockActive: true });
      this.timer = setInterval(() => {
        this.setState({ seconds: this.state.seconds - 1 });
      }, 1000);
      this.setState({ paused: false });
    }
  }
  showClock() {
    if (this.state.clockActive === false) {
      return (
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <Text style={styles.TextStyleTop}>Hours</Text>
            <Text style={styles.TextStyleTop}>Minutes</Text>
            <Text style={styles.TextStyleTop}>Seconds</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <Picker
              selectedValue={this.state.hours}
              style={{ height: 50, width: 80 }}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ hours: itemValue });
              }}
            >
              <Picker.Item label="0" value={0} />
              <Picker.Item label="1" value={1} />
              <Picker.Item label="2" value={2} />
              <Picker.Item label="3" value={3} />
              <Picker.Item label="4" value={4} />
              <Picker.Item label="5" value={5} />
              <Picker.Item label="6" value={6} />
              <Picker.Item label="7" value={7} />
              <Picker.Item label="8" value={8} />
              <Picker.Item label="9" value={9} />
              <Picker.Item label="10" value={10} />
              <Picker.Item label="11" value={11} />
              <Picker.Item label="12" value={12} />
              <Picker.Item label="13" value={13} />
              <Picker.Item label="14" value={14} />
              <Picker.Item label="15" value={15} />
              <Picker.Item label="16" value={16} />
              <Picker.Item label="17" value={17} />
              <Picker.Item label="18" value={18} />
              <Picker.Item label="19" value={19} />
              <Picker.Item label="20" value={20} />
              <Picker.Item label="21" value={21} />
              <Picker.Item label="22" value={22} />
              <Picker.Item label="23" value={23} />
              <Picker.Item label="24" value={24} />
              <Picker.Item label="25" value={25} />
              <Picker.Item label="26" value={26} />
              <Picker.Item label="27" value={27} />
              <Picker.Item label="28" value={28} />
              <Picker.Item label="29" value={29} />
              <Picker.Item label="30" value={30} />
              <Picker.Item label="31" value={31} />
              <Picker.Item label="32" value={32} />
              <Picker.Item label="33" value={33} />
              <Picker.Item label="34" value={34} />
              <Picker.Item label="35" value={35} />
              <Picker.Item label="36" value={36} />
              <Picker.Item label="37" value={37} />
              <Picker.Item label="38" value={38} />
              <Picker.Item label="39" value={39} />
              <Picker.Item label="40" value={40} />
              <Picker.Item label="41" value={41} />
              <Picker.Item label="42" value={42} />
              <Picker.Item label="43" value={43} />
              <Picker.Item label="44" value={44} />
              <Picker.Item label="45" value={45} />
              <Picker.Item label="46" value={46} />
              <Picker.Item label="47" value={47} />
              <Picker.Item label="48" value={48} />
              <Picker.Item label="49" value={49} />
              <Picker.Item label="50" value={50} />
              <Picker.Item label="51" value={51} />
              <Picker.Item label="52" value={52} />
              <Picker.Item label="53" value={53} />
              <Picker.Item label="54" value={54} />
              <Picker.Item label="55" value={55} />
              <Picker.Item label="56" value={56} />
              <Picker.Item label="57" value={57} />
              <Picker.Item label="58" value={58} />
              <Picker.Item label="59" value={59} />
            </Picker>

            <Picker
              selectedValue={this.state.minutes}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ minutes: itemValue });
              }}
            >
              <Picker.Item label="0" value={0} />
              <Picker.Item label="1" value={1} />
              <Picker.Item label="2" value={2} />
              <Picker.Item label="3" value={3} />
              <Picker.Item label="4" value={4} />
              <Picker.Item label="5" value={5} />
              <Picker.Item label="6" value={6} />
              <Picker.Item label="7" value={7} />
              <Picker.Item label="8" value={8} />
              <Picker.Item label="9" value={9} />
              <Picker.Item label="10" value={10} />
              <Picker.Item label="11" value={11} />
              <Picker.Item label="12" value={12} />
              <Picker.Item label="13" value={13} />
              <Picker.Item label="14" value={14} />
              <Picker.Item label="15" value={15} />
              <Picker.Item label="16" value={16} />
              <Picker.Item label="17" value={17} />
              <Picker.Item label="18" value={18} />
              <Picker.Item label="19" value={19} />
              <Picker.Item label="20" value={20} />
              <Picker.Item label="21" value={21} />
              <Picker.Item label="22" value={22} />
              <Picker.Item label="23" value={23} />
              <Picker.Item label="24" value={24} />
              <Picker.Item label="25" value={25} />
              <Picker.Item label="26" value={26} />
              <Picker.Item label="27" value={27} />
              <Picker.Item label="28" value={28} />
              <Picker.Item label="29" value={29} />
              <Picker.Item label="30" value={30} />
              <Picker.Item label="31" value={31} />
              <Picker.Item label="32" value={32} />
              <Picker.Item label="33" value={33} />
              <Picker.Item label="34" value={34} />
              <Picker.Item label="35" value={35} />
              <Picker.Item label="36" value={36} />
              <Picker.Item label="37" value={37} />
              <Picker.Item label="38" value={38} />
              <Picker.Item label="39" value={39} />
              <Picker.Item label="40" value={40} />
              <Picker.Item label="41" value={41} />
              <Picker.Item label="42" value={42} />
              <Picker.Item label="43" value={43} />
              <Picker.Item label="44" value={44} />
              <Picker.Item label="45" value={45} />
              <Picker.Item label="46" value={46} />
              <Picker.Item label="47" value={47} />
              <Picker.Item label="48" value={48} />
              <Picker.Item label="49" value={49} />
              <Picker.Item label="50" value={50} />
              <Picker.Item label="51" value={51} />
              <Picker.Item label="52" value={52} />
              <Picker.Item label="53" value={53} />
              <Picker.Item label="54" value={54} />
              <Picker.Item label="55" value={55} />
              <Picker.Item label="56" value={56} />
              <Picker.Item label="57" value={57} />
              <Picker.Item label="58" value={58} />
              <Picker.Item label="59" value={59} />
            </Picker>

            <Picker
              selectedValue={this.state.seconds}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ seconds: itemValue });
              }}
            >
              <Picker.Item label="0" value={0} />
              <Picker.Item label="1" value={1} />
              <Picker.Item label="2" value={2} />
              <Picker.Item label="3" value={3} />
              <Picker.Item label="4" value={4} />
              <Picker.Item label="5" value={5} />
              <Picker.Item label="6" value={6} />
              <Picker.Item label="7" value={7} />
              <Picker.Item label="8" value={8} />
              <Picker.Item label="9" value={9} />
              <Picker.Item label="10" value={10} />
              <Picker.Item label="11" value={11} />
              <Picker.Item label="12" value={12} />
              <Picker.Item label="13" value={13} />
              <Picker.Item label="14" value={14} />
              <Picker.Item label="15" value={15} />
              <Picker.Item label="16" value={16} />
              <Picker.Item label="17" value={17} />
              <Picker.Item label="18" value={18} />
              <Picker.Item label="19" value={19} />
              <Picker.Item label="20" value={20} />
              <Picker.Item label="21" value={21} />
              <Picker.Item label="22" value={22} />
              <Picker.Item label="23" value={23} />
              <Picker.Item label="24" value={24} />
              <Picker.Item label="25" value={25} />
              <Picker.Item label="26" value={26} />
              <Picker.Item label="27" value={27} />
              <Picker.Item label="28" value={28} />
              <Picker.Item label="29" value={29} />
              <Picker.Item label="30" value={30} />
              <Picker.Item label="31" value={31} />
              <Picker.Item label="32" value={32} />
              <Picker.Item label="33" value={33} />
              <Picker.Item label="34" value={34} />
              <Picker.Item label="35" value={35} />
              <Picker.Item label="36" value={36} />
              <Picker.Item label="37" value={37} />
              <Picker.Item label="38" value={38} />
              <Picker.Item label="39" value={39} />
              <Picker.Item label="40" value={40} />
              <Picker.Item label="41" value={41} />
              <Picker.Item label="42" value={42} />
              <Picker.Item label="43" value={43} />
              <Picker.Item label="44" value={44} />
              <Picker.Item label="45" value={45} />
              <Picker.Item label="46" value={46} />
              <Picker.Item label="47" value={47} />
              <Picker.Item label="48" value={48} />
              <Picker.Item label="49" value={49} />
              <Picker.Item label="50" value={50} />
              <Picker.Item label="51" value={51} />
              <Picker.Item label="52" value={52} />
              <Picker.Item label="53" value={53} />
              <Picker.Item label="54" value={54} />
              <Picker.Item label="55" value={55} />
              <Picker.Item label="56" value={56} />
              <Picker.Item label="57" value={57} />
              <Picker.Item label="58" value={58} />
              <Picker.Item label="59" value={59} />
            </Picker>
          </View>
          <View
            style={{
              justifyContent: 'center' ,
              alignItems: "center",
              marginTop: 200
            }}
          >
            <TouchableOpacity onPress={this.Start.bind(this)}>
              <Text
                style={{
                  fontSize: 36,
                  color: "#202C39",
                  fontWeight: "bold",
                  marginTop: 20
                }}
              >
                Start
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{marginTop : 30}} onPress = {() => {
              this.props.navigation.navigate('Details')
            }} >
            <Icons name = 'ios-settings-outline' size = {40}/>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (this.state.clockActive === true) {
      return (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <TouchableOpacity
            onPress={() => {
              this.setState({
                clockActive: false,
                minutes: 0,
                seconds: 0,
                hours: 0,
                paused: true
              });
              clearInterval(this.timer);
              async function StopData() {
                try {
                  await soundObject.pauseAsync();
                } catch (error) {
                  alert("error Stoping");
                }
              }
              StopData();
            }}
          >
            <Text
              style={{
                fontSize: 36,
                color: "#202C39",
                fontWeight: "bold",
                paddingBottom: 20
              }}
            >
              Reset
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.ClockStyle}>{this.state.hours}</Text>
            <Text style={styles.ClockStyle}>:</Text>
            <Text style={styles.ClockStyle}>{this.state.minutes}</Text>
            <Text style={styles.ClockStyle}>:</Text>
            <Text style={styles.ClockStyle}>{this.state.seconds}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            {this.ShowPauseOrResume()}
          </View>
        </View>
      );
    }
  }

  ShowPauseOrResume() {
    const { paused } = this.state;
    if (paused === false) {
      return (
        <TouchableOpacity
          onPress={() => {
            clearInterval(this.timer);
            this.setState({ paused: true });
          }}
        >
          <Text
            style={{
              fontSize: 36,
              color: "#202C39",
              fontWeight: "bold",
              marginTop: 20
            }}
          >
            Pause
          </Text>
        </TouchableOpacity>
      );
    } else if (paused === true) {
      return (
        <View style={{ alignItems: "center", flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              this.timer = setInterval(() => {
                this.setState({ seconds: this.state.seconds - 1 });
              }, 1000);
              this.setState({ paused: false });
            }}
          >
            <Text
              style={{
                fontSize: 36,
                color: "#202C39",
                fontWeight: "bold",
                marginTop: 20
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  componentWillMount() {
    async function loadData() {
      try {
        await soundObject.loadAsync(require('../assets/Alarm1.wav'));
      }catch(error) {
        alert('alert Loading')
      }
    }

    loadData();
  }

  componentDidUpdate() {
    if (
      this.state.seconds < 1 &&
      this.state.minutes > 0 &&
      this.state.clockActive === true
    ) {
      this.setState({ minutes: this.state.minutes - 1, seconds: 59 });
    }
    if (
      this.state.minutes < 1 &&
      this.state.hours > 0 &&
      this.state.clockActive === true
    ) {
      this.setState({ hours: this.state.hours - 1, minutes: 59 });
    }
    if (
      this.state.minutes < 1 &&
      this.state.hours < 1 &&
      this.state.seconds < 1 &&
      this.state.clockActive === true
    ) {
      clearInterval(this.timer);
      playData();
    }
    async function playData() {
      try {
       
        await soundObject.playFromPositionAsync(0);
      } catch (error) {
        alert("error Playing Sound");
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#F2D492" }}>
        {/* <Header headerText="Timer" /> */}
        {this.showClock()}
        
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
    return ( 
      <View style = {{flex : 1, backgroundColor : '#F2D492', justifyContent : 'center', alignItems : 'center'}}>
      <Text>Coming Soon!</Text>
      </View>
      
    );
  }
}

export default createStackNavigator ({
    Home : Alarm,
    Details : AlarmSounds
},
{
  initialRouteName : 'Home'
})

const styles = {
  TextStyleTop: {
    fontSize: 18,
    marginTop: 165,
    fontWeight: "bold",
    color: "#202C39"
  },
  ClockStyle: {
    fontSize: 80,
    color: "#202C39"
  }
};



import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import Header from "../components/Header";


class StopWatch extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hours: 0,
      fakeSeconds: "0",
      minutes: 0,
      fakeMinutes: "0",
      fakeHours: "0",
      seconds: 0,
      stopwatchActive : false
     
    };
  }
  componentDidUpdate() {
    if (this.state.seconds > 59) {
      this.setState({ minutes: this.state.minutes + 1 });
      this.setState({ seconds: 0 });
    }
    if (this.state.minutes > 59) {
      this.setState({ hours: this.state.hours + 1 });
      this.setState({ minutes: 0 });
    }


  }

  Start() {
   
    if (this.state.seconds < 59 && this.state.stopwatchActive === false) {
      this.setState({stopwatchActive : true})
      this.timer = setInterval(
        () => this.setState({ seconds: this.state.seconds + 1 }),
        1000
      );
    }
  }

  Stop() {
    clearInterval(this.timer)
    this.setState({stopwatchActive : false})
  }

  Clear(){
    this.setState({seconds : 0, minutes : 0, hours : 0});
  }

  render() {
    const { ClockStyle } = styles;
    return (
      <View style={{ flex: 1, backgroundColor: "#F2D492" }}>
        <Header headerText="Stop Watch" />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={ClockStyle}>{this.state.hours}</Text>
            <Text style={ClockStyle}>:</Text>
            <Text style={ClockStyle}>{this.state.minutes}</Text>
            <Text style={ClockStyle}>:</Text>
            <Text style={ClockStyle}>{this.state.seconds}</Text>
          </View>
         
         <View style ={{flexDirection : 'row', justifyContent : 'space-between' , width : 300, alignItems: 'center'}}>
          <TouchableOpacity onPress={this.Start.bind(this)}>
            <Text style={{ fontSize: 24 }}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.Stop.bind(this)}>
            <Text style={{ fontSize: 24 }}>Stop</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.Clear.bind(this)}>
            <Text style={{ fontSize: 24, }}>Clear</Text>
          </TouchableOpacity>
          </View>


        </View>
      </View>
    );
  }
}

const styles = {
  ClockStyle: {
    fontSize: 80,
    color: "#202C39"
  }
};

export default StopWatch;

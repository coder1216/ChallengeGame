import React, { Component } from 'react';
import { View, Text, Navigator, StatusBar,Image,StyleSheet, Button, Dimensions, TouchableOpacity,TouchableHighlight,Modal } from 'react-native';

var timer1 = null;
var timer2 = null;
var timer3 = null;


export default class Timber extends Component {
    constructor(props){
        super(props);
        this.state = {
            originH:6,
            originM:59,
            originS:59,
            hour: 0,
            minute: 0,
            second: 0,

        }
    }

    getHours() {
        let currentH = new Date().getHours();
        let h = 0;
        //console.log("current Hour: "+ currentH);
        if(currentH < this.state.originH)
            h = (this.state.originH - currentH);
        else if( currentH < this.state.originH + 2 && currentH >= this.state.originH ){
            h = -1;
        }
        else{
            h = (23 - currentH + 5);
        }
        //console.log("current h: "+ h);
        this.setState({hour: h});
    }

    getMin() {
        let min = (this.state.originM - new Date().getMinutes());
        this.setState({minute: min});

    }

    getSec() {

        let sec = (this.state.originS - new Date().getSeconds());
        this.setState({second: sec});
    }

    componentDidMount() {
        timer1 = setInterval(() => this.getSec(), 1000);
        timer2 = setInterval(() => this.getMin(), 1000);
        timer3 = setInterval(() => this.getHours(), 1000);
    }

    componentWillUnmount(){
       this.cancelTimer();
    }

    cancelTimer(){
       // console.log("cancel timer");
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
    }

    render(){
        //console.log(this.state.visibile + "xl");
        return(
            <View >
                <Text style = {styles.timerStyle} >{this.showTime()}</Text>
            </View>
        )
    }


    showTime(){
        if(this.state.h == -1){
            return ("time out")
        }else{
            var comma1,comma2;

            if(this.state.minute < 10){
                comma1 = ':0';
            }else {
                comma1 = ':';
            }

            if(this.state.second < 10){
                comma2 = ':0';
            }else {
                comma2 = ':';
            }

            return("remaining time:" + this.state.hour + comma1 + this.state.minute);// + comma2 + this.state.second);
        }

    }



}

const styles = StyleSheet.create({
    timerStyle:{
        color:"white",
    }
});



import React, { Component } from 'react';
import { View, Text, Navigator, StatusBar,Image,StyleSheet, Button, Dimensions, TouchableOpacity,TouchableHighlight,Modal } from 'react-native';

import NavigationBar from 'react-native-navbar';
import SettingsList from 'react-native-settings-list';
import Challenge from '../../views/Challenge/Challenge';
import FCM from "react-native-fcm";
//
// import { SERVER } from '../../config/server';

export default class App extends Component {

  constructor(props){
    super(props);
    // this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      // remoteNUser:["test1","test2","test3","test4","test5",],
      remoteNUser:["yangtest","shijitest"],
      switchValue: true,
      wholeInfo: this.getPost(),
      url:'../../images/joe.png',
      inf:{
      },
      flag:true,
      ccc: 'https://i.pinimg.com/originals/fb/f9/97/fbf997e3d0e2d713c17ea6d684f2eaff.jpg',
    };
  }
  componentDidMount() {
    this.getPost();
  }

  componentWillMount() {
    this.getPost();
  }

  clickApprove(){
    this.props.confirm();
    this.props.show(false);
  }

  clickDecline(){
    this.props.decline(true);
    this.props.show(false);
  }


//********* for  get the url of the post...

  getPost(){
    // const url = `http://localhost:8888/getImage`;
    let datatest = (new Date().getMonth()+1)+"-"+(new Date().getDate())+"-"+(new Date().getFullYear());
    const url = `http://104.236.189.217:8888/getImage`;
    this.setState({ loading: true });

    return fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.props.competitor,
        date: datatest,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({url:this.state.data[0].img});
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }


  //8********************


//************




  sendNotification(){
    let url = `http://104.236.189.217:8888/sendNotification`;
    return fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: [this.props.competitor],     //array
        // description: this.state.description,    //string
        description: "You opponent have verified your challenge result, go to see it!",
      })
    })
    //.then((response) => response.json())
      .then((response) => {
        console.log("test notification"+response.toString());
      })
      .catch(error => {
        console.log(error+"test notification");
        throw error;
      });
  }


  //************





  sendApprove(){

    const url = `http://104.236.189.217:8888/verify`;
    let datatest = (new Date().getMonth()+1)+"-"+(new Date().getDate())+"-"+(new Date().getFullYear());
    //this.setState({ loading: true });
    return fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.props.competitor,
        date: datatest,
        isApproved:true,
      })
    }).catch(error => {
      throw  error
    });
  }


  sendDeclice(){


    const url = `http://104.236.189.217:8888/verify`;
    let datatest = (new Date().getMonth()+1)+"-"+(new Date().getDate())+"-"+(new Date().getFullYear());

    //this.setState({ loading: true });
    return fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.props.competitor,
        date: datatest,
        isApproved:false,
      })
    }).catch(error => {
      throw  error
    });
  }



  render() {
    // const {goBack} = this.props.navigation;
    // const { navigate } = this.props.navigation;
    const doneConfig = {
      title: 'Done',
      tintColor: '#4da6ff',
      handler: () => goBack(),
    };

    // var imag = this.state.info.imgURL;

    var imag = require('../../images/joe.png');
    // var x = '../../images/joe.png';
    // var imag = require(x);

    // this.getPost();






    if(this.flag == true) {
      this.getPost();
      this.setState({flag:false});
      console.log("555555555555555555");
    }

    return (<View>
        <Modal
          animationType={'fade'}
          visible={this.props.visible}
        >
          <View style={{backgroundColor: 'white', flex: 1}}>


            {/*<Text tyle={{color: 'red'} }>{this.url}</Text>*/}


            {/*<Image source={require('../../images/joe.png')} style={styles.container} >*/}
            {/*<Image source={imag} style={styles.container}>*/}
            <Image source={{uri:this.state.ccc}} style={styles.container}>
              {/*<TouchableOpacity  onPress={() => { navigate('Map', {name: 'Testconfirm'}); }} >*/}
              {/*<view style={{width: 80, height: 80,}}>*/}
              {/*<Text style={  color ='white'} >*/}
              {/*Trojans!*/}
              {/*</Text>*/}
              {/*/!*</TouchableOpacity>*!/*/}
              {/*</view>*/}


              <View style={{flexDirection: 'row', alignItems: 'center',}}>
                <TouchableOpacity onPress={() => {
                  this.props.show(false)
                }}>

                  <Image
                    style={styles.backIcon}
                    source={require('../../images/back.png')}
                  />
                </TouchableOpacity>
                <View>
                  {/*<Text style={{ fontWeight: 'bold',fontSize:30}}>Trojans</Text>*/}
                  {/*<Text style={{color: 'white' ,fontSize:12,top:25,left:-100}}>maggietr | 9h ago</Text>*/}
                </View>
              </View>

              {/*<Image source={require('../../images/sticker.png')} style={{width: 40, height: 40,top:200,left:40}}  >*/}

              {/*</Image>*/}
              <View style={styles.btns}>
                <TouchableOpacity onPress={() => {
                  this.clickApprove();this.sendNotification();this.sendApprove();this.getPost();console.log("fklsdahflkhadslkfjsadlkjf")
                }} style={styles.touchButton}>
                  <Image source={require('../../images/approve.png')} style={styles.buttonImage}>

                  </Image>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                  this.clickDecline(); this.sendNotification(); this.sendDeclice()
                }} style={styles.touchButton2}>
                  <Image source={require('../../images/decline.png')} style={styles.buttonImage2}>
                  </Image>
                </TouchableOpacity>
              </View>


            </Image>

            {/*</View>*/}
          </View>
        </Modal>
      </View>
    )
    // } else {
    //   return (
    //
    //   <view>hhhahhhh</view>
    //
    //   )
    // }


  }
  onValueChange(value){
    this.setState({switchValue: value});
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  touchButton: {
    width:((Dimensions.get('window').width)/10) * 3,
    height:(Dimensions.get('window').width)/10,
    left: (Dimensions.get('window').width)/6,
    top: (Dimensions.get('window').height) - ((Dimensions.get('window').width)/10 )* 4,

  },

  touchButton2: {
    width:((Dimensions.get('window').width)/10) * 3,
    height:(Dimensions.get('window').width)/10,
    left: (Dimensions.get('window').width)/5+10,
    top: (Dimensions.get('window').height) - ((Dimensions.get('window').width)/10 )* 4,
  },

  backIcon:{
    width:50,
    height:50,
    alignItems: 'center',
  },

  buttonImage: {
    flex: 1,
    width:((Dimensions.get('window').width)/10) * 3,
    height: (Dimensions.get('window').width)/10,
  },

  buttonImage2: {
    flex: 1,
    width:((Dimensions.get('window').width)/10) * 3,
    height: (Dimensions.get('window').width)/10,
  },

  btns:{
    flexDirection:'row',
    alignItems:'center',
  }

})

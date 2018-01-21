import React, { Component } from 'react';
import { View, Text, Image, Alert,Button, AsyncStorage,StyleSheet, Text as TextReact, Share, Modal, Keyboard, Easing, FlatList, ScrollView, Dimensions, InteractionManager, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';
// import {List, ListItem } from 'react-native-elements';

var RankList = require('./RankList')

export default class PointsRank extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // modalVisible: false,
        };
    }


    clickBack() {
        this.props.callbackParent(false);
    }

    showList(){
        return(
            <View>
                <View style = {{alignItems: 'flex-start'}}>
                    <TouchableOpacity style = {{height:30,width:30}} onPress = {()=>this.clickBack()}>
                        <Image style = {styles.backIcon} source={require('../../images/back.png')} />
                    </TouchableOpacity>
                </View>
                <View style = {styles.header}>
                    <Image style = {styles.captionImage } source={require('../../images/rank.png')} />
                    <Text style = {styles.headerText}>   Rank</Text>
                </View>
                <View>
                    <RankList/>
                </View>
                <View style = {styles.listBottomSeparator}>
                </View>


            </View>
        );
    }


    render(){

        return(<View>
        <Modal
            animationType={'fade'}
            transparent={true}
            visible={this.props.showPage}
        >
            <View style={styles.challengerPage}>

                {this.showList()}

            </View>


        </Modal>
        </View>
        );
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#44d1ff',
    },
    popScreenSmall:{
        position:'relative',
        backgroundColor: '#4A90E2',
        width: Dimensions.get('window').width - Dimensions.get('window').width / 6,
        height: Dimensions.get('window').height / 4,
        left:(Dimensions.get('window').width) / 12,
        flexDirection:'column',
        borderColor: 'white',
        borderRadius:8,
        borderWidth:4,
        shadowColor: '#979797',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:1,
    },
    popScreenSmallBackground:{
        position:'relative',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flexDirection:'column',
        paddingTop:Dimensions.get('window').height / 4,
        borderWidth:3
    },
    challengerPage:{
        position:'relative',
        backgroundColor: '#4A90E2',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingTop:Dimensions.get('window').height / 20,
        flexDirection:'column',
    },
    modalBackgroundStyle:{
        backgroundColor:  'rgba(255, 255, 255, 0.75)',
    },
    captionImage:{
        width:25,
        height:30,
        alignItems: 'center',
    },
    captionImage2:{
        width:Dimensions.get('window').height * 0.02,
        height:Dimensions.get('window').height * 0.02,
        alignItems: 'center',
    },
    backIcon:{
        width:30,
        height:30,
        alignItems: 'center',
    },
    hint:{
        fontWeight: 'bold',
        fontSize: 16,
        color:'#3cbadc',
        textAlign:'center',
        paddingBottom:14,
    },
    hintName:{
        fontWeight: 'bold',
        fontSize: 16,
        color:'#144655',
        textAlign:'center',
    },
    header:{
        flexDirection:'row',
        justifyContent:'center',
        paddingBottom:Dimensions.get('window').height / 40,
        alignItems:'center',
        borderBottomWidth:2,
        borderColor:'#979797',
    },
    hintHeader:{
        flexDirection:'row',
        justifyContent:'center',
        paddingBottom:24,
        alignItems:'center',
    },
    challengeTitle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        fontFamily:'Avenir',
        fontWeight: 'bold',
        fontSize: 20,
        color:'white',
        textAlign:'center',

    },
    listBottomSeparator:{
        borderTopWidth:2,
        borderColor:'#979797',
    },
    footer:{
        paddingTop:Dimensions.get('window').height / 25,
        paddingBottom:20
    },
    challengeTitleText:{
        fontFamily:'Avenir',
        fontSize: Dimensions.get('window').height * 0.03,
        color:'white',
        textAlign:'center',
    },
    subtitleText:{
        fontFamily:'Avenir',
        fontSize: Dimensions.get('window').height * 0.025,
        color:'#8CEA4D',
        textAlign:'center',
    },
    points:{
        paddingTop:Dimensions.get('window').height / 20,
        flexDirection:'column',
        alignItems:'flex-start',
    },
    pointsContent:{
        fontFamily:'Avenir',
        fontSize: Dimensions.get('window').height * 0.02,
        paddingTop:Dimensions.get('window').height / 24,
        color:'white',
        textAlign:'left',
    },
    pointsContentII:{
        fontFamily:'Avenir',
        fontSize: Dimensions.get('window').height * 0.02,
        paddingTop:Dimensions.get('window').height / 30,
        color:'white',
        textAlign:'left',
    },
    plainText:{
        fontSize: 16,
        color:'white',
        textAlign:'center',
    },
   alertText:{
        fontSize: 16,
        color:'white',
        textAlign:'center',
        width:Dimensions.get('window').width / 2,
    },
    pointsView:{
        height: Dimensions.get('window').height / 3,
        paddingBottom:Dimensions.get('window').height / 8,
        paddingLeft:Dimensions.get('window').height * 0.05,
    },
    hintFooter:{
        paddingTop:Dimensions.get('window').height / 3,
    },
    ok:{
        height:Dimensions.get('window').height * 0.06,
        alignItems:'center',
        justifyContent:'center',
    },
    alertContent:{
        height:Dimensions.get('window').height * 0.18,
        borderBottomWidth:2,
        borderColor:'#979797',
        alignItems:'center',
        justifyContent:'center',
    },
    Text:{
        fontFamily:'Avenir',
    }
});


module.exports = PointsRank;
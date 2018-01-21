import React, { Component } from 'react';
import { View, Text, Image, Alert,Button, AsyncStorage,StyleSheet, Text as TextReact, Share, Modal, Keyboard, Easing, FlatList, ScrollView, Dimensions, InteractionManager, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';
// import {List, ListItem } from 'react-native-elements';

let ITEM_HEIGHT = Dimensions.get('window').height / 15;

export default class RankList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ItemColor: '#0883b1',
            clicked : false,
            index: 0,
            data:[],
            error:null,
            loading:false,
            json:'',
            person:{username:'',nickname:''},
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    renderItemComponent = ({item, index}) => {


            return (

                    <View style={styles.item}>
                        <Text style={styles.itemText}> {index + 1}{'      '} {item.nickname}{'      '}</Text>
                        <Text style={styles.ScoreText}>{item.score}{'p'}</Text>
                        {/*{this.showHideCheck(index)}*/}
                    </View>


            )
    };

    makeRemoteRequest = () => {
        // const { page, seed } = this.state;
        // const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        const url = `http://104.236.189.217:8888/getRank`;
        this.setState({ loading: true });

        return fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date:(new Date().getMonth()+1)+"-"+(new Date().getDate())+"-"+(new Date().getFullYear()),
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                alert(responseJson);
                this.setState({data:responseJson});
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    _keyExtractor = (item, index) => item.username;

    render(){

        return(
            <FlatList
                style = { styles.list }
                data = { this.state.data }
                renderItem = { this.renderItemComponent }
                ListHeaderComponent = {this._header}
                ItemSeparatorComponent = { ItemDivideComponent }
                ListFooterComponent = { ItemDivideComponent }
                keyExtractor = { this._keyExtractor }
                getItemLayout = {(data,index)=>(
                     {length: ITEM_HEIGHT, offset: (ITEM_HEIGHT + 1) * index, index}
                )}

            />
        );
    }
};

//create list separator
class ItemDivideComponent extends Component {
    render() {

        return (
            <View style={{height: 1, backgroundColor: '#979797'}}
            />
        );
    }
};

const styles = StyleSheet.create({
    list:{
        height: (ITEM_HEIGHT + 1) * 8 + 20,
    },
    item:{
        flexDirection:'row',
        backgroundColor: '#4A90E2',
        height:ITEM_HEIGHT,
        // justifyContent:"space-around",
        alignItems:'center',
        paddingLeft:5,
    },
    itemAlt:{
        flexDirection:'row',
        backgroundColor: '#8CEA4D',
        height:ITEM_HEIGHT,
        // justifyContent:"space-around",
        alignItems:'center',
        paddingLeft:5,
    },
    itemText:{
        fontFamily:'Avenir',
        fontSize: 16,
        fontWeight: 'bold',
        color:'white',
        textAlign:'left',
        width:Dimensions.get('window').width * 4 / 5,
    },
  ScoreText:{
    fontFamily:'Avenir',
    fontSize: 16,
    fontWeight: 'bold',
    color:'white',
    textAlign:'left',
  },
    portraitImage:{
        width:40,
        height:40,
        borderRadius:20,
        paddingRight:12,
    },
    checkMark:{
        width:25,
        height:25,

    },
    Text:{
        fontFamily:'Avenir',
    },

});

module.exports = RankList;
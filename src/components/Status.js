import React, { useContext, useState } from 'react';
import { AsyncStorage, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { View, Text } from "react-native";
import Images from '../../assets/images';
import { navigate } from '../navigationRef';
import Spacer from './Spacer';
import {s3url} from '../constants';

// const goToStoryScreen = (alias) => {
//   //console.log("goto story function");
//   //console.log(JSON.stringify(alias));

//   AsyncStorage.setItem("selectedUser", alias);
//   return navigate('Story', {alias: alias})
// };

const Status = ({user, status}) => {
    //console.log("status id:" + status.id);
    
    var userInfo = {
      alias: status.alias,
      picture: s3url+status.alias+".png"
    };

    var me = false;
    if (user == status.alias) {
      me = true;
    };

    console.log(status);

    // if(typeof(userInfo) === 'string') {
    //     // fetchUser();
    //     if(userInfo == "test2") {
    //         userInfo = {
    //             name: "test2",
    //             alias: "test2",
    //             picture: Images.image2,
    //         }
    //     }
    //     else if(userInfo == "test3") {
    //         userInfo = {
    //             name: "test3",
    //             alias: "test3",
    //             picture: Images.image3,
    //         }
    //     }
    //     else if(userInfo == "test1") {
    //         userInfo = {
    //             name: "test1",
    //             alias: "test1",
    //             picture: Images.image1,
    //         }
    //     }
    // }
    // else {
    //     me = true;
    //     if(userInfo.alias == "test1") {
    //         userInfo.picture = Images.image4;
    //     }
    //     else if(userInfo.alias == "test2") {
    //         userInfo.picture = Images.image2;
    //     }
    //     else if(userInfo.alias == "test3") {
    //         userInfo.picture = Images.image3;
    //     }
    //     else {
    //         userInfo.picture = Images.image4;
    //     }
    // }
    // if(status.id == "1") {
    //     status = {
    //         id: "1",
    //         alias: "test1",
    //         text: "tweet text example 1",
    //         mention: "",
    //         attachment: Images.image5,
    //         hashtag:"",
    //         url:"",
    //         time: "2019.10.7 18:20",
    //     }
    // }
    // if(status.id == "2") {
    //     status = {
    //         id: "2",
    //         alias: "test1",
    //         text: "tweet text example 2",
    //         mention: "",
    //         attachment: "",
    //         hashtag:"",
    //         url:"",
    //         time: "2019.10.7 18:20",
    //     }
    // }
    // if(status.id == "3") {
    //     status = {
    //         id: "3",
    //         alias: "test2",
    //         text: "tweet text example 3",
    //         mention: "",
    //         attachment: "",
    //         hashtag:"hashtag1",
    //         url:"",
    //         time: "2019.10.7 18:20",
    //     }
    // }
    // if(status.id == "4") {
    //     status = {
    //         id: "4",
    //         alias: "test3",
    //         text: "tweet text example 4",
    //         mention: "test1",
    //         attachment: Images.image1,
    //         hashtag:"hashtag1",
    //         url:"",
    //         time: "2019.10.7 18:20",
    //     }
    // }
    // if(status.id == "5") {
    //     status = {
    //         id: "5",
    //         alias: "test3",
    //         text: "tweet text example 5",
    //         mention: "test2",
    //         attachment: Images.image2,
    //         hashtag:"",
    //         url:"",
    //         time: "2019.10.7 18:20",
    //     }
    // }
    //console.log(status.attachment);
  return (
    <View>
    <View style={{ backgroundColor: "white" }}>
      <View >
        {/* <Image source={{ uri: userInfo.picture }} */}
        <Image source={{uri: userInfo.picture}}
                style={{width: 100, height: 100}} 
                onPress={me === false ? () =>
                    navigate('Story', {alias: userInfo.alias})
                    : navigate('StatusList')}/>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingLeft: 10,
            height: 5,
          }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}
                onPress={me === false ? () =>
                navigate('Story', {alias: userInfo.alias})
                : navigate('StatusList')}>
            {userInfo.alias}
          </Text>
        {status.mention != 0 ?
          <Text style={{ color: "#999", fontSize: 18 }}
                onPress={() =>
                navigate('Story', {alias: status.mention[0]})}>
            {"@" + status.mention[0]}
          </Text>:<Text></Text>}
        </View>
      </View>
      {status.attachment != "null" ? 
        // <Image souce={status.attachment}
        <Image source={{uri: status.attachment}}
                style={{width:500, height:300 }} /> : <Text></Text>}
      <View>
        <Text style={{ fontSize: 22, padding: 10 }}>
          {status.text}
        </Text>
        {status.hashtag != 0 ?
          <Text style={{ color: "#999", fontSize: 18 }}
                onPress={() =>
                navigate('Hashtag', {hashtag: status.hashtag[0]})}>
            {"#" + status.hashtag[0]}
          </Text>:<Text></Text>}
      </View>
      <View >
        <Text style={{ color: "#888", fontSize: 16 }}>
          {status.time}
        </Text>
      </View>
      <Spacer></Spacer>
      <Spacer></Spacer>
      {/* <View style={styles.tweetFooter}>
        <View>
          <Button
            transparent
            dark
            style={{ paddingBottom: 0, paddingTop: 0 }}
          >
            <Icon name="ios-text-outline" />
          </Button>
        </View>
        <View>
          <Button transparent dark>
            <Icon name="ios-repeat" />
          </Button>
        </View>
        <View>
          <Button transparent dark>
            <Icon name="ios-heart-outline" />
          </Button>
        </View>
        <View>
          <Button transparent dark>
            <Icon name="ios-mail-outline" />
          </Button>
        </View>
      </View> */}
    </View>
  </View>
  );
};

export default Status;

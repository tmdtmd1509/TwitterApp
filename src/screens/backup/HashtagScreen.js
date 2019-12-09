import React, { useContext, useState } from 'react';
import { AsyncStorage, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
// import { ListItem } from 'react-native-elements';
import { Context as StatusContext } from '../context/StatusContext';
import Status from '../components/Status'
import { navigate } from '../navigationRef';
import Images from '../../assets/images';


const HashtagScreen = ({ props }) => {
  const [user, setUser] = useState('');
  const [story, setStory] = useState([]);
//   const hashtag = navigation.getParam('hashtag');
    const status3 = {
        id: "3",
        alias: "test2",
        text: "tweet text example 3",
        mention: "",
        attachment: "",
        hashtag:"hashtag1",
        url:"",
        time: "2019.10.7 18:20",
    }

    const status4 = {
        id: "4",
        alias: "test3",
        text: "tweet text example 4",
        mention: "test1",
        attachment: Images.image1,
        hashtag:"hashtag1",
        url:"",
        time: "2019.10.7 18:20",
    }
    const hashtag = [status3, status4];

  const getstatuses = async() => {
    const userInfo = JSON.parse(await AsyncStorage.getItem(props.user));
    setUser(userInfo);
    setStory(userInfo.statuses);
  }

  return (
    <>
      {/* <NavigationEvents onWillFocus={getstatuses} /> */}
      <FlatList
        data={hashtag}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigate('StatusDetail', {user: user, status: item })}>
              <Status
              user={item.alias}
              status={item}
              />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

// const styles = StyleSheet.create({});

export default HashtagScreen;

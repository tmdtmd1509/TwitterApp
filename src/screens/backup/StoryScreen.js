import React, { useContext, useState } from 'react';
import { AsyncStorage, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
// import { ListItem } from 'react-native-elements';
import { Context as StatusContext } from '../context/StatusContext';
//import { Context as apiContext } from '../api/apiContext';
import { getStory } from '../api/apiContext'
import Status from '../components/Status'
import { FontAwesome } from '@expo/vector-icons';
import { navigate } from '../navigationRef';

const StoryScreen = ({ navigation }) => {
  //const { state, getStory } = useContext(apiContext);
  const [user, setUser] = useState('');
  const [story, setStory] = useState([]);
  const alias = navigation.getParam('alias');

  const getstatuses = async() => {
      try{
        //const user = JSON.parse(await AsyncStorage.getItem(alias));
        setUser(user);
        setStory(user.statuses);
      } catch(err) {
          console.log(err);
      }
  }

  return (
    <>
      <NavigationEvents onWillFocus={getstatuses} />
      <Text>Followers: {user.followers}</Text>
      <Text>Followees: None</Text>
      <FlatList
        data={story}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigate('StatusDetail')}>
              <Status
              user={user}
              status={item}
              />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};
StoryScreen.navigationOptions = {
    title: 'Story',
  };

// const styles = StyleSheet.create({});

export default StoryScreen;

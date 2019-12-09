import React, { useContext, useState } from 'react';
import { AsyncStorage, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
// import { ListItem } from 'react-native-elements';
import { Context as StatusContext } from '../context/StatusContext';
import Status from '../components/Status'
import { FontAwesome } from '@expo/vector-icons';
import { navigate } from '../navigationRef';

const StatusListScreen = ({ navigation }) => {
  //const { state, fetchStatuses } = useContext(StatusContext);
  //const [user, setUser] = useState('');
  //const [story, setStory] = useState([]);

  const getstatuses = async() => {
    const user = JSON.parse(await AsyncStorage.getItem("currentUser"));
    setUser(user);
    setStory(user.statuses);
  }

  return (
    <>
      {/* <NavigationEvents onWillFocus={getstatuses} /> */}
      <FlatList
        data={story}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigate('StatusDetail')}
            >
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

StatusListScreen.navigationOptions = {
  title: 'My Story',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

// const styles = StyleSheet.create({});

export default StatusListScreen;

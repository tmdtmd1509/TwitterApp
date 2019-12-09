import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = () => {
  const { signout, reset } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48 }}>Profile</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
      <Spacer>
        <Button title="Edit profile picture" onPress={reset} />
      </Spacer>
    </SafeAreaView>
  );
};

ProfileScreen.navigationOptions = {
  title: 'Profile',
  tabBarIcon: <FontAwesome name="gear" size={20} />
};

const styles = StyleSheet.create({});

export default ProfileScreen;

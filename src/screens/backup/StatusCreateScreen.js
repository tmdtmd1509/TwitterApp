import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { context as StatusContext } from '../context/StatusContext'
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons';

const StatusCreateScreen = () => {
  const { state, createStatus } = useContext(StatusContext);

  const [content, setContent] = useState('');

  return (
    <View>
      <Text h2>Create a Tweet</Text>
      <Spacer />
        <Input
          value={content}
          onChangeText={setContent}
          placeholder="Write your tweet"
        />
      <Spacer>
        <Button 
          title="Tweet" 
          onPress={() => createStatus({ content })}
        />
      </Spacer>
    </View>
  );
};

StatusCreateScreen.navigationOptions = {
  title: 'Add Tweet',
  tabBarIcon: <FontAwesome name="plus" size={20} />
};

const styles = StyleSheet.create({});

export default StatusCreateScreen;

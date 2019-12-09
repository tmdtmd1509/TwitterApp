import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import Spacer from '../components/Spacer';
import { Text, Button, Input, Image } from 'react-native-elements';
import { url } from '../constants';

import ImagePicker from 'react-native-image-picker';


//const SignupScreen = ({ navigation }) => {
const SignupScreen = () => {

  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  
  const [name, setName] = useState('');
  const [alias, setAlias] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('../../assets/heeseung.jpg');

  handleChoosePhoto = () => {
    console.log("chilcked");
    // const options = {
    //   noData: true,
    // };
    // ImagePicker.showImagePicker(options, (response) => {
    //   console.log('Response = ', response);

    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     const source = { uri: response.uri };
    //   }
    //   setPicture(source);
    // });
    // ImagePicker.launchImageLibrary(options, response => {
    //   if (response.uri) {
    //     setPicture(response);
    //   }
    // });
  };
  get = () => {
    fetch(url+'/status', {
      headers: {
        'Accept': 'application/json'
      }
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
    // const apiName = 'twitter-API';
    // const path = '/status';
    // API.get(apiName, path).then(response => console.log(response))
    // .catch(err => console.log(err));
  }

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Spacer>
        <Text h3>Sign Up</Text>
      </Spacer>
      <Input
        label="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Alias"
        value={alias}
        onChangeText={setAlias}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image
          source={{ uri: picture }}
          style={{ width: 300, height: 300 }}
        />
        <Button title="Choose picture" onPress={this.handleChoosePhoto} />
      </View>
      <Spacer />

      {state.errorMessage ? (
        
        <Text >{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title="Sign Up"
          onPress={() => signup({ name, alias, password, email, picture })}
        />
      </Spacer>

      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead!"
      />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Button title="api test" onPress={this.get} />
      </View>
      <Spacer />
    </View>
  );
};



SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SignupScreen;

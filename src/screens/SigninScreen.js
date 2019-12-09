import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';


const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  //console.log("sign in state: ");
  //console.log(state);

  const [alias, setAlias] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Spacer>
        <Text h3>Sign In</Text>
      </Spacer>
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
      {state.errorMessage ? (
        <Text>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title="Sign In"
          onPress={() => signin({ alias, password })}
        />
      </Spacer>
      <NavLink
        text="Dont have an account? Sign up instead"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SigninScreen;

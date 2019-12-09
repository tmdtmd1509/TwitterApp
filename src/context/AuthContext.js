import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import { navigate } from '../navigationRef';
import Images from '../../assets/images';
import { Auth } from 'aws-amplify';
import { url } from '../constants';

//import {getFeed} from '../api/apiContext'


// import * as Permissions from 'expo-permissions';
// import * as MediaLibrary from 'expo-media-library';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { user: action.payload, errorMessage: '' };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { user: null, errorMessage: '' };
    case 'reset':
      return { user: null, errorMessage: ''};
    default:
      return state;
  }
};

const signupUser = (alias) => {
  let data = {
    "alias": alias,
  }

  fetch(url+'/user', {
  headers: {
    'Accept': 'application/json'
  },
  method: 'PUT',
  body: JSON.stringify(data),
  })//.then(res => res.json())
  .then(res => alert(JSON.stringify(res)))
  .catch(err => console.error(err))
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup = dispatch => async ({ name, alias, password, email, picture }) => {
  try {
    const success = await Auth.signUp({
      username: name,
      alias: alias,
      password,
      picture: picture,
      attributes: { email },
      })
      console.log('user successfully signed up!: ', success)
      //dispatch({ type: 'signin', payload: user.username });
      await AsyncStorage.setItem("currentUser", alias);
      console.log("signup");
      navigate('Feed', {currentUser: alias})
  } catch (err) {
    //console.log('error signing up: ', err)
    dispatch({ type: 'add_error', payload: err.message });
  }

  fetch(url+'/user?user='+alias, {
  headers: {
    'Accept': 'application/json'
  },
  method: 'POST',
  })
  .then(res => alert(JSON.stringify(res)))
  .catch(err => console.error(err))
};

const signin = dispatch => async ({ alias, password }) => {
  try {
    const user = await Auth.signIn(alias, password);
    console.log(user.username);
    dispatch({ type: 'signin', payload: user.username });
    await AsyncStorage.setItem("currentUser", user.username);

    navigate('Feed', {currentUser: user.username});
  } catch(err) {
    //console.log('error signing in: ', err)
    dispatch({ type: 'add_error', payload: err.message });
  }
};

const signout = dispatch => async () => {
  try {
    await Auth.signOut();
    await AsyncStorage.setItem("currentUser", "");
    navigate('loginFlow');
  } catch (err) {
    //console.log(err);
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign out' });
  }
};

const reset = dispatch => async () => {
  await AsyncStorage.clear();
  dispatch({ type: 'clear' });
  navigate('loginFlow');
};


export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, reset, clearErrorMessage },
  // { signin, signout, signup, clearErrorMessage },
  { user: null, errorMessage: '' }
);

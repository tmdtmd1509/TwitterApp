import React, { useReducer } from 'react';
//import createDataContext from './apiCreateContext';
import {GETSTORY, GETFEED, GETHASHTAGS, GETFOLLOWERS, 
  GETFOLLOWEES, POSTSTATUS, PUTFOLLOWER, PUTFOLLOWEE, 
  DELETEFOLLOWEE, EDITPROFILE } from './apiContext';

const initialState = { data: [
//   {
//   id: "1",
//   alias: "test1",
//   text: "tweet text example 1",
//   mention: "",
//   attachment: "Images.image5",
//   hashtag:"",
//   url:"",
//   time: "2019.10.7 18:20",
// }, {
//   id: "2",
//   alias: "test1",
//   text: "tweet text example 2",
//   mention: "",
//   attachment: "",
//   hashtag:"",
//   url:"",
//   time: "2019.10.7 18:20",
// }
], errorMessage: 'test' };

export default function apiReducer (state = initialState, action) {
  switch (action.type) {
    case GETSTORY:
      return { ...state, data: action.payload, errorMessage: '' };
    case GETFEED:
      return { ...state, data: action.payload, errorMessage: '' };
    case 'getStatus':
      return { ...state, data: action.payload, errorMessage: '' };
    case GETHASHTAGS:
      return { ...state, data: action.payload, errorMessage: '' };
    case GETFOLLOWERS:
      return { ...state, data: action.payload, errorMessage: '' };
    case GETFOLLOWEES:
      return { ...state, data: action.payload, errorMessage: '' };
    case POSTSTATUS:
      return { ...state, data: null, errorMessage: 'success' };
    case PUTFOLLOWER:
      return { ...state, data: null, errorMessage: 'success' };
    case PUTFOLLOWEE:
      return { ...state, data: null, errorMessage: 'success' };
    case DELETEFOLLOWEE:
      return { ...state, data: null, errorMessage: 'success' };
    case EDITPROFILE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
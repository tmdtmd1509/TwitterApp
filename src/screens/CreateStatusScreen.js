import React, { useState, Component } from 'react';
import { url } from '../constants';
import { View, Text, Button, TextInput, AsyncStorage } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons';



// const handleChange = (e) => {
//   this.setState({text: e.target.value});
// }

class CreateStatusScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
        text: "Write your tweet",
        user: "",
    }
  }

  componentWillMount() {
    AsyncStorage.getItem("currentUser")
    .then(user => this.setState({ user: user }))
  };

  handleSubmit = (text, user) => {
      this.postStatus(text, user);
  };

  handleMention(listOfText) {
    for(var i = 0; i < listOfText.length; i++) {
      if (listOfText[i].charAt(0) == "@"){
        return listOfText[i].replace('@','');
      }
    }
    return null;
  }

  handleHash(listOfText) {
    for(var i = 0; i < listOfText.length; i++) {
      if (listOfText[i].charAt(0) == "#"){
        return listOfText[i].replace('#','');
      }
    }
    return null;
  }

  postStatus = (text, user) => {
    var listOfText = this.state.text.split(" ")
    console.log(text, user)
    let status = {
        "id": 1,
        "alias": user,
        "text": text,
        "mention": [],
        "attachment": "null",
        "hashtag":[],
        "url":"null",
    }
    var mention = this.handleMention(listOfText);
    var hashtag = this.handleHash(listOfText);

    if(mention != null) {
      status.mention.push(mention);
    }
    if(hashtag != null) {
      status.hashtag.push(hashtag);
    }

    fetch(url+'/status', {
      headers: {
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(status),
    })//.then(res => res.json())
    .then(res => alert(JSON.stringify(res)))
    .catch(err => console.error(err))
  };
  render(){
    const {
      text
    } = this.state;
    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Create a Tweet</Text>
          <TextInput
              style={{ height: 400, borderColor: 'gray', borderWidth: 1, margin: 10}}
              value={this.state.text}
              onChangeText={ (text) => this.setState({text}) }
          />
        <Spacer>
          <Button 
            title="Post" 
            onPress={() => this.handleSubmit( this.state.text, this.state.user )}
          />
        </Spacer>
      </SafeAreaView>
    );
  }
};

CreateStatusScreen.navigationOptions = {
  title: 'Add Tweet',
  tabBarIcon: <FontAwesome name="plus" size={20} />
};

export default CreateStatusScreen;

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, CardSection, Button, Card, Spinner } from './Common';
import LoginForm from './LoginForm';
//------------------------------------------------
//------------------------------------------------
class App extends Component {
  //------------------------------------------------
  //------------------------------------------------
   state = { loggedIn: null }
  //------------------------------------------------
  //------------------------------------------------
      componentWillMount() {
        firebase.initializeApp({
          apiKey: 'AIzaSyC_FSr_7y9DXVFb8taWIA8-3A433wibXnI',
          authDomain: 'manojapp-9fdaa.firebaseapp.com',
          databaseURL: 'https://manojapp-9fdaa.firebaseio.com',
          projectId: 'manojapp-9fdaa',
          storageBucket: 'manojapp-9fdaa.appspot.com',
          messagingSenderId: '383946294991'
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
      }
  //------------------------------------------------
  //------------------------------------------------
  setContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <Card>
        <CardSection>
        <Button onPress={() => firebase.auth().signOut()} >
          Logout
        </Button>
        </CardSection>
        </Card>
      );
      case false:
        return (<LoginForm />);
      default:
      return (
        <Card>
        <CardSection>
        <Spinner size="large" />
        </CardSection>
        </Card>);
    }
  }
  //------------------------------------------------
  //------------------------------------------------
    render() {
    return (
      <View>
      <Header headerText="Auth" />
      {this.setContent()}
      </View>
    );
  }
}

export default App;

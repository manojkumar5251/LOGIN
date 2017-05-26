import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './Common';
//------------------------------------------------
//------------------------------------------------
class LoginForm extends Component {
  //------------------------------------------------
  //------------------------------------------------
  state = {
   text_mail: '',
   text_password: '',
   text_confirmpwd: '',
   error: '',
   signinloading: false,
   signuploading: false,
   signupbutton: true,
   loginbutton: true,
   confirmpwdinput: false,
   createAccountButton: false
  };
  //------------------------------------------------
  //------------------------------------------------
  onloginSuccess() {
    this.setState({
      text_mail: '',
      text_password: '',
      error: '',
      signinloading: false
    });
  }
  //------------------------------------------------
  //------------------------------------------------
  onloginFail() {
    this.setState({
      text_mail: '',
      text_password: '',
      error: 'Something went wrong!',
      signinloading: false,
      signupbutton: true
    });
  }
  //------------------------------------------------
  //------------------------------------------------
  onCreatAcSucccess() {
    this.setState({
      text_mail: '',
      text_password: '',
      error: '',
      signinloading: false,
      signupbutton: true,
      loginbutton: true,
      confirmpwdinput: false,
      createAccountButton: false
    });
  }
  //------------------------------------------------
  //------------------------------------------------
  onCreatAcFail() {
    this.setState({
      text_mail: '',
      text_password: '',
      error: 'Something went wrong!!',
      signinloading: false,
      signuploading: false,
      signupbutton: true,
      loginbutton: true,
      confirmpwdinput: false,
      createAccountButton: false
    });
  }
  //------------------------------------------------
  //------------------------------------------------
  onLoginButtonpressed() {
    this.setState({ error: '', signinloading: true, signupbutton: false });
    const { text_mail, text_password } = this.state;
    firebase.auth().signInWithEmailAndPassword(text_mail, text_password)
    .then(this.onloginSuccess.bind(this))
    .catch(() => {
        this.onloginFail();
      });
    }

  //------------------------------------------------
  //------------------------------------------------
  onCrearAcButtonpressed() {
    if (this.state.text_password !== this.state.text_confirmpwd) {
      return (
      this.setState({ error: 'password mismatch' })
       );
    }
    const { text_mail, text_password } = this.state;
    this.setState({ error: '', signuploading: true });
    firebase.auth().createUserWithEmailAndPassword(text_mail, text_password)
    .then(this.onCreatAcSucccess.bind())
    .catch(() => {
        this.onCreatAcFail();
      });
  }
  //------------------------------------------------
  //------------------------------------------------
  onSignuButtonpressed() {
    this.setState({ loginbutton: false,
       confirmpwdinput: true,
       signupbutton: false,
       createAccountButton: true });
  }
  //------------------------------------------------
  //------------------------------------------------
  renderconfirmpwdinput() {
    if (this.state.confirmpwdinput) {
      return (
        <CardSection>
          <Input
          lable="Confirm"
          secureTextEntry
          placeholder="Confirm password"
          value={this.state.text_confirmpwd}
          onChangeText={(text) => this.setState({ text_confirmpwd: text })}
          />
        </CardSection>
      );
    }
  }
  //------------------------------------------------
  //------------------------------------------------
  renderLoginButton() {
    if (this.state.signinloading) {
      return (
        <CardSection>
        <Spinner size="large" />
        </CardSection>
      );
    }
    if (this.state.loginbutton) {
      return (
        <CardSection>
        <Button onPress={this.onLoginButtonpressed.bind(this)}>
        Login
        </Button>
        </CardSection>
      );
    }
  }
  //------------------------------------------------
  //------------------------------------------------
  renderSignupButton() {
    if (this.state.signupbutton) {
      return (
        <CardSection>
        <Button onPress={this.onSignuButtonpressed.bind(this)} >
        Signup
        </Button>
        </CardSection>
      );
    }
  }
  //------------------------------------------------
  //------------------------------------------------
  rendercreateAccountButton() {
    if (this.state.signuploading) {
      return (
        <CardSection>
        <Spinner size="large" />
        </CardSection>
      );
    }
    if (this.state.createAccountButton) {
      return (
        <CardSection>
        <Button onPress={this.onCrearAcButtonpressed.bind(this)}>
        Create Account
        </Button>
        </CardSection>
      );
    }
  }
  //------------------------------------------------
  //------------------------------------------------

  render() {
    return (
      <Card>
      <CardSection>
      <Input
      lable="Email"
      secureTextEntry={false}
      placeholder="user@gmail.com"
      value={this.state.text_mail}
      onChangeText={(text) => this.setState({ text_mail: text })}
      />
      </CardSection>
      <CardSection>
        <Input
        lable="Password"
        secureTextEntry
        placeholder="password"
        value={this.state.text_password}
        onChangeText={(text) => this.setState({ text_password: text })}
        />
      </CardSection>
       {this.renderconfirmpwdinput()}
      <Text style={styles.errortext}>
        {this.state.error}
      </Text>

        {this.renderLoginButton()}

        {this.renderSignupButton()}

        {this.rendercreateAccountButton()}

      </Card>
    );
  }
}
//------------------------------------------------
//-----------------------------------------------
const styles = {
  errortext: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
//------------------------------------------------
//-----------------------------------------------
export default LoginForm;

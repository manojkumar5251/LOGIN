import React,{Component} from 'react';
import firebase from 'firebase';
import {View} from 'react-native';
import {Button,Card,Cardsection,Input,Spinner} from './';

class Loginform extends Component {
  state={email:'',passwd:'',load:false};

  onButtonPress(){
    const {email,passwd}=this.state;
    this.setState({load:true});
    firebase.auth().signInWithEmailAndPassword(email,passwd)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email,passwd)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
      });
   }

   onLoginSuccess() {
     this.setState({
       email:'',
       passwd:'',
       load:false
     })
     return(alert('SUCCESS!!!'));
   }

   onLoginFail(){
     this.setState({
       email:'',
       passwd:'',
       load:false
     })
     return(alert('LOGIN FAILED!!!'));
   }

   renderButton(){
     if(this.state.load){
       return(
         <Spinner size='small'/>
       );
     }
    return(
      <Button Press={this.onButtonPress.bind(this)}>
        LOGIN
      </Button>
    );
   }

  render(){
    return(
      <Card>
        <Cardsection>
          <Input
            secureTextEntry={false}
            placeholder='ex:hai123@mail.com'
            label='Email'
            value={this.state.email}
            onChangeText={email=>{this.setState({email})}}
          />
        </Cardsection>
        <Cardsection>
          <Input
            secureTextEntry
            placeholder='password'
            label='Password'
            value={this.state.passwd}
            onChangeText={passwd=>{this.setState({passwd})}}
          />
        </Cardsection>
        <Cardsection>
          {this.renderButton()}
        </Cardsection>
      </Card>
    );
  };
}

export default Loginform;

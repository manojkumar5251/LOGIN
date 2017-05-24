import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Header,Button,Cardsection,Spinner} from './';
import Loginform from './loginform';
import firebase from 'firebase';

class App extends Component{

  state={loggedIn:null};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC_FSr_7y9DXVFb8taWIA8-3A433wibXnI",
      authDomain: "manojapp-9fdaa.firebaseapp.com",
      databaseURL: "https://manojapp-9fdaa.firebaseio.com",
      projectId: "manojapp-9fdaa",
      storageBucket: "manojapp-9fdaa.appspot.com",
      messagingSenderId: "383946294991"
    });

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggedIn:true});
      }
      else {
        this.setState({loggedIn:false});
      }
    });
  }

  renderContent(){

    switch(this.state.loggedIn){
      case true:
                return (
                  <Cardsection>
                    <Button Press={() => firebase.auth().signOut()}>  Sign Out </Button>
                  </Cardsection>
                );
                break;
      case false:
                 return <Loginform />;
                 break;
      default:
              return <Cardsection><Spinner/></Cardsection>;

    }
    return <Loginform />;
  }

  render(){
    return(
      <View>
        <Header text="AUTH"/>
        {this.renderContent()}
      </View>
    );
  };
}

export default App;

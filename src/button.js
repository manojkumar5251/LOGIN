import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const Button = ({Press,children}) =>{
  return(
    <TouchableOpacity style={styles.buttonStyles} onPress={Press}>
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle:{
    color:'#007aff',
    alignSelf:'center',
    fontWeight:'600',
    fontSize:16,
    paddingTop:10,
    paddingBottom:10
  },
  buttonStyles:{
    flex:1,
    alignSelf:'stretch',
    backgroundColor:'#fff',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#007aff',
    marginLeft:5,
    marginRight:5
  }
}
export default Button;

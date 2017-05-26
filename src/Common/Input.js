import React from 'react';
import { TextInput, View, Text } from 'react-native';
//------------------------------------------
//------------------------------------------
const Input = ({ lable, value, onChangeText, placeholder, secureTextEntry }) => {
return (
  <View style={styles.containerstyle} >
  <Text style={styles.lablestyle} >{ lable }</Text>
  <TextInput
    style={styles.inputstyle}
  secureTextEntry={secureTextEntry}
  placeholder={placeholder}
  value={value}
  onChangeText={onChangeText}
  />
  </View>
);
};
//------------------------------------------
//------------------------------------------
const styles = {
  containerstyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputstyle: {
    width: '100%',
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  lablestyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
};
//------------------------------------------
//------------------------------------------
export { Input };

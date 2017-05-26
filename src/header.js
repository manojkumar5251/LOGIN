import React from 'react';
import {Text,View} from 'react-native';

const Header = ({text}) => {
  const {textstyle,viewstyle}=styles;
  return (
    <View style={viewstyle}>
      <Text style={textstyle}>{text}</Text>
    </View>
  );
}
const styles={
  textstyle: {
    fontSize: 20
  },
  viewstyle: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, hieght: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative'
  }
}
export default Header;

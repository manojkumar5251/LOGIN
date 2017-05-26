import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './card';
import Cardsection from './cardsection';
import Button from './button';

const Albumdetail = ({alb}) => {
  const {title,artist,thumbnail_image,image,url} = alb;
  return(
    <Card>

      <Cardsection>
        <View>
          <Image source={{uri:thumbnail_image}} style={styles.imageStyles} />
        </View>
        <View style={styles.headerContentStyles}>
          <Text style={styles.headerTextStyles}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </Cardsection>

      <Cardsection>
        <Image source={{uri:image}} style={styles.imageStyle}/>
      </Cardsection>

      <Cardsection>
        <Button Press={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </Cardsection>

    </Card>
  );
};

const styles = {
  headerContentStyles:{
    flexDirection:'column',
    justifyContent:'space-around'
  },
  headerTextStyles:{
    fontSize: 18
  },
  imageStyles:{
    height:50,
    width:50
  },
  imageContainerStyles:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
    marginRight:10
  },
  imageStyle:{
    height:300,
    flex:1,
    width:null
  }

};
export default Albumdetail;

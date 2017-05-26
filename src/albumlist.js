import React,{Component} from 'react';
import {ScrollView,Alert} from 'react-native';
import axios from 'axios';
import Albumdetail from './albumdetail';
import Spinner from './spinner';

class Albumlist extends Component {
  state={albums:[],load:false};

  componentWillMount(){
    this.setState({load:true});
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(hai => this.setState({albums:hai.data,load:false}))
    .catch(() => Alert.alert(
      'Loading Failed',
      'Do you want to reload?',
      [
        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => this.componentWillMount()}
      ]
    ));
  }

renderAlbums(){
  return this.state.albums.map(album =>
    <Albumdetail key={album.title} alb={album} />
  );
}
  render (){
    if(this.state.load){
      return(
        <Spinner />
      );
    }
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
  );
}
}
export default Albumlist;

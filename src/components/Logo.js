import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default class Logo extends Component<{}>  {
  render(){
    return(
      <View style={styles.container}>
          <Image style={{width:85,height:85}}
             source={require('../images/resfi.png')}/>
          <Text style={styles.logoText}>Welcome to Restaurant Finder</Text>
      </View>
    );
  }
        
}

const styles = StyleSheet.create({
 
  container: {
    flexGrow:1,
    justifyContent:'flex-end',
    alignItems:'center',
    marginVertical: 15,
  },
  logoText:{
    fontSize: 18,
    color:'rgba(255,255,255,0.7)'
  }
 
});
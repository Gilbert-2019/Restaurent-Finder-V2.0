import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Logo extends Component<{}>  {
  render(){
    return(
      <View style={styles.container2}>
        <TextInput style={styles.inputBox} 
         placeholder='FullName'
         placeholderTextColor='#ffffff'/>

         <TextInput style={styles.inputBox} 
         placeholder='Email'
         placeholderTextColor='#ffffff'/>

        <TextInput style={styles.inputBox} 
         placeholder='Password'
         secureTextEntry={true}
         placeholderTextColor='#ffffff'/>

         <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{this.props.type}</Text>
         </TouchableOpacity>
          
      </View>
    );
  }
        
}

const styles = StyleSheet.create({
 
  container2: {
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center',
    marginVertical: 15,
  },
  inputBox:{
    width:300,
    backgroundColor:'rgba(255 ,255 ,255 ,0.2)',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical:16,
  },
  button:{
    backgroundColor:'#1c313a',
    borderRadius:25,
    marginVertical:16,
    width:300,
    paddingVertical:10,
    
  },
  buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
 
});
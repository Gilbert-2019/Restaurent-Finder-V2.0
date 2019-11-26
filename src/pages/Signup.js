import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Signup extends Component<{}>  {
    render()
    {
        return(
		<ScrollView>
         <View style={styles.container}>
            <Logo/>
            <Form type="Signup"/>
            <View  style={styles.signupTextCont}>
                <Text style={styles.signupText}>Already have an account?</Text>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.signupButton}> Sign in</Text>
				</TouchableOpacity>
            </View>
         </View>  
</ScrollView>		 
        );
    }

}

const styles = StyleSheet.create({
 
  container: {
    backgroundColor:'#455a64',
    flexGrow:1,
    alignItems:'center',
    justifyContent:'center',
  },
  signupTextCont:{
    flexGrow:1,
    alignItems:'flex-end',
    justifyContent:'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText:{
    fontSize:16,
    color:'rgba(255 ,255 , 255,0.6)',
  },
  signupButton:{
    fontSize:16,
    color:'#ffffff',
    fontWeight:'500',
  }

 
});

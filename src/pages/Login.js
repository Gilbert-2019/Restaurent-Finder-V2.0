import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
} from 'react-native';

import Logo from '../components/Logo';


class Login extends Component  {
	
	
	
	    static navigationOptions = {
		header : null
	}
	
   constructor(props){
      super(props);
      this.state  = {
        email:'',
        password:'',
      }
    }

    componentDidMount(){
      this._loadInitialState().done 
    }

    _loadInitialState=async () =>{
      var value=await AsyncStorage.getItem('user');
      if(value !== null){
        this.props.navigation.navigate('Profile');
      }
    }

    render(){
        return(
         <View style={styles.container1}>
            <Logo/>
            <View style={styles.container2}>
                <TextInput style={styles.inputBox} 
                  placeholder='Email'
                   placeholderTextColor='#ffffff'
                   onChangeText={(email)=> this.setState({email})}   />

                <TextInput style={styles.inputBox} 
                  placeholder='Password'
                  secureTextEntry={true}
                  placeholderTextColor='#ffffff'
                  onChangeText={(password)=> this.setState({password})}    />

                <TouchableOpacity style={styles.button}
                                  onPress={() => this.props.navigation.navigate('Categories')}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
				
				
          
           </View>

            <View  style={styles.signupTextCont}>
                <Text style={styles.signupText}>Don't have an account yet?</Text>
				<TouchableOpacity
                                  onPress={() => this.props.navigation.navigate('Signup')}>
								  
                <Text style={styles.signupButton}> SignUp</Text>
				</TouchableOpacity>
            </View>
         </View>   
        )
    }

    login =() =>{
        fetch('http://10.10.8.93:3000/users',{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
           },
           body: JSON.stringify({
              email: this.state.email,
              password: this.state.password,
          }),
    })

        .then((response)=>  response.json() )
        .then((res) => {
              if(res.success === true){
                  alert("Successfully Login");
                  AsyncStorage.setItem('user',res.user);
                  this.props.navigation.navigate('Categories');
              }

              else{
                alert(res.message);
              }
        })
        .done();
  }
}

export default Login;

const styles = StyleSheet.create({
 
  container1: {
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
  },

  container2: {
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center',
    marginVertical: 15,
  },
  inputBox:{
    width:300,
	height:40,
    backgroundColor:'rgba(255 ,255 ,255 ,0.2)',
    borderRadius:25,
    paddingHorizontal:20,
    fontSize:15,
    color:'#ffffff',
    marginVertical:10,
  },
  button:{
    backgroundColor:'#1c313a',
    borderRadius:25,
    marginVertical:16,
    width:200,
    paddingVertical:10,
    
  },
  buttonText:{
    fontSize:16,
    fontWeight:'900',
    color:'#ffffff',
    textAlign:'center'
  }
  
});

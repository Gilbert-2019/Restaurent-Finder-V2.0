import React, { Component } from 'react';
import {	 Text, 
			View,			
			StyleSheet,
			Image,
			TouchableOpacity,
			StatusBar,
			TextInput,
			Dimensions,	
			ScrollView,	
			ImageBackground, } from 'react-native';
		
import bgimg from '../images/RESTBG2.png'
import blurimg from '../images/BlurBg1.png'


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';	

const{width : WIDTH} = Dimensions.get('window')

class OwnerLoginScreen extends Component {
	
	    static navigationOptions = {
		header : null
	}

state = { 
	  		Email: '',
			password: '',
			EmailError: false,
			PasswordError: false
		 };
			

		 onchangePassword =(text)=> {
			console.log("onchangePassword", text);
			this.setState( { password: text } );
			this.setState( { PasswordError: false } );
		 }

		 onchangeUsername =(text)=> {
			console.log("onchangeUsername", text);
			this.setState( { Email: text } );
			this.setState( { EmailError: false } );
		 }

		 onPressloginButton = () => {
			 if(this.state.Email.length !== 0){
				
				if(this.state.password.length !== 0) {
					
					console.log("onPressloginButton", this.state.Email.length);
					this.props.navigation.navigate('RestaurantRegisterScreen')

				} else {
					this.setState( { PasswordError: true } );
				}

				
			 } else {
				console.log("onPressloginButton");
				this.setState( { EmailError: true } );
				if(this.state.password.length == 0) {
					this.setState( { PasswordError: true } );
				} 
			 }
			
		 }

  render() {
    return (
	<ImageBackground source={bgimg} style={styles.backgroundcontainer}>
		<ImageBackground source={blurimg} style={styles.backgroundcontainer}>
		
		<StatusBar backgroundColor="#EEEFF3" barStyle="light-content" />
		<ScrollView>	
			<View style= {styles.alignLogoContainer}>
					<Image
					style={{width: 80, height: 80}}
					source={require('../images/LogoRest.png')}
					/>
			</View>
		
		<View style= {styles.alignLogoTextContainer}>
				<Text style= {styles.TextHeadingContainer}>Restaurant Finder</Text>	
				</View>
		<View style= {styles.LogoTextContainer}>
				<Text style= {styles.TextLoginContainer}>Hi! Login Here, </Text>	
				</View>
		
			<View style= {styles.paddingTextInput}>
		
		<View style= {styles.alignItemsContainer}>
		<View style={styles.alignTextInput}>
			<TextInput style= {this.state.EmailError == true ? styles.ErrorTextInputContainer : styles.TextInputContainer}
						placeholder={'E-mail'}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						onChangeText={(text) => this.onchangeUsername(text)}
						/>
		 
		 
		</View>
		
		<View style={styles.alignTextInput}>		
		 <View stlye = {styles.alignInputContainer}>
			<TextInput style= {this.state.PasswordError == true ? styles.ErrorTextInputContainer : styles.TextInputContainer}
						placeholder={'Password'}
						secureTextEntry={true}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						onChangeText={(text) => this.onchangePassword(text)}
						/>
		 
				</View>
		</View>
		</View>
				
		<View style = {styles.buttonalign}>						
					<TouchableOpacity style = {styles. Buttoncontainer}  
					onPress={() => this.onPressloginButton()}
					>
						
						<Text style = {styles. buttonText}>
						Login
						</Text>
					</TouchableOpacity>
					</View>		

			
	
		</View>

			<View style= {styles.paddingTextInput2}>
		  
		    <Text style={styles.inputSubLabel}>
            Don't you have? an account  
          </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUpScreen')} >
		  <Text style={styles.inputSubLabe2}> Sign Up </Text>
         </TouchableOpacity>
        </View>
		</ScrollView>
	
			</ImageBackground>
		</ImageBackground>


    );
  }
}

export default OwnerLoginScreen;

const styles = StyleSheet.create({
	
	backgroundcontainer:{
	flex: 1,	
	width:null,
	height:null,
	},
	
	TextHeadingContainer : {
		color:'#567F2F', 
		justifyContent: "center",
		fontFamily:'Lobster-Regular',
		fontSize: 22,
		paddingTop:20,
		alignItems:'center',
	
	},
	
	TextLoginContainer:{
		color:'#FFFFFF', 
		justifyContent: "center",
		fontFamily:'Comfortaa-Bold',
		fontSize: 18,
		paddingTop:20,
		alignItems:'center',
	
	},

	
	
	TextInputContainer:{
		fontFamily:'Lora-Italic',
		fontSize:13,
		width:WIDTH -90,
		borderWidth:1,
		borderColor:'#FFFFFF',
		height:40,	
		paddingLeft:35,
		color:'white'
		
	},

	ErrorTextInputContainer:{
		fontFamily:'Lora-Italic',
		fontSize:13,
		width:WIDTH -90,
		borderWidth:1,
		borderColor:'#ff0000',
		height:40,	
		paddingLeft:35,
		color:'white'
		
	},
	
	paddingTextInput:{
		paddingTop:15,
	},
	
	
	alignTextInput:{
		paddingTop:hp("2%"),
	},

	alignItemsContainer:{
		alignItems:'center',
		paddingTop: hp("10%"),
	},
	
	alignLogoContainer:{
		
		top: hp("10%"),
		left: wp("40%"),
	},
	
	alignLogoTextContainer:{
		top: hp("8%"),
		left: wp("30%"),
	},
	
	LogoTextContainer:{
	left: wp("12%"),
	top: hp("10%"),
	},
	
	Buttoncontainer : {
		width:WIDTH - 250,
		borderRadius:50,
		backgroundColor:'#79B343',
		height:40,
		justifyContent: "center",
		alignItems: "center" ,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.44,
		shadowRadius: 10.32,

		elevation: 16
	},
	
	Buttoncontainer1 : {
		width:WIDTH - 170,
		borderRadius:50,
		borderColor:'#ffffff',
		borderWidth:1.5,
		backgroundColor:'#79B343',
		height:45,
		justifyContent: "center",
		alignItems: "center" ,
	},
	
	buttonalign:{
		
	alignItems: "center" ,
	paddingTop:hp("2%"),
	shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0

	
	},

	
	buttonText :{
		fontFamily:'Lora-Italic',
		fontSize:16,
		color:'#FFFFFF'
	},
	
	
	copyrightText: {
		fontFamily:'Poppins-Regular',
		fontSize: 16,
		color:'#ffffff',
		
	
	},
	
	copyrightTextalign:{
	alignItems:'center',
	paddingTop: hp("10%"),
	},
	
		  inputSubLabel: {
    color: '#ffffff',
	fontSize: 15,
	fontFamily:'Baskervville-Italic',
	
  },
  
   inputSubLabe2: {
    color: '#FF0000',
	fontSize: 15,
	left:"5%",
	textDecorationLine: 'underline',
	fontFamily:'Baskervville-Italic',
  },
		
		paddingTextInput2:{
		flexDirection: 'row',
		paddingLeft: wp("20%"),
		paddingTop:hp("15%"),
	},	
	

});

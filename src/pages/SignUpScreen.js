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
			Picker,
			ImageBackground, } from 'react-native';
		
import bgimg from '../images/RESTBG2.png'
import blurimg from '../images/BlurBg1.png'

import PhotoUpload from 'react-native-photo-upload'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';	

const{width : WIDTH} = Dimensions.get('window')

class SignUpScreen extends Component {
	
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
					this.props.navigation.navigate('HomeScreen')

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
		<ScrollView>
		<StatusBar backgroundColor="#EEEFF3" barStyle="light-content" />
		
		<View style= {styles.Imagecrop}>
		<PhotoUpload
   onPhotoSelect={avatar => {
     if (avatar) {
       console.log('Image base64 string: ', avatar)
     }
   }}
 >
   <Image
					style={{width:100, height:100, borderRadius: 75}}
					source={require('../images/UserProfile.png')}
					/>
 </PhotoUpload>
 </View>
		
			<View style= {styles.AllContainer}>
			
		
		<View style= {styles.alignLogoTextContainer}>
				<Text style= {styles.TextHeadingContainer}>Upload Image</Text>	
				</View>
		<View style= {styles.LogoTextContainer}>
				<Text style= {styles.TextLoginContainer}>Hi! Signup Here, </Text>	
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
		
		
				<View style={styles.alignTextInput}>		
		 <View stlye = {styles.alignInputContainer}>
			<TextInput style= {styles.TextInputContainer}
						placeholder={'Full Name'}
						secureTextEntry={true}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						onChangeText={(text) => this.onchangePassword(text)}
						/>
		 
				</View>
		</View>
		
					<View style={styles.alignTextInput}>		
		 <View stlye = {styles.alignInputContainer}>
			<View style= {styles.TextInputContainerX}>
			<Picker
				style={{backgroundcolor:'white', position:'absolute',bottom:0, left:'45%', right:'25%', top:'-20%', 
				fontFamily:'Montaga-Regular',
				fontSize:13,
				borderColor:'#03DAC5',
				color:'#ffffff'				}}
				selectedValue={this.state.pickerSelection}
				onValueChange={(itemValue, itemIndex) =>
					this.setState({pickerSelection: itemValue})
			}>
			
				<Picker.Item label="-Select User-" value="Activity" />
				<Picker.Item label="Owner" value="Owner" />
                <Picker.Item label="Customer" value="Customer" />
			</Picker>
			</View>
		 
				</View>
		</View>
		
		</View>
				
		<View style = {styles.buttonalign}>						
					<TouchableOpacity style = {styles. Buttoncontainer}  
					onPress={() => this.onPressloginButton()}
					>
						
						<Text style = {styles. buttonText}>
						Submit
						</Text>
					</TouchableOpacity>
					</View>		

			
	
		</View>

			<View style= {styles.paddingTextInput2}>
		  
		    <Text style={styles.inputSubLabel}>
            Aready have an account?   
          </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('LandingScreen')} >
		  <Text style={styles.inputSubLabe2}> Login </Text>
         </TouchableOpacity>
        </View>
		</View>
		 
		</ScrollView>
	
			</ImageBackground>
		</ImageBackground>


    );
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
	
	backgroundcontainer:{
	flex: 1,	
	width:null,
	height:null,
	},
	
	TextHeadingContainer : {
		color:'#567F2F', 
		justifyContent: "center",
		fontFamily:'Poppins-Bold',
		fontSize: 20,
		paddingTop:20,
		alignItems:'center',
	
	},
	
	AllContainer:{
		bottom:hp("1%"),
	},
	
	TextLoginContainer:{
		color:'#FFFFFF', 
		justifyContent: "center",
		fontFamily:'Poppins-Bold',
		fontSize: 18,
		paddingTop:20,
		alignItems:'center',
	
	},

	
	
	TextInputContainer:{
		fontSize:13,
		width:WIDTH -90,
		borderWidth:1,
		borderColor:'#FFFFFF',
		height:40,	
		paddingLeft:35,
		color:'white'
		
	},
	
		TextInputContainerX:{
		fontSize:12,
		width:WIDTH -90,
		borderWidth:1,
		borderColor:'#FFFFFF',
		height:40,	
		paddingRight:wp("65%"),
		color:'white'
		
	},

	ErrorTextInputContainer:{
		fontFamily:'Montaga-Regular',
		fontSize:13,
		width:WIDTH -90,
		borderWidth:1,
		borderColor:'#ff0000',
		height:40,	
		paddingLeft:35,
		color:'white'
		
	},
	
	paddingTextInput:{
		paddingTop:hp("2%"),
	},
	
	
	alignTextInput:{
		paddingTop:hp("2%"),
	},

	alignItemsContainer:{
		alignItems:'center',
		paddingTop: hp("2%"),
	},
	
	alignLogoContainer:{
		top: hp("5%"),
		left: wp("40%"),
	},
	
	alignLogoTextContainer:{
		top: hp("3%"),
		left: wp("33%"),
	},
	
	LogoTextContainer:{
	left: wp("12%"),
	top: hp("4%"),
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
		fontFamily:'Poppins-Medium',
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
	fontFamily:'Poppins-Regular',
	
  },
  
   inputSubLabe2: {
    color: '#FF0000',
	fontSize: 15,
	left:"5%",
	textDecorationLine: 'underline',
	fontFamily:'Poppins-Regular',
  },
		
		paddingTextInput2:{
		flexDirection: 'row',
		paddingLeft: wp("23%"),
		paddingTop:hp("5%"),
	},	
	
	Imagecrop:{
		top: hp("4%"),
	},
	

});

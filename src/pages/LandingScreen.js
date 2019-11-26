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
		
import bgimg from '../images/RESTBG1.png'
import blurimg from '../images/BlurBg1.png'


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';	

const{width : WIDTH} = Dimensions.get('window')

class LandingScreen extends Component {
	
	    static navigationOptions = {
		header : null
	}



  render() {
    return (
	<ImageBackground source={bgimg} style={styles.backgroundcontainer}>
		<ImageBackground source={blurimg} style={styles.backgroundcontainer}>
		<ScrollView>
		<StatusBar backgroundColor="#EEEFF3" barStyle="light-content" />
			
			<View style= {styles.alignLogoContainer}>
					<Image
					style={{width: 80, height: 80}}
					source={require('../images/LogoRest.png')}
					/>
			</View>
		
		<View style= {styles.alignLogoTextContainer}>
				<Text style= {styles.TextHeadingContainer}>Restaurant Finder</Text>	
				</View>
		
			<View style= {styles.paddingTextInput}>
		
		<View style= {styles.alignItemsContainer}>
		<View style={styles.alignTextInput}>
		<TouchableOpacity onPress={() => this.props.navigation.navigate('OwnerLoginScreen')} >
			<View style={styles.TextInputContainer}>
			<Text style= {styles.OwnerTextContainer}>Owner</Text>	
			</View>
		</TouchableOpacity>

		</View>
		
		
		
		</View>
		
		<View style= {styles.alignItemsContainer2}>
		<View style={styles.alignTextInput}>
		<TouchableOpacity onPress={() => this.props.navigation.navigate('CustomerLoginScreen')} >
			<View style={styles.TextInputContainer1}>
			<Text style= {styles.CustomerTextContainer}>Customer</Text>	
			
			</View>
			</TouchableOpacity>

		</View>
		
		
		
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

export default LandingScreen;

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
	
	OwnerTextContainer:{
		color:'#567F2F',
		alignItems:'center',		
		justifyContent: "center",
		fontFamily:'Comfortaa-Bold',
		fontSize:16,
		paddingTop:hp("1%"),
		paddingLeft: wp("14%"),

	},
	
		CustomerTextContainer:{
		color:'#ffffff',
		alignItems:'center',	
		justifyContent: "center",
		fontFamily:'Comfortaa-Bold',
		fontSize:16,
		paddingTop:hp("1%"),
		paddingLeft: wp("12%"),

	},
	
	TextLoginContainer:{
		color:'#FFFFFF', 
		justifyContent: "center",
		fontFamily:'Poppins-Bold',
		fontSize: 16,
		paddingTop:20,
		alignItems:'center',
	
	},

	
	
	TextInputContainer:{
		fontSize:13,
		width:WIDTH -150,
		borderWidth:1,
		borderColor:'#FFFFFF',
		height:40,	
		backgroundColor:'#D1D1D1',
		paddingLeft:35,
		color:'white',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.39,
		shadowRadius: 8.30,

		elevation: 13
		
	},
	
		TextInputContainer1:{
		fontSize:13,
		width:WIDTH -150,
		borderWidth:1,
		backgroundColor:'#79B343',	
		borderColor:'#FFFFFF',
		height:40,	
		paddingLeft:35,
		color:'white',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.39,
		shadowRadius: 8.30,

		elevation: 13
		
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
		paddingTop: hp("8%"),
	},
	
	
	alignTextInput:{
		paddingTop:hp("2%"),
	},

	alignItemsContainer:{
		alignItems:'center',
		paddingTop: hp("10%"),
	},
	
	alignItemsContainer2:{
		alignItems:'center',
	},
	
	alignLogoContainer:{
		
		top: hp("20%"),
		left: wp("40%"),
	},
	
	alignLogoTextContainer:{
		top: hp("17%"),
		left: wp("30%"),
	},
	
	LogoTextContainer:{
	left: wp("6%"),
	},
	
	Buttoncontainer : {
		width:WIDTH - 250,
		borderRadius:50,
		backgroundColor:'#79B343',
		height:40,
		justifyContent: "center",
		alignItems: "center" ,
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
		paddingTop:hp("4%"),
	},	
	

});

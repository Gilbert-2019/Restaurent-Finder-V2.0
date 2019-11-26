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
import { SearchBar } from 'react-native-elements';
import { Overlay } from 'react-native-elements';		
import PhotoUpload from 'react-native-photo-upload'
import { Rating, AirbnbRating } from 'react-native-ratings';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';	

const{width : WIDTH} = Dimensions.get('window')

class RatingScreen extends Component {
	
static navigationOptions = ({navigation}) =>({
		title : "Rate",
		headerRight:
		<View style={styles.LogoutContainer}>
		<TouchableOpacity onPress={() => navigation.navigate('LandingScreen')}>
					<Text style = {styles. buttonText}>
						Logout
					</Text>
					</TouchableOpacity>
		</View>
	});

ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}

  render() {
    return (
	<ImageBackground style={styles.backgroundcontainer}>
		<StatusBar backgroundColor="#B9B9B9" barStyle="light-content" />
<ScrollView>		
<View style= {styles.alignLogoContainer}>
					<Image
					style={{width: 180, height: 100, }}
					source={require('../images/ImageX.png')}
					/>
						<View style= {styles.LogoTextContainer}>
					<Text style= {styles.TextLoginContainer}>Anoma {'\n'}Restaurant</Text>	
					</View>
					<Text style= {styles.AdressTextLoginContainer}>Moratuwa</Text>
			</View>
		
		
		<View style= {styles.paddingTextInput}>
		
		<View style= {styles.alignItemsContainer}>

		
			<View style={styles.alignTextInput}>
				
			<View style= {styles.TextInputContainerX}>
					
			<TextInput style= {styles.TextInputContainer}
						placeholder={'Enter Your Reviews.....'}
						placeholderTextColor={'#95989A'}
						underLineColorAndroid='transparent'
						/>
		 
		 
		
			</View>

		 
		</View>
		
		<View style={styles.alignTextInput}>
		<Rating
				type='heart'
				ratingCount={5}
				imageSize={30}
				showRating
				onFinishRating={this.ratingCompleted}
		/>
		</View>
		
						<View style={styles.alignTextInput}>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('ReviewScreen')}
					>
			<View style= {styles.ButtonContainer}>
						<Text style= {styles.RestTextontainer}>Reviews</Text>
			</View>
			</TouchableOpacity>
				 
		</View>
	
		</View>

		</View>
		

		<View style= {styles.PadContainer}>
		</View>
		
		
		</ScrollView>
		</ImageBackground>

    );
  }
}

export default RatingScreen;

const styles = StyleSheet.create({
	
	backgroundcontainer:{
	flex: 1,	
	width:null,
	height:null,
	backgroundColor:'#EEEFF3',
	},
	
	
	TextHeadingContainer : {
		color:'#567F2F', 
		justifyContent: "center",
		fontFamily:'Poppins-Bold',
		fontSize: 20,
		paddingTop:20,
		alignItems:'center',
	
	},
	
	
	TextLoginContainer:{
		color:'#95989A', 
		justifyContent: "center",
		fontFamily:'Comfortaa-Bold',
		fontSize: 20,
		paddingTop:5,
		alignItems:'center',
	
	},
	
	AddTextontainer:{
		color:'#95989A', 
		justifyContent: "center",
		fontFamily:'Comfortaa-Medium',
		fontSize: 16,
		paddingTop:hp("1%"),
		alignItems:'center',
	},
	
	RestTextontainer:{
		color:'#79B343', 
		justifyContent: "center",
		fontFamily:'Comfortaa-Bold',
		fontSize: 17,
		paddingTop:hp("0.5%"),
		alignItems:'center',
	},
	
	RESTtextContainer:{
		color:'#95989A', 
		justifyContent: "center",
		fontFamily:'Poppins-Bold',
		fontSize: 18,
		paddingTop:20,
		alignItems:'center',
		
	},
	
	FindertextContainer:{
		color:'#567F2F', 
		justifyContent: "center",
		fontFamily:'Poppins-Bold',
		fontSize: 18,
		paddingTop:20,
		alignItems:'center',
	},

	
	
TextInputContainer:{
		fontSize:15,
		fontFamily:'Lora-Italic',
		width:WIDTH -220,
		paddingLeft:8,
		top:"8%",
		color:'#79B343',
		
	},
	
ButtonContainer:{
		fontSize:13,
		width:WIDTH -250,
		borderWidth:1,
		height:40,
backgroundColor:'#E7E7E7',
		borderColor:'#79B343',		
		paddingLeft:35,
		color:'#79B343',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.48,
		shadowRadius: 11.95,

		elevation: 18
		
	},
	
	AddTextInputContainer:{
		fontSize:13,
		width:WIDTH -270,
		top:hp("0.7%"),
		paddingLeft:10,
		color:'#79B343',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.48,
		shadowRadius: 11.95,

		elevation: 18
		
	},
	
	butInputContainer:{
		fontSize:13,
		width:WIDTH -250,
		borderWidth:1,
		borderColor:'#95989A',
		height:40,	
		paddingLeft:30,
		color:'#79B343',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.48,
		shadowRadius: 11.95,

		elevation: 18
		
	},
	
	
	TextInputContainerOption:{
		fontSize:13,
		width:WIDTH -90,
		backgroundColor:'#BFEC95',
		borderRadius:50,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.00,

		elevation: 24,
		height:hp("10%"),	
		color:'white'
		
	},
	
		TextInputContainer2:{
		width:WIDTH -340,
		backgroundColor:'#79B343',
		height:hp("100%"),	
		
	},
	
		AdressTextLoginContainer:{
		color:'#79B343', 
		justifyContent: "center",
		fontFamily:'Comfortaa-Medium',
		fontSize: 15,
		bottom:hp("16%"),
		left:wp("50%"),
		alignItems:'center',
	
	},
	
	

TextInputContainerX:{
		fontSize:13,
		width:WIDTH -60,
		borderWidth:1,
		borderRadius:10,
		borderColor:'#79B343',
		height:hp("30%"),	
		paddingLeft:35,

	},

	ErrorTextInputContainer:{
		fontFamily:'Montaga-Regular',
		fontSize:13,
		width:WIDTH -90,
		borderWidth:1,
		borderColor:'#79B343',
		height:40,	
		paddingLeft:35,
		color:'white'
		
	},
	
	paddingTextInput:{
		bottom:wp("3%"),
		
	},
	
	paddingContInput:{
		left:wp("2%"),
		
	},
	
	ButtoncontainerLogout : {
		fontSize:13,
		width:WIDTH -270,
		borderWidth:1,
		backgroundColor:'#E7E7E7',
		borderColor:'#95989A',
		height:40,	
		paddingLeft:35,
		color:'#79B343',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.48,
		shadowRadius: 11.95,

		elevation: 18
		
	
	},
	
	buttonText :{
		color:'#FFFFFF', 
		justifyContent: "center",
		fontFamily:'Poppins-Bold',
		fontSize: 16,
		alignItems:'center',
	},
	
		LogoutContainer:{
		right:wp("8%")
	},
		
	
	
	paddingTextInputADV:{
		bottom:wp("35%"),
	},
	
	padding:{
		paddingLeft:wp("5%"),
	},
	
	paddingX:{
		paddingLeft:wp("7%"),
		top: hp("35%"),
	},
	
	
	alignTextInput:{
		paddingTop:hp("2%"),
		flexDirection: 'row',
		right:wp("9%"),
	},
	
	alignTextInput2:{
		left:wp("92%"),
		bottom:hp("55%")
	},

	alignItemsContainer:{
		alignItems:'center',
		paddingLeft:wp("16%"),
	},
	
	alignLogoContainer:{
		top: hp("7%"),
		left: wp("8%"),
		
	},
	
	alignFinderContainer:{
		top: hp("62%"),
		right: wp("80%"),
	},
	
	alignOptionContainer:{
		top: hp("1%"),
		left: wp("7%"),
	},
	
	alignLogoTextContainer:{
		bottom: hp("5%"),
		left: wp("30%"),
	},
	SearchContainer:{
		left: wp("7%"),
		bottom:hp("3%"),
	},
		alignRestTextContainer2:{
		bottom: hp("16%"),
		left: wp("2%"),
	},
	
	alignRestTextContainer1:{
		bottom: hp("6%"),
		left: wp("2%"),
	},
	alignRestNameTextContainer1:{
		bottom: hp("13.5%"),
		left: wp("18%"),
	},
	
	alignRestNumberTextContainer1:{
		bottom: hp("23.5%"),
		left: wp("25%"),
	},
	
	alignRestTextContainer:{
		bottom: hp("3%"),
		left: wp("2%"),
	},
	
	FinderContainer:{
		bottom: hp("10%"),
		left: wp("25%"),
	},
	
	PadContainer:{
		paddingTop: hp("5%"),
	},
	
	LogoTextContainer:{
	left: wp("50%"),
	bottom: hp("16%"),
	},
	
	OptionTextContainer:{
	left: wp("50%"),
	bottom: hp("1%"),
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

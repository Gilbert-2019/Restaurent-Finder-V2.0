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
		
import PhotoUpload from 'react-native-photo-upload'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';	

const{width : WIDTH} = Dimensions.get('window')

class AdvanceSearchResultScreen extends Component {
	
	    static navigationOptions = ({navigation}) =>({
		title : "Advanced Search",
		headerRight:
		<View style={styles.LogoutContainer}>
		<TouchableOpacity onPress={() => navigation.navigate('LandingScreen')}>
					<Text style = {styles. buttonText}>
						Logout
					</Text>
					</TouchableOpacity>
		</View>
	});

	state = {
    search: '',
  };
updateSearch = search => {
    this.setState({ search });
  };

  render() {
	  const { search } = this.state;
    return (
	<ImageBackground style={styles.backgroundcontainer}>
		<StatusBar backgroundColor="#B9B9B9" barStyle="light-content" />
		
<View style= {styles.alignLogoContainer}>
					<Image
					style={{width: 100, height: 100, }}
					source={require('../images/UserLogo.png')}
					/>
						<View style= {styles.LogoTextContainer}>
					<Text style= {styles.TextLoginContainer}>Mark! you can add...</Text>	
					</View>
			</View>
			
		
		<View style= {styles.alignLogoTextContainer}>
				<Text style= {styles.TextHeadingContainer}>Here you go!</Text>	
				</View>
		
		
		<View style= {styles.paddingTextInput}>
		
		<View style= {styles.alignItemsContainer}>

			<View style={styles.alignTextInput}>
			<TouchableOpacity onPress={() => this.props.navigation.navigate('RestaurantDetailScreen')}
					>
			<View style= {styles.TextInputContainer}>
						<Text style= {styles.RestTextontainer}>Anoma</Text>
			</View>
			</TouchableOpacity>
			<View style= {styles.paddingContInput}>
		
			<TouchableOpacity onPress={() => this.props.navigation.navigate('MapPopupScreen')}
					>
			<View style= {styles.AddTextInputContainer}>
			<Text style= {styles.AddTextontainer}>No16,Moratuwa</Text>
			</View>
			</TouchableOpacity>
						
		 	</View>
		 
		</View>
		
				<View style={styles.alignTextInput}>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('RestaurantDetailScreen')}
					>
			<View style= {styles.TextInputContainer}>
						<Text style= {styles.RestTextontainer}>Reets</Text>
			</View>
			</TouchableOpacity>
			<View style= {styles.paddingContInput}>
		
			
			<TouchableOpacity onPress={() => this.props.navigation.navigate('MapPopupScreen')}
					>
			<View style= {styles.AddTextInputContainer}>
			<Text style= {styles.AddTextontainer}>No16,Dehiwala</Text>
			</View>
			</TouchableOpacity>
						
		 	</View>
		 
		</View>
		
				<View style={styles.alignTextInput}>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('RestaurantDetailScreen')}
					>
			<View style= {styles.TextInputContainer}>
						<Text style= {styles.RestTextontainer}>Foodie</Text>
			</View>
			</TouchableOpacity>
			<View style= {styles.paddingContInput}>
		
			
			<TouchableOpacity onPress={() => this.props.navigation.navigate('MapPopupScreen')}
					>
			<View style= {styles.AddTextInputContainer}>
			<Text style= {styles.AddTextontainer}>No16,Galkissa</Text>
			</View>
			</TouchableOpacity>
						
		 	</View>
		 
		</View>
		
				<View style={styles.alignTextInput}>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('RestaurantDetailScreen')}
					>
			<View style= {styles.TextInputContainer}>
						<Text style= {styles.RestTextontainer}>KeelsLay</Text>
			</View>
			</TouchableOpacity>
			<View style= {styles.paddingContInput}>
		
			<TouchableOpacity onPress={() => this.props.navigation.navigate('MapPopupScreen')}
					>
			<View style= {styles.AddTextInputContainer}>
			<Text style= {styles.AddTextontainer}>No16,Panadura</Text>
			</View>
			</TouchableOpacity>
						
		 	</View>
		 
		</View>
		
		</View>

		</View>
		
		
		
		
		
		
		
		
			<View style= {styles.paddingTextInputADV}>

		<View style= {styles.paddingX}>
		<TouchableOpacity onPress={() => this.props.navigation.navigate('RestaurentHomeScreen')}
					>
		<View style= {styles.TextInputContainerOption}>
		<View style= {styles.alignOptionContainer}>
		<Image
							style={{width:50, height: 50}}
							source={require('../images/LogoRest.png')}
							/>
							
							<View style= {styles.FinderContainer}>
						<Text style= {styles.FindertextContainer}>Menu</Text>	
						</View>
						
					</View>
					</View>
		</TouchableOpacity>
					</View>

		
				<View style={styles.alignTextInput2}>		
		 <View stlye = {styles.alignInputContainer}>
			<View style= {styles.TextInputContainer2}>
				
					
			</View>
				</View>
		</View>
		</View>
	

		</ImageBackground>

    );
  }
}

export default AdvanceSearchResultScreen;

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
		fontFamily:'Lobster-Regular',
		fontSize: 22,
		paddingTop:20,
		alignItems:'center',
	
	},
	
	
	TextLoginContainer:{
		color:'#95989A', 
		justifyContent: "center",
		fontFamily:'Comfortaa-Light',
		fontSize: 18,
		paddingTop:20,
		alignItems:'center',
	
	},
	
	AddTextontainer:{
		color:'#FFFFFF', 
		justifyContent: "center",
		fontFamily:'Lora-Regular',
		fontSize: 15,
		paddingTop:hp("1.5%"),
		left:wp("1%"),
		alignItems:'center',
	},
	
	RestTextontainer:{
		color:'#455a64', 
		justifyContent: "center",
		fontFamily:'Lora-Bold',
		fontSize: 16,
		paddingTop:hp("1.5%"),
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
		fontFamily:'Comfortaa-Bold',
		fontSize: 18,
		paddingTop:20,
		alignItems:'center',
	},

	
	
TextInputContainer:{
		fontSize:13,
		width:WIDTH -100,
		borderWidth:1,
		backgroundColor:'#B9B9B9',
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
	
	AddTextInputContainer:{
		fontSize:13,
		width:WIDTH -270,
		height:40,	
		paddingLeft:0,
		right:wp("45%"),
		top:wp("1%"),
		color:'#79B343',
		
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
		
	
	
	TextInputContainerOption:{
		fontSize:13,
		width:WIDTH -220,
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
	
	

		TextInputContainerX:{
		fontSize:12,
		width:WIDTH -90,
		borderWidth:1,
		borderColor:'#B9B9B9',
		height:40,	
		paddingRight:wp("65%"),
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
		bottom:wp("3%"),
		
	},
	
	paddingContInput:{
		left:wp("2%"),
		
	},
	
	paddingTextInputADV:{
		bottom:wp("45%"),
	},
	
	padding:{
		paddingLeft:wp("5%"),
	},
	
	paddingX:{
		paddingLeft:wp("45%"),
		top: hp("35%"),
	},
	
	
	alignTextInput:{
		paddingTop:hp("2%"),
		flexDirection: 'row',
		left:wp("3%"),
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
		top: hp("5%"),
		left: wp("5%"),
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
		left: wp("15%"),
	},
	
	
	LogoTextContainer:{
	left: wp("28%"),
	bottom: hp("14%"),
	},
	
	OptionTextContainer:{
	left: wp("7%"),
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

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
		
import PhotoUpload from 'react-native-photo-upload'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';	

const{width : WIDTH} = Dimensions.get('window')

class RestaurentHomeScreen extends Component {
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
		<StatusBar backgroundColor="#EEEFF3" barStyle="light-content" />
		

			
		
		<View style= {styles.alignLogoTextContainer}>
				<Text style= {styles.TextHeadingContainer}>Restaurants near to you..</Text>	
				</View>
		<View style= {styles.LogoTextContainer}>
				<Text style= {styles.TextLoginContainer}>Restaurants </Text>	
				</View>
		
			<View style= {styles.paddingTextInput}>
		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<View style= {styles.alignItemsContainer}>
				<View style={styles.alignTextInput}>
					<View style= {styles.TextInputContainer}>
					<View style= {styles.alignLogoContainer}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('RestaurantDetailScreen')}
					>
							<Image
							style={{width:280, height: 180}}
							source={require('../images/ImageX.png')}
							/>
					</TouchableOpacity>
							<View style= {styles.alignRestTextContainer}>
						<Text style= {styles.RESTtextContainer}>Anoma Restaurant</Text>	
						</View>
							<View style= {styles.alignRestTextContainer1}>
						<Text style= {styles.RESTtextContainer}>Owner:</Text>
							</View>
									<View style= {styles.alignRestNameTextContainer1}>
										<Text style= {styles.RESTtextContainer}>Anoma</Text>
									</View>
						
							<View style= {styles.alignRestTextContainer2}>
						<Text style= {styles.RESTtextContainer}>Mobile No:</Text>	
						</View>
									<View style= {styles.alignRestNumberTextContainer1}>
										<Text style= {styles.RESTtextContainer}>077-1231235</Text>
									</View>
						
					</View>
					
					
					

		 
		 
		</View>
		<View style= {styles.padding}>
		
							<View style= {styles.TextInputContainer}>
					<View style= {styles.alignLogoContainer}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('RestaurantDetailScreen')}
					>
							<Image
							style={{width:280, height: 180}}
							source={require('../images/ImageX.png')}
							/>
					</TouchableOpacity>
							
							<View style= {styles.alignRestTextContainer}>
						<Text style= {styles.RESTtextContainer}>Reets Restaurant</Text>	
						</View>
							<View style= {styles.alignRestTextContainer1}>
						<Text style= {styles.RESTtextContainer}>Owner:</Text>
							</View>
									<View style= {styles.alignRestNameTextContainer1}>
										<Text style= {styles.RESTtextContainer}>Reet</Text>
									</View>
						
							<View style= {styles.alignRestTextContainer2}>
						<Text style= {styles.RESTtextContainer}>Mobile No:</Text>	
						</View>
									<View style= {styles.alignRestNumberTextContainer1}>
										<Text style= {styles.RESTtextContainer}>077-1756235</Text>
									</View>
						
					</View>
					</View>
					
					

		
	
		 
		</View>
		
				<View style= {styles.padding}>
		
							<View style= {styles.TextInputContainer}>
					<View style= {styles.alignLogoContainer}>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('RestaurantDetailScreen')}
					>
							<Image
							style={{width:280, height: 180}}
							source={require('../images/ImageX.png')}
							/>
					</TouchableOpacity>
							
							<View style= {styles.alignRestTextContainer}>
						<Text style= {styles.RESTtextContainer}>Best Restaurant</Text>	
						</View>
							<View style= {styles.alignRestTextContainer1}>
						<Text style= {styles.RESTtextContainer}>Owner:</Text>
							</View>
									<View style= {styles.alignRestNameTextContainer1}>
										<Text style= {styles.RESTtextContainer}>Mark</Text>
									</View>
						
							<View style= {styles.alignRestTextContainer2}>
						<Text style= {styles.RESTtextContainer}>Mobile No:</Text>	
						</View>
									<View style= {styles.alignRestNumberTextContainer1}>
										<Text style= {styles.RESTtextContainer}>077-1456235</Text>
									</View>
						
					</View>
					</View>
					
					

		
	
		 
		</View>
		</View>
		</View>
		</ScrollView>

		<View style= {styles.OptionTextContainer}>
			<Text style= {styles.TextLoginContainer}>Search</Text>	
		</View>
		<View style= {styles.paddingX}>
		<TouchableOpacity onPress={() => this.props.navigation.navigate('BasicSearchScreen')}
					>
		<View style= {styles.TextInputContainerOption}>
		<View style= {styles.alignOptionContainer}>
		<Image
							style={{width:50, height: 50}}
							source={require('../images/LogoRest.png')}
							/>
							
							<View style= {styles.FinderContainer}>
						<Text style= {styles.FindertextContainer}>Find Your...!</Text>	
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

export default RestaurentHomeScreen;

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
		color:'#523417', 
		justifyContent: "center",
		fontFamily:'Lobster-Regular',
		fontSize: 20,
		paddingTop:20,
		alignItems:'center',
	
	},
	
	RESTtextContainer:{
		color:'#79B343', 
		justifyContent: "center",
		fontFamily:'Comfortaa-Bold',
		fontSize: 15,
		paddingTop:20,
		alignItems:'center',
		
	},
	
	FindertextContainer:{
		color:'#EEEFF3', 
		justifyContent: "center",
		fontFamily:'Comfortaa-Bold',
		fontSize: 15,
		paddingTop:20,
		right:wp("2%"),
		alignItems:'center',
	},

	
	
	TextInputContainer:{
		fontSize:13,
		width:WIDTH -90,
		backgroundColor:'#ECECEC',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.00,

		elevation: 24,
		height:hp("48%"),	
		color:'white'
		
	},
	
	TextInputContainerOption:{
		fontSize:13,
		width:WIDTH -190,
		backgroundColor:'#455a64',
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
		bottom:hp("2%"),
		
	},
	
	padding:{
		paddingLeft:wp("5%"),
	},
	
	paddingX:{
		paddingLeft:wp("7%"),
	},
	
	
	alignTextInput:{
		paddingTop:hp("2%"),
		flexDirection: 'row',
		right:wp("9%"),
	},
	
	alignTextInput2:{
		left:wp("92%"),
		bottom:hp("90%")
	},

	alignItemsContainer:{
		alignItems:'center',
		paddingTop: hp("2%"),
		paddingLeft:wp("16%"),
	},
	
	alignLogoContainer:{
		top: hp("1%"),
		left: wp("2%"),
	},
	
	alignFinderContainer:{
		top: hp("62%"),
		right: wp("80%"),
	},
	
	alignOptionContainer:{
		top: hp("0.7%"),
		left: wp("6%"),
	},
	
	alignLogoTextContainer:{
		top: hp("1%"),
		left: wp("7%"),
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
		bottom: hp("9%"),
		left: wp("17%"),
	},
	
	
	LogoTextContainer:{
	left: wp("7%"),
	bottom: hp("1%"),
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
		fontSize: 18,
		paddingTop:hp("1%"),
		alignItems:'center',
	},
	
		LogoutContainer:{
		right:wp("8%")
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

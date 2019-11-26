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
			CheckBox,
			ImageBackground, } from 'react-native';
import { SearchBar } from 'react-native-elements';
import TimePicker from "react-native-24h-timepicker";		
import PhotoUpload from 'react-native-photo-upload'
import DateTimePicker from "react-native-modal-datetime-picker";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 	

const{width : WIDTH} = Dimensions.get('window')

class RestaurantRegisterScreen extends Component {
	
	    static navigationOptions = ({navigation}) =>({
		title : "Register",
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

showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };
 
  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };
 
  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };
  
 
  onCancel() {
    this.TimePicker.close();
  }
 
  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }
  

  render() {
	  const { search } = this.state;

    return (

	<ImageBackground style={styles.backgroundcontainer}>
		<StatusBar backgroundColor="#B9B9B9" barStyle="light-content" />
	
	<ScrollView>
	
		<View style= {styles.alignLogoTextContainer}>
				<Text style= {styles.TextHeadingContainer}>Register Here!</Text>	
				</View>
		
		
		<View style= {styles.paddingTextInput}>
		
		<View style= {styles.alignItemsContainer}>

			<View style={styles.alignTextInput}>
			
			<View style= {styles.TextInputContainer}>
						<Text style= {styles.RestTextontainer}>Restaurant</Text>
			</View>
			
			<View style= {styles.paddingContInput}>
		
			
			<View style= {styles.AddTextInputContainer}>
					
			<TextInput style= {styles.AddTextontainer}
						placeholder={'Name'}
						placeholderTextColor={'#79B343'}
						underLineColorAndroid='transparent'
						
						/>
			</View>
						
		 	</View>
		 
		</View>
		
				<View style={styles.alignTextInput}>
				
			<View style= {styles.TextInputContainer}>
						<Text style= {styles.RestTextontainer}>Owner</Text>
			</View>
			
			<View style= {styles.paddingContInput}>
		
			
			
			
			<View style= {styles.AddTextInputContainer}>
					
			<TextInput style= {styles.AddTextontainer}
						placeholder={'Name'}
						placeholderTextColor={'#79B343'}
						underLineColorAndroid='transparent'
						
						/>
			</View>
						
		 	</View>
		 
		</View>
		
				<View style={styles.alignTextInput}>
				
			<View style= {styles.TextInputContainer}>
						<Text style= {styles.RestTextontainer}>Contact</Text>
			</View>
			
			<View style= {styles.paddingContInput}>
		
			<View style= {styles.AddTextInputContainer}>
					
			<TextInput style= {styles.AddTextontainer}
						placeholder={'Number'}
						 keyboardType = 'numeric'
						placeholderTextColor={'#79B343'}
						underLineColorAndroid='transparent'
						
						/>
			</View>
						
		 	</View>
		 
		</View>
		
				<View style={styles.alignTextInput}>
				
			<View style= {styles.TextInputContainer}>
						<Text style= {styles.RestTextontainer}>Address</Text>
			</View>
			
			<View style= {styles.paddingContInput}>
		
			<View style= {styles.AddTextInputContainer}>
					
			<TextInput style= {styles.AddTextontainer}
						placeholder={'Address'}
						placeholderTextColor={'#79B343'}
						underLineColorAndroid='transparent'
						
						/>
			</View>
						
		 	</View>
		 
		</View>
		
						<View style={styles.alignTextInput}>
		
			<View style= {styles.TextInputContainer}>
						<Text style= {styles.RestTextontainer}>E-mail</Text>
			</View>
			
			<View style= {styles.paddingContInput}>
		
			<View style= {styles.AddTextInputContainer}>
					
			<TextInput style= {styles.AddTextontainer}
						placeholder={'E-mail'}
						placeholderTextColor={'#79B343'}
						underLineColorAndroid='transparent'
						
						/>
			</View>
						
		 	</View>
			
			
		 
		</View>
		
								<View style={styles.alignTextInput}>
		
			<View style= {styles.TextfoodInputContainer}>
						<Text style= {styles.RestTextontainer}>Food Type</Text>
			</View>
			
			<View style= {styles.paddingselectContInput}>
			<View style= {styles.paddingCojntInput}>
	
		
			<View style={{ flexDirection: 'row' }}>								
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'#79B343', 
								fontFamily:'Comfortaa-Medium',
								fontSize:13, 
								}}>Sri Lankan </Text>
								
				
			</View>
			<View style={{ flexDirection: 'row' }}>								
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'#79B343', 
								fontFamily:'Comfortaa-Medium',
								fontSize:13, 
								}}>Arabian </Text>
								
				
			</View>
			<View style={{ flexDirection: 'row' }}>								
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'#79B343', 
								fontFamily:'Comfortaa-Medium',
								fontSize:13, 
								}}>Western </Text>
								
				
			</View>
			
				<View style={{ flexDirection: 'row' }}>								
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'#79B343', 
								fontFamily:'Comfortaa-Medium',
								fontSize:13, 
								}}>Indian </Text>
								
				
			</View>
			
					<View style={{ flexDirection: 'row' }}>								
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'#79B343', 
								fontFamily:'Comfortaa-Medium',
								fontSize:13, 
								}}>Vegetarian </Text>
								
				
			</View>
			</View>
			</View>
		 
		</View>
		
		
										<View style={styles.alignTextInput2}>
		
			<View style= {styles.TextfoodInputContainer}>
						<Text style= {styles.RestTextontainer}>Facilities</Text>
			</View>
			
			<View style= {styles.paddingselectContInput}>
			<View style= {styles.paddingCojntInput}>
	
		
			<View style={{ flexDirection: 'row' }}>								
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'#79B343', 
								fontFamily:'Comfortaa-Medium',
								fontSize:13, 
								}}>Wifi</Text>
								
				
			</View>
			<View style={{ flexDirection: 'row' }}>								
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'#79B343', 
								fontFamily:'Comfortaa-Medium',
								fontSize:13, 
								}}>Parking</Text>
								
				
			</View>
			<View style={{ flexDirection: 'row' }}>								
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'#79B343', 
								fontFamily:'Comfortaa-Medium',
								fontSize:13, 
								}}>Child care</Text>
								
				
			</View>
			
				<View style={{ flexDirection: 'row' }}>								
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'#79B343', 
								fontFamily:'Comfortaa-Medium',
								fontSize:13, 
								}}>Liquor </Text>
								
				
			</View>
			
					<View style={{ flexDirection: 'row' }}>								
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'#79B343', 
								fontFamily:'Comfortaa-Medium',
								fontSize:13, 
								}}>Beach Front </Text>
								
				
			</View>
			
							<View style={{ flexDirection: 'row' }}>								
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'#79B343', 
								fontFamily:'Comfortaa-Medium',
								fontSize:13, 
								}}>Wheel Chair Accessible </Text>
								
				
			</View>
			
							<View style={{ flexDirection: 'row' }}>								
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'#79B343', 
								fontFamily:'Comfortaa-Medium',
								fontSize:13, 
								}}>Family Restaurant</Text>
								
				
			</View>
			
							<View style={{ flexDirection: 'row' }}>								
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'#79B343', 
								fontFamily:'Comfortaa-Medium',
								fontSize:13, 
								}}>Delivery</Text>
								
				
			</View>
			</View>
			
									
			</View>
		 
		</View>

		<View style={styles.alignTextInputX}>
		
		<View style= {styles.TextfoodInputContainer}>
						<Text style= {styles.RestTexttontainer}>Open Hours</Text>
			</View>
				<TouchableOpacity onPress={() => this.TimePicker.open()}
					>
			<View style= {styles.ButtonContainer}>
		
						<Text style= {styles.RestTextontainer}>open</Text>
			</View>
			</TouchableOpacity>
			<TimePicker
          ref={ref => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
			<View style= {styles.paddingXContInput}>
		
			<TouchableOpacity onPress={() => this.TimePicker.open()}
					>
			<View style= {styles.butInputContainer}>
			<Text style= {styles.AddTextXontainer}>Close</Text>
			</View>
			</TouchableOpacity>
			<TimePicker
          ref={ref => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
						
		 	</View>
			</View>
			
			
			<View style= {styles.alignItemsCXXontainer}>
				
			<View style= {styles.TextInputContainerXX}>
				    <MapView
       provider={PROVIDER_GOOGLE} 
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
		 
		</View>
		 
		</View>
		</View>
		

		</View>
	
		
		
			<View style= {styles.paddingTextInputADV}>

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
						<Text style= {styles.FindertextContainer}>Go</Text>	
						</View>
						
					</View>
					</View>
		</TouchableOpacity>
					</View>


		</View>
		<View style= {styles.Imagecrop}>
		</View>
		
		
		</ScrollView>
		
		</ImageBackground>
	

    );
  }
}

export default RestaurantRegisterScreen;

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
		fontFamily:'Poppins-Bold',
		fontSize: 18,
		paddingTop:20,
		alignItems:'center',
	
	},
	
	container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
	
	AddTextontainer:{
		color:'#79B343', 
		justifyContent: "center",
		fontFamily:'Comfortaa-Medium',
		fontSize: 13,
		top:hp("0.3%"),
		right:wp("5%"),
		alignItems:'center',
	},
	
	AddTextXontainer:{
		color:'#455a64', 
		justifyContent: "center",
		fontFamily:'Comfortaa-Bold',
		fontSize: 13,
		paddingTop:hp("2%"),
		alignItems:'center',
	},
	
	RestTextontainer:{
		color:'#455a64', 
		justifyContent: "center",
		fontFamily:'Comfortaa-Bold',
		fontSize: 15,
		paddingTop:hp("1.5%"),
		alignItems:'center',
	},
	
	RestTexttontainer:{
		color:'#455a64', 
		justifyContent: "center",
		fontFamily:'Poppins-Bold',
		fontSize: 15,
		paddingTop:hp("1.5%"),
		alignItems:'center',
		left:wp("5%"),
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
		fontSize: 20,
		paddingTop:20,
		alignItems:'center',
	},

	
	
TextInputContainer:{
		fontSize:13,
		width:WIDTH -220,
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
	
TextfoodInputContainer:{
		fontSize:13,
		width:WIDTH -220,
		height:40,	
		paddingLeft:40,
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
		width:WIDTH -220,
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
		fontFamily:'Comfortaa-Bold',
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
	
	TextInputContainerXX:{
		fontSize:13,
		width:WIDTH -60,
		borderWidth:1,
		borderRadius:0,
		borderColor:'#79B343',
		height:hp("30%"),	
		paddingLeft:35,

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
		right:wp("6%"),
		
	},
	
	paddingXContInput:{
		left:wp("2%"),
		
	},
	
	paddingCojntInput:{
		right:wp("6%"),
		top:hp("1%"),
		
	},
	
	paddingselectContInput:{
		paddingRight:wp("17%"),
		
	},
	
	paddingTextInputADV:{
		bottom:wp("30%"),
	},
	
	padding:{
		paddingLeft:wp("5%"),
	},
	
	paddingX:{
		paddingLeft:wp("50%"),
		top: hp("25%"),
	},
	
	
	alignTextInput:{
		paddingTop:hp("2%"),
		flexDirection: 'row',
		right:wp("9%"),
	},
	
		alignTextInputX:{
		paddingTop:hp("4%"),
		left:wp("8%"),
		flexDirection: 'row',
		paddingRight:wp("43%"),
	},
	
	alignTextInput2:{
		paddingTop:hp("2%"),
		flexDirection: 'row',
		left:wp("2%"),
	},

	alignItemsContainer:{
		alignItems:'center',
		paddingLeft:wp("16%"),
	},
	
	alignItemsCXXontainer:{
		alignItems:'center',
		top: hp("5%"),
		paddingRight:wp("15%"),
		
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
		paddingTop:hp("5%"),
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
	
ButtonContainer:{
		fontSize:13,
		width:WIDTH -300,
		borderWidth:1,
		backgroundColor:'#E7E7E7',
		borderColor:'#79B343',
		height:40,	
		paddingLeft:25,
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
	
	butInputContainer:{
		fontSize:13,
		width:WIDTH -300,
		borderWidth:1,
		backgroundColor:'#E7E7E7',
		borderColor:'#79B343',
		height:40,	
		paddingLeft:20,
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
		paddingTop: hp("8%"),
	},
	

});

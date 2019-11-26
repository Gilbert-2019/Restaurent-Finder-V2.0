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

class AdvanceSearchScreen extends Component {
	
	    static navigationOptions = {
		header : null,
	
	}

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
					<Text style= {styles.TextLoginContainer}>Mark! Can we search???</Text>	
					</View>
			</View>
			
		
		<View style= {styles.alignLogoTextContainer}>
				<Text style= {styles.TextHeadingContainer}>Advance Search</Text>	
				</View>
		
		
		<View style= {styles.paddingTextInput}>
		
		<View style= {styles.alignItemsContainer}>

					<View style={styles.alignTextInput}>		
		 <View stlye = {styles.alignInputContainer}>
			<View style= {styles.TextInputContainerX}>
			<Picker
				style={{backgroundcolor:'white', position:'absolute',bottom:0, left:'45%', right:'25%', top:'-20%', 
				fontFamily:'Comfortaa-Medium',
				fontSize:13,
				borderColor:'#03DAC5',
				color:'#757575'				}}
				selectedValue={this.state.pickerSelection}
				onValueChange={(itemValue, itemIndex) =>
					this.setState({pickerSelection: itemValue})
			}>
			
				<Picker.Item label="-Category -" value="Category" />
				<Picker.Item label="Lunch or breakfast " value="Lunch or breakfast " />
				<Picker.Item label="Dinner" value="Dinner" />
                <Picker.Item label="Desert" value="Desert" />
				<Picker.Item label="Cafes" value="Cafes" />
			</Picker>
			</View>
		 
				</View>
		</View>
		
							<View style={styles.alignTextInput}>		
		 <View stlye = {styles.alignInputContainer}>
			<View style= {styles.TextInputContainerX}>
			<Picker
				style={{backgroundcolor:'white', position:'absolute',bottom:0, left:'45%', right:'25%', top:'-20%', 
				fontFamily:'Comfortaa-Medium',
				fontSize:13,
				borderColor:'#03DAC5',
				color:'#757575'				}}
				selectedValue={this.state.pickerSelection}
				onValueChange={(itemValue, itemIndex) =>
					this.setState({pickerSelection: itemValue})
			}>
			
				<Picker.Item label="-Rating -" value="Rating" />
				<Picker.Item label="1 " value="1 " />
                <Picker.Item label="2 " value="2 " />
				<Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
				<Picker.Item label="5" value="5" />
			</Picker>
			</View>
		 
				</View>
		</View>
		
							<View style={styles.alignTextInput}>		
		 <View stlye = {styles.alignInputContainer}>
			<View style= {styles.TextInputContainerX}>
			<Picker
				style={{backgroundcolor:'white', position:'absolute',bottom:0, left:'45%', right:'25%', top:'-20%', 
				fontFamily:'Comfortaa-Medium',
				fontSize:13,
				borderColor:'#03DAC5',
				color:'#757575'				}}
				selectedValue={this.state.pickerSelection}
				onValueChange={(itemValue, itemIndex) =>
					this.setState({pickerSelection: itemValue})
			}>
			
				<Picker.Item label="-Food Type-" value="Food Type" />
				<Picker.Item label="Srilankan" value="Srilankan" />
                <Picker.Item label="Arabian " value="Arabian" />
				<Picker.Item label="Western" value="Western" />
                <Picker.Item label="Indian" value="Indian" />
				<Picker.Item label="Vegetarian" value="Vegetarian" />
			</Picker>
			</View>
		 
				</View>
		</View>
		
							<View style={styles.alignTextInput}>		
		 <View stlye = {styles.alignInputContainer}>
			<View style= {styles.TextInputContainerX}>
			<Picker
				style={{backgroundcolor:'white', position:'absolute',bottom:0, left:'45%', right:'25%', top:'-20%', 
				fontFamily:'Comfortaa-Medium',
				fontSize:13,
				borderColor:'#03DAC5',
				color:'#757575'				}}
				selectedValue={this.state.pickerSelection}
				onValueChange={(itemValue, itemIndex) =>
					this.setState({pickerSelection: itemValue})
			}>
			
				<Picker.Item label="-Facility-" value="Facility" />
				<Picker.Item label="WiFi" value="WiFi" />
                <Picker.Item label="Parking" value="Parking" />
				<Picker.Item label="Child Care" value="Child Care" />
				<Picker.Item label="Liquor" value="Liquor" />
                <Picker.Item label="Beach Front " value="Beach Front" />
				<Picker.Item label="Wheel chair accessible" value="Wheel chair accessible" />
                <Picker.Item label="Family restaurant" value="Family restaurant" />
				<Picker.Item label="Delivery" value="Delivery" />
			</Picker>
			</View>
		 
				</View>
		</View>
		
		</View>

		</View>
		
		
		
		
		
		
		
		
			<View style= {styles.paddingTextInputADV}>

		<View style= {styles.paddingX}>
		<TouchableOpacity onPress={() => this.props.navigation.navigate('AdvanceSearchResultScreen')}
					>
		<View style= {styles.TextInputContainerOption}>
		<View style= {styles.alignOptionContainer}>
		<Image
							style={{width:50, height: 50}}
							source={require('../images/LogoRest.png')}
							/>
							
							<View style= {styles.FinderContainer}>
						<Text style= {styles.FindertextContainer}>Search</Text>	
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

export default AdvanceSearchScreen;

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
		width:WIDTH -90,
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
		
	
	
		TextInputContainer2:{
		width:WIDTH -340,
		backgroundColor:'#79B343',
		height:hp("100%"),
		bottom:hp("3%"),
		
	},
	
	

		TextInputContainerX:{
		fontSize:12,
		width:WIDTH -90,
		borderWidth:1,
		fontFamily:'Comfortaa-Medium',
		borderColor:'#B9B9B9',
		backgroundColor:'#E7E7E7',
		borderColor:'#79B343',
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
		left: wp("25%"),
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

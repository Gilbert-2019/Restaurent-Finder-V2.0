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
			ImageBackground,
			ProgressBarAndroid,
			ActivityIndicator,			} from 'react-native';
		
import bgimg from '../images/RESTBG1.png'
import blurimg from '../images/BlurBg1.png'


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';	

const{width : WIDTH} = Dimensions.get('window')

class WelcomeScreen extends Component {
	
	    static navigationOptions = {
		header : null
	}

	constructor(props) {
		super(props);
		this.state = {
			isLoading:true,
			dataSource:null,
		}
		}

		componentDidMount() {
			setTimeout(() => {
				this.props.navigation.navigate('LandingScreen')
			}, 1500);
		}

  render() {
    return (
	<ImageBackground source={bgimg} style={styles.backgroundcontainer}>

		<StatusBar backgroundColor="#EEEFF3" barStyle="light-content" />
			
			<View style= {styles.alignLogoContainer}>
					<Image
					style={{width: 80, height: 80,}}
					source={require('../images/LogoRest.png')}
					/>
			
		
	
				<Text style= {styles.TextHeadingContainer}>Restaurant Finder</Text>	
				
				 <View style={styles.progrescontainer}>
							
							<ProgressBarAndroid styleAttr="Horizontal" color="#79B343" />


					</View>
				
			</View>
	
			
		</ImageBackground>


    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
	
	backgroundcontainer:{
	flex: 1,	
	width:null,
	height:null,
	},
	
	TextHeadingContainer : {
		color:'#79B343', 
		justifyContent: "center",
		fontFamily:'Lobster-Regular',
		fontSize: 22,
		paddingTop:10,
		alignItems:'center',
	
	},
	
	TextLoginContainer:{
		color:'#FFFFFF', 
		justifyContent: "center",
		fontFamily:'Poppins-Bold',
		fontSize: 18,
		paddingTop:20,
		alignItems:'center',
	
	},


	alignItemsContainer:{
		alignItems:'center',
		paddingTop: hp("10%"),
	},
	
	alignLogoContainer:{
		paddingTop: hp("30%"),
		justifyContent: "center",
		alignItems: "center" ,
	},
	
	alignLogoTextContainer:{
		justifyContent: "center",
		alignItems: "center" ,
		paddingTop: hp("10%"),
	},

	   progrescontainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingTop: hp("20%"),
  },


});

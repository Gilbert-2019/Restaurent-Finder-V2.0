import React, {Component} from 'react';
import {Platform, 
		StyleSheet, 
		Text, 
		View,
		StatusBar} from 'react-native';
		

		import LandingScreen from './src/pages/LandingScreen';
		import WelcomeScreen from './src/pages/WelcomeScreen';	
		import OwnerLoginScreen from './src/pages/OwnerLoginScreen';
		import CustomerLoginScreen from './src/pages/CustomerLoginScreen';
		import SignUpScreen from './src/pages/SignUpScreen';
		import RestaurentHomeScreen from './src/pages/RestaurentHomeScreen';
		import BasicSearchScreen from './src/pages/BasicSearchScreen';
		import AdvanceSearchScreen from './src/pages/AdvanceSearchScreen';
		import AdvanceSearchResultScreen from './src/pages/AdvanceSearchResultScreen';
		import RestaurantDetailScreen from './src/pages/RestaurantDetailScreen';
		import ReviewScreen from './src/pages/ReviewScreen';
		import RatingScreen from './src/pages/RatingScreen';
		import RestaurantRegisterScreen from './src/pages/RestaurantRegisterScreen';
		
		
		
		
		
		
		
				
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler'

const AppNavigator = createStackNavigator({
	
	WelcomeScreen:WelcomeScreen,
	LandingScreen:LandingScreen,
	OwnerLoginScreen:OwnerLoginScreen,
	CustomerLoginScreen:CustomerLoginScreen,
	SignUpScreen:SignUpScreen,
	RestaurentHomeScreen:RestaurentHomeScreen,
	BasicSearchScreen:BasicSearchScreen,
	AdvanceSearchScreen:AdvanceSearchScreen,
	AdvanceSearchResultScreen:AdvanceSearchResultScreen,
	RestaurantDetailScreen:RestaurantDetailScreen,
	ReviewScreen:ReviewScreen,
	RatingScreen:RatingScreen,
	RestaurantRegisterScreen:RestaurantRegisterScreen,


	
	
}, {	
	
	defaultNavigationOptions:{
		headerStyle:{
			backgroundColor:'#455a64'
			},
			
			headerTintColor: 'white',
			
			headerTitleStyle: {
				fontSize:17,
				flex:1,
				
			}
		}
		
	}


);

const App = createAppContainer(AppNavigator);

export default App;
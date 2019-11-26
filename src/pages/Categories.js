import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';


export default class Categories extends Component<{}>  {
   render(){
        return(
              
          <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }} >
                  <TouchableOpacity  style={{ flex: 1 }}
                    onPress={() => this.props.navigation.navigate('Scroll')}                  >
                        <Image style={styles.img} source={require('../images/h.jpg')}/>
                        <View style={styles.imgText}>
                            <Text style={styles.buttonText}>Lunch Or Breakfast</Text>
                       </View>
                  </TouchableOpacity>
              
                  <TouchableOpacity  style={{ flex: 1 }}
                    onPress={() => {  }} >
                      <Image style={styles.img} source={require('../images/g.jpg')}/>
                      <View style={styles.imgText}>
                          <Text style={styles.buttonText}>Enjoy Night Life</Text>
                      </View>
                  </TouchableOpacity>
              
            </View>
            <View style={{ flex: 1 }}>
                  <TouchableOpacity  style={{ flex: 1 }}
                    onPress={() => {  }} >
                      <Image style={styles.img} source={require('../images/e.jpg')}/>
                      <View style={styles.imgText}>
                          <Text style={styles.buttonText}>Cafes</Text>
                      </View>
                  </TouchableOpacity>
              
                  <TouchableOpacity  style={{ flex: 1 }}
                    onPress={() => {  }} >
                      <Image style={styles.img} source={require('../images/l.jpg')}/>
                      <View style={styles.imgText}>
                          <Text style={styles.buttonText}>Desert & Bakes</Text>
                      </View>
                  </TouchableOpacity>       
               
              </View>
        </View>
        )
    }

}


const styles = StyleSheet.create({
 
  buttonText:{
    fontSize: 23,
    color:'#ffffff',
    fontWeight:'900',
  },
  img:{
    width:400,
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    opacity:0.6
  },
  imgText:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems:'center',
    justifyContent:'center',
  }
 
});

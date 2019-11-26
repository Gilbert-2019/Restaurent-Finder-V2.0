import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';


export default class Lunch extends Component<{}>  {
   render(){
        return(              
          
          <View>     
            <View style={{ flex: 1 }}>
              <Image source={require('../images/j.jpg')} style={{width:318, height: '100%',opacity:0.7}}/>
              <View style={styles.imgText}>
                <Text  style={styles.buttonText}>Lunch Or Breakfast</Text>
              </View>
            </View>

            <View style={{ flex: 4 }}>
              <ScrollView>
                  <TouchableOpacity style={styles.box1} onPress={() => {  }}>
                      <Text style={styles.shopNameTxt}>Shop1</Text>
                      <Text>Address: No:20,Temple road, Kalagedihena, Thihariya</Text>
                  </TouchableOpacity> 

                  <TouchableOpacity style={styles.box2} onPress={() => {  }}>
                      <Text style={styles.shopNameTxt}>Shop2</Text>
                      <Text>Address: No:16, main road, Gampaha </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.box1} onPress={() => {  }}>
                      <Text style={styles.shopNameTxt}>Shop3</Text>
                      <Text>Address: No:20,Temple road, Kalagedihena, Thihariya</Text>
                  </TouchableOpacity> 

                  <TouchableOpacity style={styles.box2} onPress={() => {  }}>
                      <Text style={styles.shopNameTxt}>Shop4</Text>
                      <Text>Address: No:16, main road, Gampaha </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.box1} onPress={() => {  }}>
                      <Text style={styles.shopNameTxt}>Shop5</Text>
                      <Text>Address: No:20,Temple road, Kalagedihena, Thihariya</Text>
                  </TouchableOpacity> 

                  <TouchableOpacity style={styles.box2} onPress={() => {  }}>
                      <Text style={styles.shopNameTxt}>Shop6</Text>
                      <Text>Address: No:16, main road, Gampaha </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.box1} onPress={() => {  }}>
                      <Text style={styles.shopNameTxt}>Shop7</Text>
                      <Text>Address: No:20,Temple road, Kalagedihena, Thihariya</Text>
                  </TouchableOpacity> 

                  <TouchableOpacity style={styles.box2} onPress={() => {  }}>
                      <Text style={styles.shopNameTxt}>Shop8</Text>
                      <Text>Address: No:16, main road, Gampaha </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.box1} onPress={() => {  }}>
                      <Text style={styles.shopNameTxt}>Shop9</Text>
                      <Text>Address: No:20,Temple road, Kalagedihena, Thihariya</Text>
                  </TouchableOpacity> 

                  <TouchableOpacity style={styles.box2} onPress={() => {  }}>
                      <Text style={styles.shopNameTxt}>Shop 10</Text>
                      <Text>Address: No:16, main road, Gampaha </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.box1} onPress={() => {  }}>
                      <Text style={styles.shopNameTxt}>Shop 11</Text>
                      <Text>Address: No:20,Temple road, Kalagedihena, Thihariya</Text>
                  </TouchableOpacity> 

                  <TouchableOpacity style={styles.box2} onPress={() => {  }}>
                      <Text style={styles.shopNameTxt}>Shop 12</Text>
                      <Text>Address: No:16, main road, Gampaha </Text>
                  </TouchableOpacity>

             

              </ScrollView>
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
  imgText:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText:{
    fontSize: 23,
    color:'#ffffff',
    fontWeight:'900',
  },
  box1:{
    flex:1,
    backgroundColor:'skyblue'
  },
  box2:{
    flex:1,
    backgroundColor:'#4d88ff'
  },
  shopNameTxt:{
    fontSize:18,
    fontWeight:'500'
  }
 
 
});

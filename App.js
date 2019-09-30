/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";

import { View, TouchableOpacity,Text,ToastAndroid,Platform } from "react-native";




export default class App extends Component {
  handleClick(){
    if(Platform.OS==='android'){
      ToastAndroid.showWithGravityAndOffset(
        'We are learning!!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    }
  }
  render() {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#383837"}}>
        <TouchableOpacity style={{backgroundColor:"darkred",width:130,height:70,justifyContent:"center",alignItems:"center",borderRadius:40}} onPress={this.handleClick}>
          <Text style={{color:"white",fontSize:22}}>Touch me!</Text></TouchableOpacity>
      </View>
    );
  }
}

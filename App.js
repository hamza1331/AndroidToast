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
        'Mobile App is Awesome!!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    }
  }
  render() {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#2c362e"}}>
        <TouchableOpacity style={{backgroundColor:"darkgreen",width:130,height:70,justifyContent:"center",alignItems:"center",borderRadius:10}} onPress={this.handleClick}>
          <Text style={{color:"white",fontSize:22}}>Touch here</Text></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"darkblue",width:130,height:70,justifyContent:"center",alignItems:"center",borderRadius:10,marginTop:10}} onPress={this.handleClick}>
          <Text style={{color:"white",fontSize:22}}>Tap here</Text></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"darkred",width:130,height:70,justifyContent:"center",alignItems:"center",borderRadius:10,marginTop:10}} onPress={this.handleClick}>
          <Text style={{color:"white",fontSize:22}}>Click here</Text></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"darkcyan",width:130,height:70,justifyContent:"center",alignItems:"center",borderRadius:10,marginTop:10}} onPress={this.handleClick}>
          <Text style={{color:"white",fontSize:22,textAlign:"center"}}>What's inside?</Text></TouchableOpacity>
      </View>
    );
  }
}

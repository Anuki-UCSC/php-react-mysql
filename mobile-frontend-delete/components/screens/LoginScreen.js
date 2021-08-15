import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput , Button, TouchableOpacity} from 'react-native';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
        <View style={styles.textinputView}>
          <Text style={styles.logintext}>Email</Text>
        <TextInput 
            style={styles.textinputLogin}
            placeholder='example@gmail.com'/>
        </View>
        
        <View style={styles.textinputView}>
        <Text style={styles.logintext}>Password</Text>
        <TextInput
            style={styles.textinputLogin}             
            placeholder='*********'/>
        </View>

        <TouchableOpacity style={styles.signup_Button}>
        <Text style={styles.signup_Button_text}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signup_Button2}>
        <Text style={styles.signup_Button_text2}>SIGN UP</Text>
        </TouchableOpacity>
        {/* <Button style={styles.signup_Button} title='Sign in'/> */}
        
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinputLogin:{ 
      width:350,
      padding:6,
      borderBottomColor:'#4169E1',
      borderBottomWidth:2,
    },
    textinputView:{
      margin:20,
    },
    logintext:{
      color:'#4169E1',
      fontWeight: 'bold',
    },
    signup_Button:{
        width:300,
      marginTop:30,
      marginHorizontal:80,
      backgroundColor:'#4169E1',
      height:40,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20
    },
    signup_Button_text:{
      color:'#ffffff',
      fontSize:17,
      fontWeight:'bold',
    },
    signup_Button2:{
        width:300,
      marginTop:20,
      marginHorizontal:80,
      backgroundColor:'#ffffff',
      height:40,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20,
      borderWidth:2,
      borderColor:'#4169E1',
    },
    signup_Button_text2:{
      color:'#4169E1',
      fontSize:17,
      fontWeight:'bold',
    },
  });
  
import { StatusBar } from 'expo-status-bar';
import React from 'react';



import { StyleSheet, Text, View, TextInput , Button, TouchableOpacity} from 'react-native';
import LoginScreen from './components/screens/LoginScreen';
import ListViewScreen from './components/screens/ListViewScreen';
import EditScreen from './components/screens/EditScreen';
import AddScreen from './components/screens/AddScreen';


// const Stack =createStackNavigator();

export default function App() {


  return (

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='login' component={LoginScreen}/>
    //     <Stack.Screen name='list' component={ListViewScreen}/>
    //   </Stack.Navigator>
    // </NavigationContainer>

    <View style={styles.container}>
      <LoginScreen/>
      {/* <ListViewScreen/> */}
      {/* <EditScreen/> */}
      {/* <AddScreen/> */}
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
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

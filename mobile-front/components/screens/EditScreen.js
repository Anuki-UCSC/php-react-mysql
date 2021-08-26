import React from 'react'
import { View,Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

// Fontawsome Icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


export default function EditScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.h1view}>
            <Text style={styles.h1}>Edit Details</Text>
            <FontAwesomeIcon icon={faEdit} size={24}/> 
            </View>
            
            <View style={styles.texteditview}>
                <Text>Name</Text>
                <TextInput 
                style={styles.textinput}
                placeholder='Siddharth Nigam'/>
            </View>
            <View style={styles.texteditview}>
                <Text>UserName</Text>
                <TextInput 
                style={styles.textinput}
                placeholder='SidNigam'/>
            </View>
            <View style={styles.texteditview}>
                <Text>Email</Text>
                <TextInput 
                style={styles.textinput}
                placeholder='sidnugam@gmail.com'/>
            </View>
            <TouchableOpacity style={styles.savechangesBtn}>
                <View>
                    <Text style={styles.savechangesBtnText}>Save Changes</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.savechangesBtnText2}>Back</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        marginTop:100
    },
    textinput:{
        // backgroundColor:'red',

    },
    texteditview:{
        width:300,
        paddingTop:30,
        paddingBottom:5,
        borderBottomWidth:2,
        borderBottomColor:'#4169E1'
    },
    savechangesBtn:{
        backgroundColor:'#4169E1',
        padding:5,
        marginTop:40,
        width:300,
        paddingVertical:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
    },
    savechangesBtnText:{
        color:'#fff',
        textTransform:'uppercase',
        fontWeight:'bold',
    },
    h1:{
        alignItems:'center',
        fontSize:24,
        fontWeight:'bold',
        color:'black',
        paddingRight:10,
        top:-3,

    },
    h1view:{
        flexDirection:'row'
    },
    savechangesBtnText2:{
        color:'#4169E1',
        textTransform:'uppercase',
        fontWeight:'bold',
        padding:20
    }
})

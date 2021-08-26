import React from 'react'
import { View,Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

// Fontawsome Icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


export default function AddScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.h1view}>
            <Text style={styles.h1}>Add New</Text>
            <FontAwesomeIcon icon={faUserPlus} size={24}/> 
            </View>
            
            <View style={styles.texteditview}>
                <Text>Name</Text>
                <TextInput 
                style={styles.textinput}
                placeholder='Enter Name'/>
            </View>
            <View style={styles.texteditview}>
                <Text>UserName</Text>
                <TextInput 
                style={styles.textinput}
                placeholder='Enter Username'/>
            </View>
            <View style={styles.texteditview}>
                <Text>Email</Text>
                <TextInput 
                style={styles.textinput}
                placeholder='enter Email'/>
            </View>
            <TouchableOpacity style={styles.saveBtn}>
                <View>
                    <Text style={styles.saveBtnText}>Save</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.saveBtnText2}>Back</Text>
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
    saveBtn:{
        backgroundColor:'#4169E1',
        padding:5,
        marginTop:40,
        width:300,
        paddingVertical:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
    },
    saveBtnText:{
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
    saveBtnText2:{
        color:'#4169E1',
        textTransform:'uppercase',
        fontWeight:'bold',
        padding:20
    }
})

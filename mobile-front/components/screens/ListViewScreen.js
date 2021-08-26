import React from 'react'
import { View,Text, StyleSheet,Image, TextInput} from 'react-native'

// fontawsome -icon libraries
import { faEdit, faHighlighter, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function ListViewScreen() {
    return (
        <View style={styles.container}>
        <View style={styles.listviewscreen}>
        <View style={styles.container}>
            <View>
                <View>
                    {/* <View>
                        <Image src='../../assets/icon.png'/>
                    </View> */}
                    <View style={styles.view1}>
                        <View style={styles.view2}>
                        <Text style={styles.text1}>Sinddharth Nigam</Text>
                        <Text style={styles.text3}>Username: SiddhNigam</Text>
                        <Text style={styles.text3}>Email: siddarth@gmail.com</Text>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../../assets/favicon.png')}
                        />
                         <View style={styles.editicon}>
                            <View style={styles.editiconinside}>
                            <FontAwesomeIcon icon={faEdit} size={20} color={'gray'}/>
                            </View>
                            <View style={styles.editiconinside}>
                            <FontAwesomeIcon icon={faTrash} size={20} color={'gray'}/>
                            </View>
                        </View>
                        </View>
                    </View>
                    <View style={styles.view1}>
                        <View style={styles.view2}>
                        <Text style={styles.text1}>Anuki De Alwis</Text>
                        <Text style={styles.text3}>Username: AnuGaya</Text>
                        <Text style={styles.text3}>Email: anugaya@gmail.com</Text>
                        <View style={styles.editicon}>
                            <View style={styles.editiconinside}>
                            <FontAwesomeIcon icon={faEdit} size={20} color={'gray'}/>
                            </View>
                            <View style={styles.editiconinside}>
                            <FontAwesomeIcon icon={faTrash} size={20} color={'gray'}/>
                            </View>
                        </View>
                        </View>
                    </View>
                    <View style={styles.view1}>
                        <View style={styles.view2}>
                        <Text style={styles.text1}>Sanduni Fernando</Text>
                        <Text style={styles.text3}>Username: Sandu</Text>
                        <Text style={styles.text3}>Email: sandu@gmail.com</Text>
                        <View style={styles.editicon}>
                            <View style={styles.editiconinside}>
                            <FontAwesomeIcon icon={faEdit} size={20} color={'gray'}/>
                            </View>
                            <View style={styles.editiconinside}>
                            <FontAwesomeIcon icon={faTrash} size={20} color={'gray'}/>
                            </View>
                        </View>
                        </View>
                        
                    </View>
                    
                </View>
            </View>
        </View>

            <View style={styles.addbutton}>
                <Text style={styles.addbuttontxt}>+</Text>
            </View>
        </View>
        </View>
    )
}

const styles=StyleSheet.create({
    listviewscreen:{
        flex:1,
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view1:{
        backgroundColor:'#4169E1',
        width:370,
        borderRadius:8,
        margin:5,
    },
    view2:{
        marginLeft:8,
        padding:15,
        backgroundColor:'#f0f0f0',
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
    },
    text1:{
        fontSize:20,
        paddingBottom:5,
    },
    text3:{

    },
    text3:{

    },
    addbutton:{
        backgroundColor:'#4169E1',
        borderRadius:30,
        bottom:20,
        width:57,
        alignSelf:'flex-end',
        zIndex:50,
    },
    addbuttontxt:{
        fontSize:40,
        paddingHorizontal:18,
        color:'white'
    },
    editicon:{
        flexDirection:'row',
        alignSelf:'flex-end',
    },
    editiconinside:{
        paddingHorizontal:5
    }

})
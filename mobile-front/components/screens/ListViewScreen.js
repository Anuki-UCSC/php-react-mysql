import React from 'react'
import { View,Text, StyleSheet,Image} from 'react-native'

export default function ListViewScreen() {
    return (
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
                        </View>
                    </View>
                    
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view1:{
        backgroundColor:'red',
        width:350,
        borderRadius:8,
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
})
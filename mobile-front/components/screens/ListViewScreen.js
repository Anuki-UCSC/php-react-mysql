import React from 'react'
import { View,Text, StyleSheet,Image } from 'react-native'

export default function ListViewScreen() {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <View>
                        <Image src='../../assets/icon.png'/>
                    </View>
                    <View>
                        <Text>Sinddharth Nigam</Text>
                        <Text>Username: SiddhNigam</Text>
                        <Text>Email: siddarth@gmail.com</Text>
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
    }
})
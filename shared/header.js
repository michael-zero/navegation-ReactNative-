import React from 'react';
import {StyleSheet, Text, View} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import {Dimensions} from 'react-native'


export default function Header({navigation}){

    const openMenu = () => {
        navigation.openDrawer();
    }

    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' onPress={openMenu}  size={30} style={styles.icon}/>
            <View>
                <Text style={styles.headerText}>Gamezone</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        
        width: Dimensions.get('screen').width,
       
        // height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4511e',
        
        
    }
    , headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },

    icon:{
        position: 'absolute',
        left: 15,
       
    }
})
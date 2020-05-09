import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import {Dimensions} from 'react-native'


export default function Header({navigation, contato}){

    const openMenu = () => {
        navigation.openDrawer();
    }

    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name='menu' onPress={openMenu}  size={30} style={styles.icon}/>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
    <Text style={styles.headerText}>{contato}</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {

        height: 55,
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'cornsilk',
        
        
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
       
    },

    headerImage:{
        width: 26,
        height: 26,
        marginHorizontal: 10,
    }, 

    headerTitle:{
        flexDirection: 'row',
      
    }
})
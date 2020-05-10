import React from 'react'
import {View, Text, StyleSheet, Linking} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import * as MailComposer from 'expo-mail-composer'

function Contato() {

    const message = 'Olá, queria solicitar seus serviços, pois preciso de uma aplicação. '

    function sendMail(){
      MailComposer.composeAsync({
        subject: 'Fale com o Dev!',
        recipients: ['zeromichael98@gmail.com'],
        body: message
      })
    }

    function sendWhatsapp(){
      Linking.openURL(`whatsapp://send?phone=5586988167642?&&text=${message}`);
    }

    return (
      <View style={styles.container}>
        
        <View style={styles.caixaInfo}>
            <Feather name="code" size={24} color="black"/>   
            <Text style={styles.info}>Michael Lesley</Text>
        </View>
      
        <View style={styles.caixaInfo}>
            <Ionicons name="ios-school" size={24} color="black" />
            <Text  style={styles.info}>Universidade Federal do Piauí</Text>
        </View>


     
        <View style={styles.caixaSociais}>
        <TouchableOpacity onPress={sendWhatsapp}>
          <FontAwesome name='whatsapp' size={44} color='black' style={{marginRight: 15}}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={sendMail}>
           <Fontisto name="email" size={44} color="black" />
        </TouchableOpacity>
         
        </View>   
    

       
      
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      margin: 10,
    },
    caixaInfo:{
      flexDirection: 'row',
      padding: 10,
      fontSize: 18,
      borderWidth: 1,
      borderRadius: 6,
      margin: 8,
      
    },
    info:{
      fontSize: 16,
      marginHorizontal: 10,
    },
    caixaSociais:{
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    }
})

  export default Contato;
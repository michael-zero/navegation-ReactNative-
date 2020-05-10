import React from 'react'
import {View, Text, Button, StyleSheet, Image} from 'react-native'
import Card from '../shared/card';
import {images} from '../styles/global'

export default function Sobre({route, navigation}){

    const {description} = route.params;
    const {rating} = route.params;
   

    return(
        
       <View style={styles.caixa}>

       
        <Text>{description}</Text>
        <View style={styles.rating}>
            <Text>Avaliação: </Text>
            <Image source={images.ratings[rating]}/>
        </View>
        </View>
      
    )
}

const styles = StyleSheet.create({

   caixa: {
    width: 350,
    borderRadius: 6,
    elevation: 3, //distancia
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 10,
    
   },
  
   
})
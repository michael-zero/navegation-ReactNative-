import React from 'react'
import {View, Text, Button, StyleSheet, Image} from 'react-native'
import Card from '../shared/card';
import {images} from '../styles/global'

export default function Sobre({route, navigation}){

    const {description} = route.params;
    const {rating} = route.params;
   

    return(
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <Card>
        <Text>{description}</Text>
        <View style={styles.rating}>
            <Text>Avaliação: </Text>
            <Image source={images.ratings[rating]}/>
        </View>
        </Card>
       </View>
    )
}

const styles = StyleSheet.create({

})
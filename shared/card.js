import React from 'react'
import { StyleSheet, View} from 'react-native'

export default function Card(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        width: 350,
        borderRadius: 6,
        elevation: 3, //distancia
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 5,

    },
    cardContent: {
        // flexDirection: 'row',
        marginHorizontal: 12,
        marginVertical: 10,
        
    }
})
import * as React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {Dimensions} from 'react-native'

import Home from '../telas/home'
import Sobre from '../telas/sobre'
import Header from '../shared/header'

const Stack = createStackNavigator();

export default function Pilha(){
    return(
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          
        options={({navigation}) => {
          return{
              headerTitle: () => <Header contato={'Filmes'} navigation={navigation}/>
              ,headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#fff',
              }  
        }
        }}/>

        <Stack.Screen name='Sobre' component={Sobre} options={
         {
          
           headerBackground: () =>  <ImageBackground source={require('../assets/game_bg.png') } style={styles.header}></ImageBackground>,
           
         }
        }>

        </Stack.Screen>

      </Stack.Navigator>
    // </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 25,
    height: 50,
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cornsilk',
    
    
}
})

// options={({navigation}) => {
//   return{
//       headerBackground: () => <Header navigation={navigation}/>,
//       headerTitleAlign: 'center'   
// }
// }}

// options={{
//   title: 'My home',
//   headerStyle: {
//     backgroundColor: '#f4511e',
    
//   },
//   headerTintColor: '#fff',
//   headerTitleAlign: 'center',
// }}
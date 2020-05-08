import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


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
              headerTitle: () => <Header navigation={navigation}/>
              ,headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#f4511e'
              }  
        }
        }}/>

        <Stack.Screen name='Sobre' component={Sobre}></Stack.Screen>

      </Stack.Navigator>
    // </NavigationContainer>
    )
}


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
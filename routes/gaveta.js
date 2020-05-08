import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Pilha from './pilha'
import PilhaContato from './pilhaContato'


const Drawer = createDrawerNavigator();

export default function Gaveta(){
    return(
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Pilha">
          <Drawer.Screen name="Pilha" component={Pilha} />
          <Drawer.Screen name="Contato" component={PilhaContato}/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
}
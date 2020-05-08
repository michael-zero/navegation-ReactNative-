import React from 'react'
import { createStackNavigator, HeaderBackground, HeaderTitle} from '@react-navigation/stack'

import Contato from '../telas/contato'
import Header from '../shared/header'

const Pilha = createStackNavigator();

export default function PilhaContato(){
    return(
        <Pilha.Navigator>
            <Pilha.Screen name="Gamezone" component={Contato}
            options={({navigation}) => {
                return{
                    headerTitle: () => <Header navigation={navigation}/>,
                    headerTitleAlign: 'center',
                    headerStyle:{
                        backgroundColor: '#f4511e'
                    }   
              }
              }}/>
        </Pilha.Navigator>
    );
}


// options={{headerBackground: () => <Header/>, headerTintColor: '#fff',
// headerTitleAlign: 'center'}}


// options={({navigation}) => {
//     return {
//         headerTitle: () => <Header navigation={navigation}/>
//     }
// }}
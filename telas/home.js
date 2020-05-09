import React, { useState } from 'react'
import {View, Text, Button} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/card'

function HomeScreen({navigation}) {
    
  const filmes = [
    {nome: 'Jogos mortais', rating: 5 ,description: 'Saw (bra: Jogos Mortais; prt: Saw - Enigma Mortal) é um filme independente estadunidense de 2004, o primeiro longa-metragem da série de terror e suspense Saw, escrito por James Wan e Leigh Whannell e dirigido por James Wan.', key: '1'},
    {nome: 'Mr. robot', rating: 3, description: 'Elliot (Rami Malek) é um jovem programador que trabalha como engenheiro de segurança virtual durante o dia, e como hacker vigilante durante a noite. Elliot se vê numa encruzilhada quando o líder (Christian Slater) de um misterioso grupo de hacker o recruta para destruir a firma que ele é pago para proteger.', key: '2'},
    {nome: 'Vikings', rating: 4, description: 'Vikings é inspirada nas sagas do Viking Ragnar Lothbrok, um dos mais conhecidos heróis nórdicos lendários e chamado de flagelo da Inglaterra e da França. A série retrata Ragnar como um fazendeiro que alcança a fama por seus ataques bem-sucedidos na Inglaterra e, mais tarde, se torna um Rei escandinavo, com o apoio de sua família e colegas guerreiros: seu irmão Rollo, seu filho Bjorn Flanco de Ferro, e suas esposas, a escudeira Lagertha e a princesa Aslaug.', key: '3'}
  ];
  
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{flex: 1,  flexDirection: 'row'}}>
          <FlatList
          data={filmes}
          renderItem={({item}) => (
           <TouchableOpacity onPress={() => navigation.navigate('Sobre', item)}>
              <Card>
               <Text>{item.nome}</Text>
              </Card>
           </TouchableOpacity>
          )}
          />
       </View>

 {/* <Button title='push' color='coral' onPress={() => {navigation.push('Sobre')}}/> */}
      </View>
    );
  }

  export default HomeScreen;
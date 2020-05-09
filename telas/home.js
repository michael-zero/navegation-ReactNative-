import React, { useState } from 'react'
import {View, Text, Button, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm from './reviewForm'

function HomeScreen({navigation}) {
    
  const [modalOpen, setModalOpen] = useState(false);

  const [filmes, setFilmes ]= useState([
    {nome: 'Jogos mortais', rating: 5 ,description: 'Saw (bra: Jogos Mortais; prt: Saw - Enigma Mortal) é um filme independente estadunidense de 2004, o primeiro longa-metragem da série de terror e suspense Saw, escrito por James Wan e Leigh Whannell e dirigido por James Wan.', key: '1'},
    {nome: 'Mr. robot', rating: 3, description: 'Elliot (Rami Malek) é um jovem programador que trabalha como engenheiro de segurança virtual durante o dia, e como hacker vigilante durante a noite. Elliot se vê numa encruzilhada quando o líder (Christian Slater) de um misterioso grupo de hacker o recruta para destruir a firma que ele é pago para proteger.', key: '2'},
    {nome: 'Vikings', rating: 4, description: 'Vikings é inspirada nas sagas do Viking Ragnar Lothbrok, um dos mais conhecidos heróis nórdicos lendários e chamado de flagelo da Inglaterra e da França. A série retrata Ragnar como um fazendeiro que alcança a fama por seus ataques bem-sucedidos na Inglaterra e, mais tarde, se torna um Rei escandinavo, com o apoio de sua família e colegas guerreiros: seu irmão Rollo, seu filho Bjorn Flanco de Ferro, e suas esposas, a escudeira Lagertha e a princesa Aslaug.', key: '3'}
  ]);
  
  const addFilme = (filme) => {
    filme.key = Math.random().toString();
    setFilmes((filmesAtuais) => {
      return [filme, ...filmesAtuais];
    });
    setModalOpen(false);
  }

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
            name='close'
            size={24}
            style={{...styles.modalToggle, ...styles.modalClose}}
            onPress={() => setModalOpen(false)}
            />
            <ReviewForm addFilme={addFilme}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
      name='add'
      size={24}
      style={styles.modalToggle}
      onPress={() => setModalOpen(true)}
      />

        <View style={{flex: 1,  flexDirection: 'row', justifyContent: 'center'}}>
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

  const styles = StyleSheet.create({
    modalToggle:{
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      borderRadius: 10, 
      alignSelf: 'center'
    },
    modalClose: {
      marginTop: 20,
      marginBottom: 0,  
    },
    modalContent: {
      flex: 1,
    }
  })

  export default HomeScreen;
import React from 'react'
import {View, Text, Button} from 'react-native'

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tela inicial</Text>
        <Button title='push' color='coral' onPress={() => {navigation.push('Sobre')}}/>
      </View>
    );
  }

  export default HomeScreen;
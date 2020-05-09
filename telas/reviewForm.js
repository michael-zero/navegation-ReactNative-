import React from 'react'
import {StyleSheet, Button, View, Text} from 'react-native'
import {Formik} from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import  { globalStyles } from '../styles/global'

export default function ReviewForm({addFilme}){
    return(
        <View style={{ padding: 24 }}>
            <Formik
                initialValues={{nome: '', description: '', rating: ''}}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addFilme(values);
                   // console.log(values);
                }}
            >

                {(props) => (
                    <View>
                        <TextInput
                        style={globalStyles.input}
                        placeholder='Review title'
                        onChangeText={props.handleChange('nome')}
                        value={props.values.nome}
                        />

                        <TextInput
                        multiline
                        style={globalStyles.input}
                        placeholder='Review descrição'
                        onChangeText={props.handleChange('description')}
                        value={props.values.description}
                        />

                        <TextInput
                        style={globalStyles.input}
                        placeholder='Avaliação (1-5)'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        keyboardType='numeric'
                        />

                        <Button title='submit' color='maroon' onPress={props.handleSubmit}/>

                    </View>
                )}

            </Formik>
        </View>
    )
}

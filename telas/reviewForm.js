import React from 'react'
import {StyleSheet, Button, View, Text} from 'react-native'
import {Formik} from 'formik'
import { TextInput } from 'react-native-gesture-handler'
import  { globalStyles } from '../styles/global'
import * as yup from 'yup'
import FlatButton from '../shared/button'

const filmeSchema = yup.object({
    nome: yup.string()
    .required()
    .min(4),

    description: yup.string()
    .required()
    .min(10),

    rating: yup.string()
    .required()
    .test('is-num-1-5', 'Avaliação entre 1-5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })

})

export default function ReviewForm({addFilme}){
    return(
        <View style={{ padding: 24 }}>
            <Formik
                initialValues={{nome: '', description: '', rating: ''}}
                validationSchema={filmeSchema}
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
                        placeholder='Nome'
                        onChangeText={props.handleChange('nome')}
                        value={props.values.nome}
                        onBlur={props.handleBlur('nome')}
                        />

                <Text style={globalStyles.errorText}>{ props.touched.nome && props.errors.nome}</Text>

                        <TextInput
                        multiline minHeight={100}
                        style={globalStyles.input}
                        placeholder='Descrição'
                        onChangeText={props.handleChange('description')}
                        value={props.values.description}
                        onBlur={props.handleBlur('description')}
                        />

<Text style={globalStyles.errorText}>{ props.touched.description && props.errors.description}</Text>
                        <TextInput
                        style={globalStyles.input}
                        placeholder='Avaliação (1-5)'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        keyboardType='numeric'
                        onBlur={props.handleBlur('rating')}
                        />

<Text style={globalStyles.errorText}>{ props.touched.rating && props.errors.rating}</Text>

                        <FlatButton text='submit' onPress={props.handleSubmit}/>

                    </View>
                )}

            </Formik>
        </View>
    )
}

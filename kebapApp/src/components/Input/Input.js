import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './Input.styles';

function Input({ label, onChangeText, placeHolder }) {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input_container} 
            placeholder={placeHolder} 
            onChangeText={onChangeText}>
            </TextInput>
        </View>
    )
}

export default Input;
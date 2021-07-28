import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import Button from '../components/Button';


export default Welcome = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Welcome</Text>
            <Button text="Üye Kaydı Oluştur" onPress={null} />
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
       
    },
});


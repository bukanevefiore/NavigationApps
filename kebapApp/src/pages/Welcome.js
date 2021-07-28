import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import Button from '../components/Button';


export default Welcome = ({navigation}) => {

    function goToMemberSign() {
        navigation.navigate('MemberSignScreen');
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Kebap Spor Salonu</Text>
            <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign} />
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


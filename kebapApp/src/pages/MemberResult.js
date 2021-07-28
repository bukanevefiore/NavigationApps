import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

function MemberSignResult({route}) {

    const {user} =route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.baslik}>KAYIT BİLGİLERİ</Text>
            <Text style={styles.label}>Ad : {user.ad}</Text>
            <Text style={styles.label}>Soyad : {user.soyad}</Text>
            <Text style={styles.label}>Yaş : {user.yas}</Text>
            <Text style={styles.label}>E-posta : {user.eposta}</Text>
            <Text style={styles.label}>Şehir : {user.sehir}</Text>
        </SafeAreaView>
    )
}

export default MemberSignResult;

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    container: {
        margin: 20
    },
    baslik: {
        fontSize: 40,
        margin: 20
    }
})
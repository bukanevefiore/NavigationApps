import React, { useState } from 'react';
import { View, Text, SafeAreaView, Alert } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';


function MemberSign({navigation}) {

    const [ad, setAd] = useState(null);
    const [soyad, setSoyad] = useState(null);
    const [yas, setYas] = useState(null);
    const [eposta, setEposta] = useState(null);
    const [sehir, setSehir] = useState(null);

    // verileri diğer sayfaya gönderme
    function handleSubmit() {
        if (!ad || !soyad || !yas || !eposta || !sehir) {
            Alert.alert("Kebap Spor Salonu", "Lütfen tüm alanları doldurun!");
            return;
        }

        const user = {
            ad,
            soyad,
            yas,
            eposta,
            sehir
        }

        navigation.navigate('MemberSignResultScreen', {user});

    }



    return (
        <SafeAreaView >
            <Input label="Üye Adı" placeHolder="Üye adını giriniz..." onChangeText={setAd} />
            <Input label="Üye Soyad" placeHolder="Üye soyadını giriniz..." onChangeText={setSoyad} />
            <Input label="Üye Yaş" placeHolder="Üye yaşını giriniz.." onChangeText={setYas} />
            <Input label="E Posta" placeHolder="Üye e-posta giriniz..." onChangeText={setEposta} />
            <Input label="Şehir" placeHolder="Üye şehir giriniz..." onChangeText={setSehir} />
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        </SafeAreaView>
    )
}

export default MemberSign;
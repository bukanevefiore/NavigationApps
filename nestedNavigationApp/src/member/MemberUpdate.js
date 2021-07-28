import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';


function MemberUpdate({navigation}) {
    return (
        <SafeAreaView>
            <Text>Member Update</Text>
            <Button title="Go Profile Edit" onPress={() => navigation.navigate('ProfileEdit')} />
        </SafeAreaView>
    )
}

export default MemberUpdate;
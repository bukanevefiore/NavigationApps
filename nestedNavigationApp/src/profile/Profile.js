import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';


function Profile({navigation}) {

    return (
        <SafeAreaView>
            <Text>Profile</Text>
            <Button title="Go Profile Edit" onPress={() => navigation.navigate('ProfileEdit')} />
        </SafeAreaView>
    )
}

export default Profile;
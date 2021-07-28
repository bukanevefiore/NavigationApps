import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';


function Member({navigation}) {

    return(
        <SafeAreaView> 
            <Text>Member</Text>
            <Button title=" Go Detail" onPress={() => navigation.navigate('MemberDetail')}/>
        </SafeAreaView>
    )
}

export default Member;
import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';


function MemberDetail({navigation}) {

    return (
        <SafeAreaView>
            <Text>Member Detail</Text>
            <Button title="Go Update" onPress={() => navigation.navigate('MemberUpdate')}/>
        </SafeAreaView>
    )
}

export default MemberDetail;
import * as React from 'react';
import { View, Text } from 'react-native';
import { Axios } from 'axios';
export default function HalamanUtama({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
            onPress={() => alert('Ini adalah Halaman "Utama".')}
            style={{ fontSize: 26, fontWeight: 'bold' }}>Halaman Utama</Text>
        </View>
        
    )
}
import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, style } from "react-native";
// import API from "../API";
// import MainContainer from "../MainContainer";

export default function Bro({ title, Press }) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: 'black',
                borderRadius: 10,
                alignItems: 'center',
                width: 300,
                paddingVertical: 10,
                marginVertical: 20,
            }}
            onPress={Press}>
                <Text style={{fontSize: 28, color: 'white'}}>{title}</Text>
        </TouchableOpacity>
    )
}
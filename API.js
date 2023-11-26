import { View, Text } from "react-native";
import React, { useState } from "react";
import Bro from "./Tampilan/Bro";
import axios from "axios";
import react from "react"
import { FlatList } from "react-native-gesture-handler";

export default function API() {
    const [data, setData] = useState([]);
    const baseURL = 'https://jsonplaceholder.typicode.com/';

    const getAPI = () => {
        axios({
            method: 'GET',
            url: '${baseURL}/posts'
        }).then(res =>{ 
            console.log(res);
            setData(res.data)}).catch(err => console.log(err))
    }

    const get_by_ID = () => {
        axios({
            method: 'GET',
            url: '${baseURL}/posts/11'
        }).then(res =>{ 
            console.log(res.data);
            setData(res.data)}).catch(err => console.log(err))
    }

    const postAPI = () => {
        axios({
            method: 'POST',
            url: '${baseURL}/posts',
            body: JSON.stringify({
                id: 101,
                title: 'New Title',
                body: 'New Body for the data'
            })
        }).then(res => console.log(res)).catch(err => console.log(err))
    }

    const patchAPI = () => {
        axios({
            method: 'PATCH',
            url: '${baseURL}/posts/16',
            body: JSON.stringify({
                title : 'Updated Title',
            })
        }).then(res => console.log(res)).catch(err => console.log(err))
    }

    const deleteAPI = () => {
        axios({
            method: 'DELETE',
            url: '${baseURL}/posts/16'
        }).then(res => console.log(res)).catch(err => console.log(err))
    }

    return (
        <View>
            <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: "center", color: "black" }}>API</Text>

            <Bro title='GET' Press={getAPI} />
            <Bro title='GET' Press={get_by_ID} />
            <Bro title='POST' Press={postAPI} />
            <Bro title='PATCH' Press={patchAPI} />
            <Bro title='DELETE' Press={deleteAPI} />

            
<FlatList data={data} ListEmptyComponent={() => <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>NO Data</Text>} 
            
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
            <View style={{ paddingHorizontal}}>
                <Text style={{ fontSize: 22, color: 'black' }}>Id: {item.id}</Text>
                <Text style={{ fontSize: 22, color: 'black' }}numberOfLines={1}>Title: {item.title}</Text>
                <Text style={{ fontSize: 22, color: 'black' }}numberOfLines={1}>Body: {item.body}</Text>
            </View>
                 }}

            />
        </View>
    );
}
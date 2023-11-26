import * as React from 'react';
// import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Gestur from 'react'
import { Axios } from 'axios';
import API from './API';


//Tampilan
import HalamanUtama from './Tampilan/HalamanUtama';
import HalamanAbout from './Tampilan/HalamanAbout';
import HalamanPengaturan from './Tampilan/HalamanPengaturan';

//Nama Halaman
const halamanutama = 'Utama';
const halamanabout = 'About';
const halamanpengaturan = 'Pengaturan';

const Tab = createBottomTabNavigator();

// class App extends React.Component{
//     render() {
//         return(
//             <API />
//         )
//     }
// }

export default function MainContainer(){
    return(

        
        // <View>
        //     <Text>Halo Dayat</Text>
        // </View>
        <NavigationContainer>
            <Tab.Navigator
            initialRoutName={halamanutama}
            screenOptions={({route}) => ({
                tabBarActiveTintColor: 'brown',
                tabBarInactiveTintColor: 'grey',
                tabBarLabelStyle:{ paddingBottom:10, fontSize: 10 },
                tabBarStyle: {padding: 10, height: 70},
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === halamanutama) {
                        iconName = focused ? 'home' : 'home-outline';
                    }else if (rn === halamanabout) {
                        iconName = focused ? 'list' : 'list-outline';
                    }else if (rn === halamanpengaturan) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>

                },
            })}
            // tabBarOptions={{ 
            //     activeTintColor: 'brown',
            //     inactiveTintColor: 'grey',
            //     labelStyle: { paddingBottom:10, fontSize: 10 },
            //     style: {padding: 10, height: 70}
            // }}
            
            

            >

            <Tab.Screen name={halamanutama} component={HalamanUtama}/>
            <Tab.Screen name={halamanabout} component={HalamanAbout}/>
            <Tab.Screen name={halamanpengaturan} component={HalamanPengaturan}/>

            

            </Tab.Navigator>
        </NavigationContainer>

  
    )
}
    // export default App;
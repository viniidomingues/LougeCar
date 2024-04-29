import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './app/pages/Home';
import TelaLogin from './app/pages/login';
import Cabecalho from './components/headers/Cabecalho';
import InformacoesSobre from './app/pages/Sobre';

const Stack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={TelaLogin}  />
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
                <Stack.Screen name="Sobre" component={InformacoesSobre} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
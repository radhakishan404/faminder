import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Containers
import HomeContainer from '../containers/Home';
const Stack = createStackNavigator();


export default function PrivateNavigation({ }) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeContainer} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
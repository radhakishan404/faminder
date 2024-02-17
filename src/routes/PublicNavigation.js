import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

// container files
import LoginContainer from '../containers/Login';
import RegisterContainer from '../containers/Register';

const Stack = createStackNavigator();

export default function PublicNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginContainer} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterContainer} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
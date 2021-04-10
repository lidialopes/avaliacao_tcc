import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Avaliacao from './../pages/Avaliacao';
import Home from './../pages/Home';

const App = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <App.Navigator screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#fafafa' },
          }}>
            <App.Screen name="Home" component={Home} />
            <App.Screen name="Avaliacao" component={Avaliacao} />
        </App.Navigator>
    );
}

export default Routes;
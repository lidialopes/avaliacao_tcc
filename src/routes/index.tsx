import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Avaliacao from './../pages/Avaliacao';

const App = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <App.Navigator screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#fafafa' },
          }}>
            <App.Screen name="Avaliacao" component={Avaliacao} />
        </App.Navigator>
    );
}

export default Routes;
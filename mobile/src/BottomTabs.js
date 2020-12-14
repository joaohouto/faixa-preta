import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Icon } from 'react-native-elements'

import Explore from './pages/Explore';
import MoveList from './pages/MoveList';
import Statistics from './pages/Statistics';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    height: 80,
                    borderTopColor: '#222'
                },
                labelStyle: {
                    fontSize: 13,
                    marginBottom: 18
                },
                inactiveBackgroundColor: '#222222',
                activeBackgroundColor: '#222222',
                inactiveTintColor: '#555555',
                activeTintColor: '#dddddd',
            }}
        >
            <Screen 
                name="Explore" 
                component={Explore} 
                options={{
                    tabBarLabel: 'EXPLORAR',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Icon name='compass' type='feather' size={24} color={focused ? '#ddd' : color} />
                        );
                    }
                }}
            />

            <Screen 
                name="MoveList" 
                component={MoveList} 
                options={{
                    tabBarLabel: 'PESQUISAR',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Icon name='search' type='feather' size={24} color={focused ? '#ddd' : color} />
                        );
                    }
                }}
            />

            <Screen 
                name="Statistics" 
                component={Statistics} 
                options={{
                    tabBarLabel: 'ESTATÍSTICAS',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Icon name='bar-chart' type='feather' size={24} color={focused ? '#ddd' : color} />
                        );
                    }
                }}
            />
            
        </Navigator>
    );
}

export default BottomTabs;
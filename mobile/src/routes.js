import React from 'react';
import { Text, Image, View, TouchableOpacity, Linking } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements'

import Home from './pages/HomeRoutes';
import Activity from './pages/Activity';
import ActivityRunning from './pages/ActivityRunning';
import ActivityFinished from './pages/ActivityFinished';
import ActivityOldFinished from './pages/ActivityOldFinished';
import ActivityList from './pages/ActivityList';
import Move from './pages/Move';

const Routes = createStackNavigator({

    Home: {
        screen: Home,
        navigationOptions: {
            title: '',
            headerLeft: () => <Image source={require("./assets/logo-x.png")} style={{ height: 14, width: 120, marginLeft: 20 }} />,
            headerStyle: {
                backgroundColor: '#111',
            },
            headerTintColor: '#fff'
        }
    },

    Activity: {
        screen: Activity,
        navigationOptions: {
            title: 'Treino',
            headerStyle: {
                backgroundColor: '#111',
            },
            headerTintColor: '#fff'
        }
    },

    ActivityRunning: {
        screen: ActivityRunning,
        navigationOptions: {
            title: 'Treino',
            headerRight: () =>  <Text style={{ color: '#fff', marginRight: 20 }}>EM EXECUÇÃO</Text>,
            headerStyle: {
                backgroundColor: '#111',
            },
            headerTintColor: '#fff'
        }
    },

    ActivityFinished: {
        screen: ActivityFinished,
        navigationOptions: {
            title: 'Treino finalizado',
            headerStyle: {
                backgroundColor: '#111',
            },
            headerTintColor: '#fff'
        }
    },

    ActivityList: {
        screen: ActivityList,
        navigationOptions: {
            title: 'Lista de treinos',
            headerStyle: {
                backgroundColor: '#111',
            },
            headerTintColor: '#fff'
        }
    },

    Move: {
        screen: Move,
        navigationOptions: {
            title: 'Informações',
            headerStyle: {
                backgroundColor: '#111',
            },
            headerTintColor: '#fff'
        }
    },

    ActivityOldFinished: {
        screen: ActivityOldFinished,
        navigationOptions: {
            title: 'Treinos antigos',
            headerStyle: {
                backgroundColor: '#111',
            },
            headerTintColor: '#fff'
        }
    },
});

export default createAppContainer(Routes);
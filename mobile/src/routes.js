import React from 'react';
import { Text, Image, View, TouchableOpacity, Linking } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './homeRoutes';

import Activity from './pages/Activity';
import ActivityRunning from './pages/ActivityRunning';
import ActivityFinished from './pages/ActivityFinished';
import ActivityFinishedList from './pages/ActivityFinishedList';
import ActivityList from './pages/ActivityList';
import Move from './pages/Move';

import ProfileEdit from './pages/ProfileEdit';

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

    ActivityFinishedList: {
        screen: ActivityFinishedList,
        navigationOptions: {
            title: 'Treinos antigos',
            headerStyle: {
                backgroundColor: '#111',
            },
            headerTintColor: '#fff'
        }
    },

    ProfileEdit: {
        screen: ProfileEdit,
        navigationOptions: {
            title: 'Editar perfil',
            headerStyle: {
                backgroundColor: '#111',
            },
            headerTintColor: '#fff'
        }
    },
});

export default createAppContainer(Routes);
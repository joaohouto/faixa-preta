import React from 'react';
import { Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ExploreActivities from './pages/ExploreActivities';
import News from './pages/News';
import Activity from './pages/Activity';
import ActivityRunning from './pages/ActivityRunning';
import ActivityList from './pages/ActivityList';
import Move from './pages/Move';

import Home from './pages/Home';

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
            headerRight: () =>  <Text style={{ marginRight: 20, color: '#fff' }}>EM EXECUÇÃO</Text>,
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

});

export default createAppContainer(Routes);
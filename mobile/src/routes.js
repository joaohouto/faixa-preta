import React from 'react';
import { Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ExploreActivities from './pages/ExploreActivities';
import Activity from './pages/Activity';
import ActivityRunning from './pages/ActivityRunning';
import ActivityList from './pages/ActivityList';
import Move from './pages/Move';
import WebVisualizer from './pages/WebVisualizer';

const Routes = createStackNavigator({
    Home: {
        screen: ExploreActivities,
        navigationOptions: {
            title: '',
            headerLeft: () => <Image source={require("./assets/logo-x.png")} style={{ height: 16, width: 190, marginLeft: 20 }} />,
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
            headerLeft: () => <View style={{ marginLeft: 20 }}><Icon name='times' type='font-awesome' color="#111" size={20}  /></View>,
            headerRight: () =>  <Text style={{ marginRight: 20 }}>EM EXECUÇÃO</Text>,
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

    WebVisualizer: {
        screen: WebVisualizer,
        navigationOptions: {
            title: 'Navegador',
            headerStyle: {
                backgroundColor: '#111',
            },
            headerTintColor: '#fff'
        }
    },

});

export default createAppContainer(Routes);
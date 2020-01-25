import React from 'react';
import { Text, View } from 'react-native';
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
            title: 'Faixa Preta'
        }
    },

    Activity: {
        screen: Activity,
        navigationOptions: {
            title: 'Treino'
        }
    },

    ActivityRunning: {
        screen: ActivityRunning,
        navigationOptions: {
            title: 'Treino',
            headerLeft: () => <View style={{ marginLeft: 20 }}><Icon name='times' type='font-awesome' color="#111" size={20}  /></View>,
            headerRight: () =>  <Text style={{ marginRight: 20 }}>EM EXECUÇÃO</Text>,

        }
    },

    ActivityList: {
        screen: ActivityList,
        navigationOptions: {
            title: 'Treinos'
        }
    },

    Move: {
        screen: Move,
        navigationOptions: {
            title: 'Informações'
        }
    },

    WebVisualizer: {
        screen: WebVisualizer,
        navigationOptions: {
            title: 'Navegador'
        }
    },

});

export default createAppContainer(Routes);
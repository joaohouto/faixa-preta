import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { Text, Image } from 'react-native';
import { Icon } from 'react-native-elements'


//Páginas
import Welcome from './pages/Welcome';

import Profile from './pages/Profile';
import ExploreActivities from './pages/ExploreActivities';
import News from './pages/News';

import Activity from './pages/Activity';
import ActivityRunning from './pages/ActivityRunning';
import ActivityFinished from './pages/ActivityFinished';
import ActivityFinishedList from './pages/ActivityFinishedList';
import ActivityList from './pages/ActivityList';
import Move from './pages/Move';

import Settings from './pages/Settings';


const Home = createMaterialBottomTabNavigator({

    ExploreActivities: {
        screen: ExploreActivities,
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => (
            <Icon name='dumbbell' type='material-community' size={20} color={focused ? '#555' : '#999'} />
            ),
            title: 'Treino'
        }),
    },

    News: {
        screen: News,
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => (
            <Icon name='newspaper' type='material-community' size={20} color={focused ? '#555' : '#999'} />
            ),
        title: 'Notícias'
        }),
    },

    Profile: {
        screen: Profile,
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => (
            <Icon name='account' type='material-community' size={20} color={focused ? '#555' : '#999'} />
            ),
            title: 'Perfil'
        }),
    },

},
{
    barStyle: {
      backgroundColor: '#ddd',
    },
});

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

    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Configurações',
            headerStyle: {
                backgroundColor: '#111',
            },
            headerTintColor: '#fff'
        }
    },
});

export default createAppContainer(Routes);
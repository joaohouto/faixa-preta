import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements'

import Profile from './Profile';
import ExploreActivities from './ExploreActivities';
import News from './News';

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

export default Home;
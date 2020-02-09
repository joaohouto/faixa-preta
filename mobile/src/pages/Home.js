import React from 'react';
import { Icon } from 'react-native-elements'

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import ExploreActivities from './ExploreActivities';
import ExploreMoves from './ExploreMoves';
import News from './News';

const Home = createMaterialBottomTabNavigator({

    News: {
        screen: News,
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => (
            <Icon name='newspaper' type='material-community' size={20} color={focused ? '#555' : '#999'} />
            ),
        title: 'Notícias'
        }),
    },

    ExploreActivities: {
        screen: ExploreActivities,
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => (
            <Icon name='dumbbell' type='material-community' size={20} color={focused ? '#555' : '#999'} />
            ),
            title: 'Treino'
        }),
    },

    ExploreMoves: {
        screen: ExploreMoves,
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => (
            <Icon name='file-document-box-multiple' type='material-community' size={20} color={focused ? '#555' : '#999'} />
            ),
        title: 'Movimentos'
        }),
    },

},
{
    barStyle: {
      backgroundColor: '#ddd',
    },
});

export default Home;
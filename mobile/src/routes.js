import React from 'react';
import { Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import ExploreActivities from './pages/ExploreActivities';
import News from './pages/News';
import ExploreMoves from './pages/ExploreMoves';

const Routes = createMaterialBottomTabNavigator({

    News,
    ExploreActivities,
    ExploreMoves

},
{
    barStyle: {
        backgroundColor: '#f1f1f1',
    },
});

export default createAppContainer(Routes);
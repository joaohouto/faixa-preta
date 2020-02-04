import React from 'react';
import { Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ExploreActivities from './pages/ExploreActivities';
import News from './pages/News';

const Routes = createStackNavigator({

    
});

export default createAppContainer(Home);
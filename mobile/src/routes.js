import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ActivityList from './pages/ActivityList';
import Activity from './pages/Activity';
import Move from './pages/Move';
import ActivityRunning from './pages/ActivityRunning';
import ActivityFinished from './pages/ActivityFinished';
import History from './pages/History';

import BottomTabs from './BottomTabs';


const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="BottomTabs" component={BottomTabs} />
                <Screen name="ActivityList" component={ActivityList} />
                <Screen name="Activity" component={Activity} />
                <Screen name="Move" component={Move} />
                <Screen name="ActivityRunning" component={ActivityRunning} />
                <Screen name="ActivityFinished" component={ActivityFinished} />
                <Screen name="History" component={History} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Routes;
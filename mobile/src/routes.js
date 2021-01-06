import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-community/async-storage';
import AppLoading from 'expo-app-loading'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/Landing';
import ActivityList from './pages/ActivityList';
import Activity from './pages/Activity';
import Move from './pages/Move';
import ActivityRunning from './pages/ActivityRunning';
import FreeActivityRunning from './pages/FreeActivityRunning';
import ActivityFinished from './pages/ActivityFinished';
import History from './pages/History';
import Settings from './pages/Settings';

import BottomTabs from './BottomTabs';


const { Navigator, Screen } = createStackNavigator();

const Routes = () => {

    const [loading, setLoading] = useState(true);
    const [isFirstAccess, setIsFirstAccess] = useState(true);
    const [fontsLoaded] = useFonts({
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });

    useEffect(() => {
        verifyFirstAccess();
    }, []);

    const verifyFirstAccess = async () => {
        try {
            const response = await AsyncStorage.getItem('@notFirstAccess');
            setIsFirstAccess(!response);
        } catch(e){
            console.log(e);
        }

        if(isFirstAccess) {
            setNotFirstAccess();
        }
    }

    const setNotFirstAccess = async () => {
        try {
            await AsyncStorage.setItem('@notFirstAccess', 'true');
        } catch(e){
            console.log(e);
        }

        setLoading(false);
    }

    if(loading || !fontsLoaded) {
        return <AppLoading />

    } 

    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>

                { isFirstAccess ? (
                    <>
                        <Screen name="Landing" component={Landing} />
                        <Screen name="BottomTabs" component={BottomTabs} />
                    </>
                ) : (
                    <Screen name="BottomTabs" component={BottomTabs} />
                ) }

                <Screen name="ActivityList" component={ActivityList} />
                <Screen name="Activity" component={Activity} />
                <Screen name="Move" component={Move} />
                <Screen name="ActivityRunning" component={ActivityRunning} />
                <Screen name="FreeActivityRunning" component={FreeActivityRunning} />
                <Screen name="ActivityFinished" component={ActivityFinished} />
                <Screen name="History" component={History} />
                <Screen name="Settings" component={Settings} />
            </Navigator>
        </NavigationContainer>
    )
    
}

export default Routes;
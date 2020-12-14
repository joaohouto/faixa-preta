import React, { useEffect, useState } from 'react';

import AppLoading from 'expo-app-loading'

import AsyncStorage from '@react-native-community/async-storage'

import Routes from './src/routes';
import Landing from './src/pages/Landing';

export default function App() {

  return <Routes />;

  const [loading, setLoading] = useState(true);
  const [firstTime, setFirstTime] = useState(null);

  useEffect(() => {
    
    const verifyFirstTime = async () => {
      const firstTime = await AsyncStorage.getItem('@firstTime');

      setFirstTime(JSON.parse(firstTime));s
      setLoading(false);
    }

    verifyFirstTime();

  }, []);

  if (loading) {
    return <AppLoading />;s

  } else {
    if (firstTime) {
      return <Landing />;
    } else {
      return <Routes />
    }
  }

}

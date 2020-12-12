import React from 'react';

import { AppLoading } from 'expo'

import { Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import Landing from './src/pages/Landing';
import Routes from './src/routes';

export default function App() {

  let [fontLoaded] = useFonts({
    Poppins_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  });
  
  return <Routes />;

  if (!fontLoaded) {

    return <AppLoading />
  } else {

  }
}

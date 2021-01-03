import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Facebook from './screens/fb';
import Instagram from './screens/in';

export default function App() {
  return <AppContainer />;
}

const tabNavigator = createBottomTabNavigator({
  Facebook: { screen: Facebook },
  Instagram: { screen: Instagram },
});

const AppContainer = createAppContainer(tabNavigator);
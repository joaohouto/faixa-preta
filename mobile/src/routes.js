import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ExploreActivities from './pages/ExploreActivities';
import Activity from './pages/Activity';

const Routes = createStackNavigator({
    Home: {
        screen: ExploreActivities,
        navigationOptions: {
            title: 'Faixa Preta'
        }
    },

    Activity: {
        screen: Activity
    },

});

export default createAppContainer(Routes);
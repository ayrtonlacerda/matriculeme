import { createStackNavigator } from 'react-navigation';

import { Login } from './pages';

const Routes = createStackNavigator({
    Login: { screen: Login},
});

export default Routes;
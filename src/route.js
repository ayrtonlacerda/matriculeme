import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { colors } from './styles';

import { Login, Alunos, Oferta } from './pages';

const Routes = createStackNavigator(
  {
    Login: { screen: Login },
    Logged: createBottomTabNavigator(
      {
        Oferta: { screen: Oferta },
        Alunos: { screen: Alunos }
      },
      {
        tabBarOptions: {
          showIcon: true,
          activeTintColor: colors.white,
          inactiveTintColor: colors.whiteTransparent,
          labelStyle: { fontSize: 13 },
          style: {
            backgroundColor: colors.primary,
            height: 60,
            elevation: 3,
            shadowOffset: { width: 0, height: 0 },
            shadowColor: 'black',
            shadowOpacity: 1,
            shadowRadius: 10,
            marginTop: 10
          }
        }
      }
    )
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default Routes;

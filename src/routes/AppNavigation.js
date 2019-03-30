import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import { createStackNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import Login from "../screens/LoginScreen/Login";
import Cadastro from "../screens/Cadastro";
import RecuperarSenha from "../screens/RecuperarSenha";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import Cursos from "../screens/Cursos";
import Avaliacoes from "../screens/Avaliacoes";
import Notas from "../screens/Notas";
import DrawerContainer from '../screens/DrawerContainer'
import ConfereAuth from '../screens/ConfereAuth';


// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

// drawer stack
const DrawerStack = createDrawerNavigator({
  Home: { screen: Home },
  Perfil: { screen: Perfil },
  Cursos: { screen: Cursos },
  Avaliacoes: { screen: Avaliacoes },
  Notas: { screen: Notas },
}, {
  gesturesEnabled: false,
  contentComponent: DrawerContainer
})

const drawerButton = (navigation) =>
  <Text
    style={{padding: 5, color: 'white'}}
    onPress={() => {
      // Coming soon: navigation.navigate('DrawerToggle')
      // https://github.com/react-community/react-navigation/pull/2492
      if (navigation.state.index === 0) {
        navigation.openDrawer()
      } else {
        navigation.closeDrawer()
      }
    }
  }>Menu</Text>


const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'none',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#000000'},
    title: 'Welcome!',
    headerTintColor: 'black',
    gesturesEnabled: false,
    headerLeft: drawerButton(navigation)
  })
})

// login stack
const LoginStack = createStackNavigator({
  login: { screen: Login },
  cadastro: { screen: Cadastro },
  recuperarSenha: { screen: RecuperarSenha, navigationOptions: { title: 'Recuperar Senha' } }
}, {
  headerMode: 'none',
  navigationOptions: {
    headerStyle: {backgroundColor: '#E73536'},
    title: 'Faça login',
    headerTintColor: 'white'
  }
})

// Manifest of possible screens
const AppNavigator = createSwitchNavigator({
  confereAuth: { screen: ConfereAuth },
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'confereAuth',
  transitionConfig: noTransitionConfig
})



const AppNavigation = createAppContainer(AppNavigator);


export default AppNavigation;



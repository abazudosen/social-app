import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import SigninScreen from '../screens/SigninScreen'
import SignupScreen from '../screens/SignupScreen'

export default AuthStackScreen = () => {
  const AuthStack = createStackNavigator()

  return (
    <AuthStack.Navigator headerMode='none'>
      <AuthStack.Screen name='SignIn' component={SigninScreen} />
      <AuthStack.Screen name='SignUp' component={SignupScreen} />
    </AuthStack.Navigator>
  )
}


import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from "../screens/loginPage";
import Home from "../screens/screenA";
import SignUpPage from "../screens/signUpPage"
import OnBoardingPage from "../screens/onboardingPage"
const Stack = createNativeStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name='Home' component={Home} /> */}
        <Stack.Screen name="OnBoardingPage" component={OnBoardingPage} />
        <Stack.Screen name='LoginPage' component={LoginPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
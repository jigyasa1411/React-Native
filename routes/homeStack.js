import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from "../screens/loginPage";
import SignUpPage from "../screens/signUpPage"
import OnBoardingPage from "../screens/onboardingPage"
import ToDoListPage from "../screens/toDoListPage";
const Stack = createNativeStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardingPage" component={OnBoardingPage} />
        <Stack.Screen name='LoginPage' component={LoginPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="ToDoListPage" component={ToDoListPage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
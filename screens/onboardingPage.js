import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
export default function OnboardingPage({navigation}){
    return <Onboarding
    //To handle the navigation to the Homepage if Skip is clicked
    onSkip={() => navigation.navigate("LoginPage")}

    //To handle the navigation to the Homepage after Done is clicked
    onDone={() => navigation.navigate("LoginPage")}
    
    pages={[
    {
    backgroundColor: '#CCFFFF',
    
   image: <Image source={require("/Users/jigyasa/Desktop/React Native/ToDoApp/assets/onboardingBg.png")} />,
    title: 'Welcome',
    subtitle: 'Welcome to the first slide of the Onboarding Swiper.',
    
    },
    {
        backgroundColor: '#CCFFFF',
       image: <Image 
       
       
       source={require("/Users/jigyasa/Desktop/React Native/ToDoApp/assets/onboardingBg.png") } />,
        title: 'Explore',
        subtitle: 'This is the second slide of the Onboarding Swiper.',
        },
        {
            backgroundColor: '#CCFFFF',
           image: <Image source={require("/Users/jigyasa/Desktop/React Native/ToDoApp/assets/onboardingBg.png")} />,
            title: 'All Done',
            subtitle: 'This is the Third slide of the Onboarding Swiper.',
            },
    ]}
/>
}

const styles =  StyleSheet.create({
    
    image: {
      flex: 1,
      justifyContent: 'center',
      opacity: 0.2,
      
      height: 100,
      width: 100,
      
    },
    
    btnTextDecoration: {
      color: '#fff',
      fontSize: 20,
      alignItems: 'center',
      fontWeight: 'bold',
      fontFamily: 'Cochin',
      justifyContent: 'center'
    }
  });
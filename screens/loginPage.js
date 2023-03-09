import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, ImageBackground } from 'react-native';
//import Task from './../components/Task';

export default function LoginPage({ navigation}) {
    
    const image = {
    
        uri: 'https://reactjs.org/logo-og.png'};
        const [email, onChangeEmail] = React.useState('');
      const [number, onChangeNumber] = React.useState('');
    
      return (
       // <View style={styles.container}>
        //  <NavigationContainer>
            <ImageBackground style={styles.container} source={require("../assets/bg2.jpeg")} resizeMode='cover'>
    
    <Text style={styles.textDecoration}>ToDo App</Text>
    <View style={{flexDirection: 'column',height: 250}}></View>
    
    <TextInput
      style={styles.textInput}
      onChangeText={onChangeEmail}
      value={email}
      placeholder = "Enter Email"
    />
    <TextInput
      style={styles.textInput}
      secureTextEntry={true}
      onChangeText={onChangeNumber}
      value={number}
      placeholder="Enter Password"
      
      
    />
    
    
    {/* <Button
    style={styles.button}
    title={"Submit"}
    onPress={print("Test")}
    /> */}
    
    <View style={styles.button} >
      <Text onPress={()=> navigation.navigate("ToDoListPage")} style={styles.btnTextDecoration}>Login</Text>
    </View>
    
    <View style={{flexDirection: 'column',height: 20}}></View>
    <Text style={styles.visitingFirstTimeTextDecoration}>Visiting first time? <Text onPress={()=> navigation.navigate("SignUpPage")} style = {{ color: '#CC6600',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin'}}>Sign Up</Text></Text>
    
    
    </ImageBackground>
         // </NavigationContainer>
    
    
       // </View>
      );
}

const styles =  StyleSheet.create({
    container: {
      flex : 2,
      //backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
     paddingHorizontal: 5,
     opacity: 1
    
      
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      opacity: 0.8
      
    },
    button: {
      height: 50,
      width: 350,
      margin: 2,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
     backgroundColor: '#004C99',
     color: '#004C99',
     borderRadius: 10,
     
      
    },
    textInput: {
      
      height: 50,
      width: 350,
      margin: 2,
      borderWidth: 1,
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 10
    },
    textDecoration: {
      color: '#004C99',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Cochin',
      marginTop: 10
    },
    btnTextDecoration: {
      color: '#fff',
      fontSize: 20,
      alignItems: 'center',
      fontWeight: 'bold',
      fontFamily: 'Cochin',
      justifyContent: 'center'
    },
    visitingFirstTimeTextDecoration: {
      color: '#004C99',
      fontSize: 20,
      alignItems: 'center',
      fontWeight: 'bold',
      fontFamily: 'Cochin',
      justifyContent: 'center'
    }
  });
  
  
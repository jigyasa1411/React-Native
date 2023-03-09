import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Image } from 'react-native';
//import { Icon } from 'react-native-vector-icons';


export default function ToDoListPage({ navigation}){
    return <View style={{flexDirection: 'column'}}>
        
        <View style={{flexDirection: 'row', paddingHorizontal: 30, paddingVertical:40, justifyContent:"flex-start"}}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {print("bhbjh");}}
          style={todoListStyles.touchableOpacityStyle}>
          <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            // For local image
            //source={require('./images/float-add-icon.png')}
            style={todoListStyles.floatingButtonStyle}
          />
        </TouchableOpacity>
        <Image 
  source={require('../assets/bgImage4.jpeg')}  
  style={{width: 50, height: 50, borderRadius: 400/ 2}} 
/>
{/* <Icon name="search" size={30} color="#900" /> */}

       
        </View>
        
        <View>
            <Text style={todoListStyles.myTasksText}>My Tasks</Text>
            
        </View>

        <View style={todoListStyles.listTile}>
           
        </View>

        
    </View>
}

const todoListStyles = StyleSheet.create({
    appBar: {
        
        backgroundColor: '#00CCCC',
        height: 60,
        alignContent: 'center'
    },
    myTasksText: {
        fontSize: 30,
        color: "black",
        paddingHorizontal: 30,
        fontWeight: 'bold'
    },
    listTile: {
        padding: 20,
        borderColor: 'grey',
        borderRadius: 20,
        backgroundColor: "pink",
        height: 100,
        //width: 400,
        margin: 20
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      },
      floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        paddingVertical: 40
        //backgroundColor:'black'
      },
});
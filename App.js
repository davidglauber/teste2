import React from 'react';
import { AppRegistry ,StyleSheet, Text, View, Image, Dimensions, ScrollView, 
    FlatList, TouchableOpacity, marginTop, AsyncStorage, FlexAlignType, Button, marginLeft,color, borderColor, borderRadius, marginBotton, TextInput, } from 'react-native';
import Post from './src/components/Post'

import { createStackNavigator } from 'react-navigation';     
import Login from './src/components/Login';

const width = Dimensions.get('screen').width;

export default class App extends React.Component {

    constructor() {
      super();
      this.state = {
        usuario: '',
        senha: '',
        mensagem: ''
      }

    }





   
   
    render() {
        return (
           
         <AppNavigator/>

      ); 
        
    }

}


const AppNavigator = createStackNavigator({
    tela1: {
        screen: Login,
        navigationOptions:  {
            title: 'Login',
            headerLeft: null,
            headerStyle: {
                backgroundColor: 'yellow'
            }
        } 
    },
    tela2: {
        screen: Post,
        navigationOptions:  {
            title: 'Posts',
            headerLeft: null
        }    
    },


    

})  


        


import React from 'react';
import { AppRegistry ,StyleSheet, Text, View, Image, Dimensions,Button, ScrollView, FlatList, TouchableOpacity, borderColor, borderRadius, marginBotton, TextInput, } from 'react-native';

import InputComentario from './inputComentario';
import Likes from './Likes';
const width = Dimensions.get('screen').width;

export default class Post extends React.Component {
 

  
 
 render() {
  return(
   <View style={styles.texto}>
   <Text> Aqui era para ser o Post </Text>
   <Button title='Retornar à tela inicial' onPress={() => this.props.navigation.navigate('tela1')} />
   </View> 
    );
  }
}


const styles = StyleSheet.create({
  texto: {
    alignItems: 'center'
  }

  });



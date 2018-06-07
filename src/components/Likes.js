import React from 'react';
import { AppRegistry ,StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList, TouchableOpacity, borderColor, borderRadius, marginBotton, TextInput, } from 'react-native';


export default class Likes extends React.Component {

    carregaIcone(likeada) {
        return likeada ? require('../../resources/img/check.png') : 
         require('../../resources/img/coracao.png')
     
       }
     
       exibeLikes(likers) {
         if (likers.length <= 0)    
         return;
     
         return (   
              <Text style={styles.likes}>
                  {likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}
               </Text>
     
         );
       }    

     render() {
     const { foto, likeCallback } = this.props;    
        
        return (
<View>
        <TouchableOpacity onPress={() => {likeCallback(foto.id)}}>
            <Image style={styles.botaoDeLike}
            source={this.carregaIcone(foto.likeada)} />
        </TouchableOpacity>

        {this.exibeLikes(foto.likers)}
</View>

        );
    }
 }

 const styles = StyleSheet.create({
    botaoDeLike: {
        marginBottom: 10,
        width: 40,
        height: 40,
      },
      
    likes: {
        fontWeight: 'bold',
      },


 })
import React from 'react';
import { AppRegistry ,StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList, TouchableOpacity, borderColor, borderRadius, Platform, PlatformIOS } from 'react-native';

import Post from './src/components/Post';
import Login from './src/components/Login';
 
export default class Insta extends React.Component {
 
  constructor() {
    super();
    this.state = {
      fotos: []
    }

  }
 
  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
    .then(resposta => resposta.json())
    .then(json => this.setState({fotos: json}))
  }
 
  like(idFoto) {
    const foto = this.state.fotos.find(foto => foto.id === idFoto )
    
     let novaLista = []
     if(!foto.likeada) {
       novaLista =  [
         ...foto.likers,
         {login: 'meuUsuario'}
       ]
     } else {
       novaLista = foto.likers.filter(liker => {
         return liker.login !== 'meuUsuario'
       })
 
 
     }
     const fotoAtualizada = {
     ...foto , 
     likeada: !foto.likeada,
     likers: novaLista  
   }
     
     const fotos = this.state.fotos
      .map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada: foto)
     this.setState({fotos})
   }

   adicionaComentario(idFoto, valorComentario, inputComentario) {
    if(valorComentario === '')
     return;
     
    const foto = this.state.fotos.find(foto => foto.id === idFoto)



     const novaLista = [...foto.comentarios, {
       id: valorComentario,
       login: 'meuUsuario',
       texto: valorComentario
 
     }]; 
    
    const fotoAtualizada = {
      ...foto,
      comentarios: novaLista
    } 
 
    const fotos = this.state.fotos
      .map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada : foto)

    this.setState({fotos});
    inputComentario.clear();
   }

  render() {  
    return ( 
    <FlatList style={styles.container}
      keyExtractor={item => item.id}
      data={this.state.fotos}
      renderItem={ ({item}) =>
    <Post foto={item}
          likeCallback={this.like.bind(this)}
          comentarioCallback={this.adicionaComentario.bind(this)}
          />
      }
    />
 
    );
  }
}

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
    },
  });

AppRegistry.registerComponent('Insta', () => Login);


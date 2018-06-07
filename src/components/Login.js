import React from 'react';
import { AppRegistry ,StyleSheet, Text, View, Image, Dimensions, ScrollView, 
    FlatList, TouchableOpacity, marginTop,AsyncStorage, FlexAlignType, Button, marginLeft,color, borderColor, borderRadius, marginBotton, TextInput, } from 'react-native';

const width = Dimensions.get('screen').width;

export default class Login extends React.Component {

   efetuaLogin () {
      
    
    const uri = "http://localhost:8080/api/public/login";
    
   
   const requestInfo = {
       method: 'POST',
       body: JSON.stringify({
           login: this.state.usuario,
           senha: this.state.senha
       }),

       headers: new Headers({
           'Content-type': 'application/json'
       })
   }
   
   
   
         fetch(uri, requestInfo) 
       .then(response =>{
            if(response.ok)
                return response.text();

        throw new Error("Não foi possível efetuar o Login :(");
       })
       .then(token => {
            AsyncStorage.setItem('token', token);
            AsyncStorage.setItem('usuario', this.state.usuario);

            return AsyncStorage.getItem('token');
       } )
   
    }
   
   
    render() {
        return (
            <View style={styles.estilo}>

                <Text style={styles.titulo}>Instagrado</Text>
            <View style={styles.form}>
              
                <TextInput style={styles.input}
                    placeholder="Usuário"
                    underlineColorAndroid='transparent'
                    onChangeText={texto => this.setState({usuario: texto})}
                    autoCapitalize='none'/>


                

                <TextInput style={styles.input}
                placeholder="Senha..."
                underlineColorAndroid='transparent'
                onChangeText={texto => this.setState({senha: texto})}
                autoCapitalize='none'
                secureTextEntry={true}/>    
            
            <Button title="Login" onPress={this.efetuaLogin.bind(this)}/>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    estilo: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
    },
    form: {
        width: width * 0.8,
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    titulo: {
        fontSize: 20,
        alignItems: 'center',
        fontWeight: 'bold',

    },
    
})


import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Image, Animated } from 'react-native';

export default function Login({DDLogado, navigation}) {

    const [cUserName, SetUserName] = useState(null)
    const [cPassword, SetPassword] = useState(null)

    function Logar() {
        var lContinue = false;
        
        if(cUserName == 'amessias' && cPassword == '123456'){
            lContinue = true;
        }
        alert(DDLogado);
        //SetLogado(lContinue)
        if (lContinue){
            navigation.navigate('Agendas')
        }
        else{
            alert("Usuario ou senha Inválido");
        }
    }

    return (
      <KeyboardAvoidingView style={styles.container}>
        <View>
            <Image style={{width:193, height:83 }} source={require('../assets/logo_delta.png')} />
            <Text style={styles.text}>Controle de Agendas</Text>
        </View>

        <TextInput
            style={styles.input}
            placeholder="Usuario"
            //keyboardType=""
            textContentType="username"
            autoCapitalize="none"
            autoCompleteType="username"
            autoCorrect={false}
            onChangeText={value => SetUserName(value)}
        />

        <TextInput
            style={styles.input}
            placeholder="Senha"
            //keyboardType="visible-password"
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={value => SetPassword(value)}
        />
        <TouchableOpacity style={styles.buttonSubmit} onPress={ () => { Logar() } }>
            <Text style={styles.submitText}>Entrar</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0063be',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
        color: '#fff',
        fontSize: 16,
        padding: 20
    },

    buttonSubmit: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#59BFFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
      },

      input: {
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 16,
        borderRadius: 7,
        padding: 10
      },
    
      submitText: {
        color: '#FFF',
        fontSize: 19,
      },      
  });
  
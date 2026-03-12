import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
  const handleLogin = () => {
    // Al iniciar sesión, navegamos al contenedor de las pestañas (Home/Perfil)
    navigation.replace('MainTabs');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenido a EventosUB</Text>
        <Text style={styles.subtitle}>Ingresa para descubrir qué hay en el campus</Text>

        <TextInput 
          placeholder="Correo institucional" 
          style={styles.input} 
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput 
          placeholder="Contraseña" 
          style={styles.input} 
          secureTextEntry 
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Continuar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#004A87',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default LoginScreen;
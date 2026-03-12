import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    // Simulamos un tiempo de carga de 2 segundos
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Usamos 'replace' para que el usuario no pueda volver atrás al Splash
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Aquí luego puedes cambiar el Text por un componente <Image> con el logo de la U */}
      <Text style={styles.logo}>EventosUB</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004A87', // Color sugerido (azul institucional)
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default SplashScreen;
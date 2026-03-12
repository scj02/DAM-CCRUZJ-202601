import { StyleSheet } from 'react-native';
import { colors } from '../../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-end', 
    paddingBottom: 30,
  },
  pantalla: {
    padding: 20,
    alignItems: 'flex-end', 
    marginBottom: 20,
  },
  textoPantalla: {
    fontSize: 70,
    fontWeight: 'bold',
    color: colors.text,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },
  boton: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 37.5, 
    elevation: 3, 
  },
  textoBoton: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  botonVacio: {
    width: 75,
    height: 75,
  }
});
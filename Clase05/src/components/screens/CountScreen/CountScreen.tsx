import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './CountScreen.style';
import { colors } from '../../../themes/colors';

export const CountScreen = () => {
  const [display, setDisplay] = useState('0');
  const [operador, setOperador] = useState<string | null>(null);
  const [valorAnterior, setValorAnterior] = useState<string>('');

  const presionarNumero = (numero: string) => {
    console.log(`🔢 Número presionado: ${numero}`);
    
    if (display === '0') {
      setDisplay(numero);
    } else {
      setDisplay(display + numero);
    }
  };

  const presionarOperacion = (op: string) => {
    console.log(`⚙️ Operador presionado: ${op}`);
    setOperador(op);
    setValorAnterior(display);
    setDisplay('0');
  };

  const calcular = () => {
    console.log(`🟰 Botón 'Igual' presionado`);
    
    const actual = parseFloat(display);
    const anterior = parseFloat(valorAnterior);
    let resultado = 0;

    if (operador === '+') resultado = anterior + actual;
    if (operador === '-') resultado = anterior - actual;

    console.log(`✅ Resultado: ${anterior} ${operador} ${actual} = ${resultado}`);
    
    setDisplay(resultado.toString());
    setOperador(null);
    setValorAnterior('');
  };

  const limpiar = () => {
    console.log(`🧹 Botón Limpiar (C) presionado`);
    setDisplay('0');
    setOperador(null);
    setValorAnterior('');
  };

  const renderBoton = (texto: string, accion: () => void, colorFondo: string = '#E9ECEF', colorTexto: string = '#333') => (
    <TouchableOpacity style={[styles.boton, { backgroundColor: colorFondo }]} onPress={accion}>
      <Text style={[styles.textoBoton, { color: colorTexto }]}>{texto}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      
      {/* PANTALLA DE LA CALCULADORA */}
      <View style={styles.pantalla}>
        <Text style={styles.textoPantalla}>{display}</Text>
      </View>

      {/* TECLADO */}
      <View style={styles.fila}>
        {renderBoton('7', () => presionarNumero('7'))}
        {renderBoton('8', () => presionarNumero('8'))}
        {renderBoton('9', () => presionarNumero('9'))}
        {renderBoton('+', () => presionarOperacion('+'), colors.primary, '#FFF')}
      </View>

      <View style={styles.fila}>
        {renderBoton('4', () => presionarNumero('4'))}
        {renderBoton('5', () => presionarNumero('5'))}
        {renderBoton('6', () => presionarNumero('6'))}
        {renderBoton('-', () => presionarOperacion('-'), '#FF6B6B', '#FFF')}
      </View>

      <View style={styles.fila}>
        {renderBoton('1', () => presionarNumero('1'))}
        {renderBoton('2', () => presionarNumero('2'))}
        {renderBoton('3', () => presionarNumero('3'))}
        {renderBoton('=', calcular, '#4ECDC4', '#FFF')}
      </View>

      <View style={styles.fila}>
        {renderBoton('C', limpiar, '#CCC', '#000')}
        {renderBoton('0', () => presionarNumero('0'))}
        <View style={styles.botonVacio} />
        <View style={styles.botonVacio} />
      </View>

    </View>
  );
};
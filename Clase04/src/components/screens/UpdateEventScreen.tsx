import React, { useState } from 'react';
import { 
  View, Text, TextInput, StyleSheet, ScrollView, 
  Pressable, SafeAreaView, Alert 
} from 'react-native';

const CATEGORIAS = ['Académico', 'Cultural', 'Deportivo', 'Social'];

const UpdateEventScreen = ({ navigation, route }: any) => {
  // Simulamos que ya tenemos los datos del evento a actualizar
  const [titulo, setTitulo] = useState('Festival de Bandas UB');
  const [categoria, setCategoria] = useState('Cultural');
  const [fecha, setFecha] = useState('Viernes 15, 6:00 PM');
  const [lugar, setLugar] = useState('Plazoleta Principal');
  const [descripcion, setDescripcion] = useState('Ven y disfruta de las mejores bandas de la Universidad.');

  const handleActualizar = () => {
    Alert.alert('Cambios guardados', 'La información del evento ha sido actualizada.', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Cancelar</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Editar Evento</Text>
        <View style={{ width: 60 }} /> 
      </View>

      <ScrollView style={styles.formContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Título del evento</Text>
        <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} />

        <Text style={styles.label}>Categoría</Text>
        <View style={styles.chipContainer}>
          {CATEGORIAS.map((cat) => (
            <Pressable 
              key={cat} 
              style={[styles.chip, categoria === cat && styles.chipActive]}
              onPress={() => setCategoria(cat)}
            >
              <Text style={[styles.chipText, categoria === cat && styles.chipTextActive]}>{cat}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.label}>Fecha y Hora</Text>
        <TextInput style={styles.input} value={fecha} onChangeText={setFecha} />

        <Text style={styles.label}>Ubicación</Text>
        <TextInput style={styles.input} value={lugar} onChangeText={setLugar} />

        <Text style={styles.label}>Descripción</Text>
        <TextInput 
          style={[styles.input, styles.textArea]} 
          multiline 
          numberOfLines={4} 
          value={descripcion} 
          onChangeText={setDescripcion} 
        />

        <Pressable style={styles.submitButton} onPress={handleActualizar}>
          <Text style={styles.submitButtonText}>Guardar Cambios</Text>
        </Pressable>
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  backText: { color: '#6C757D', fontSize: 16 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#212529' },
  formContainer: { padding: 20 },
  label: { fontSize: 16, fontWeight: '600', color: '#495057', marginBottom: 8, marginTop: 15 },
  input: {
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#F8F9FA',
  },
  textArea: { height: 100, textAlignVertical: 'top' },
  chipContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  chip: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#E9ECEF',
    marginRight: 8,
    marginBottom: 8,
  },
  chipActive: { backgroundColor: '#004A87' },
  chipText: { color: '#495057', fontWeight: '500' },
  chipTextActive: { color: '#FFFFFF' },
  submitButton: {
    backgroundColor: '#004A87',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
  },
  submitButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
});

export default UpdateEventScreen;
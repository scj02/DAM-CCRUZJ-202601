import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, SafeAreaView, TextInput, 
  ScrollView, Pressable, Image 
} from 'react-native';

// --- DATOS DE PRUEBA (Simulando lo que traería tu backend) ---
const CATEGORIAS = ['Todos', 'Académico', 'Cultural', 'Deportivo', 'Social'];

const EVENTOS_DESTACADOS = [
  { id: '1', title: 'Festival de Bandas UB', date: 'Viernes 15, 6:00 PM', location: 'Plazoleta Principal', color: '#FF6B6B' },
  { id: '2', title: 'Feria de Emprendimiento', date: 'Jueves 14, 9:00 AM', location: 'Hall Central', color: '#4ECDC4' },
];

const EVENTOS_PROXIMOS = [
  { id: '3', title: 'Taller de Python y APIs', date: 'Lunes 18, 2:00 PM', category: 'Académico' },
  { id: '4', title: 'Torneo Relámpago Voleibol', date: 'Martes 19, 4:00 PM', category: 'Deportivo' },
  { id: '5', title: 'Charla: Salud Mental', date: 'Miércoles 20, 10:00 AM', category: 'Social' },
];

const HomeScreen = ({ navigation }: any) => {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. BARRA DE BÚSQUEDA */}
      <View style={styles.header}>
        <TextInput 
          placeholder="¿Qué quieres hacer hoy?" 
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* 2. FILTROS (CHIPS) */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.filtersContainer}
        >
          {CATEGORIAS.map((cat) => (
            <Pressable 
              key={cat} 
              style={[styles.chip, categoriaActiva === cat && styles.chipActive]}
              onPress={() => setCategoriaActiva(cat)}
            >
              <Text style={[styles.chipText, categoriaActiva === cat && styles.chipTextActive]}>
                {cat}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* 3. CARRUSEL DE EVENTOS DESTACADOS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Eventos Destacados</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {EVENTOS_DESTACADOS.map((evento) => (
              <Pressable 
                key={evento.id} 
                style={[styles.featuredCard, { backgroundColor: evento.color }]}
                // Aquí navegaremos al Detalle del Evento en el Flujo 3
                onPress={() => console.log('Ir al evento', evento.id)}
              >
                <Text style={styles.featuredTitle}>{evento.title}</Text>
                <Text style={styles.featuredDate}>{evento.date}</Text>
                <Text style={styles.featuredLocation}>📍 {evento.location}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* 4. LISTA DE PRÓXIMOS EVENTOS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Próximos Eventos</Text>
          {EVENTOS_PROXIMOS.map((evento) => (
            <Pressable 
              key={evento.id} 
              style={styles.listCard}
              onPress={() => navigation.navigate('EventDetail')}
            >
              <View style={styles.listCardContent}>
                <Text style={styles.listTitle}>{evento.title}</Text>
                <Text style={styles.listDate}>{evento.date}</Text>
              </View>
              <View style={styles.tagCategory}>
                <Text style={styles.tagText}>{evento.category}</Text>
              </View>
            </Pressable>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

// --- ESTILOS (El diseño "limpio y móvil" que pide el requerimiento) ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  searchInput: {
    backgroundColor: '#F1F3F5',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
  filtersContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E9ECEF',
    marginRight: 10,
  },
  chipActive: {
    backgroundColor: '#004A87', // Color U Bosque
  },
  chipText: {
    color: '#495057',
    fontWeight: '500',
  },
  chipTextActive: {
    color: '#FFFFFF',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#212529',
  },
  featuredCard: {
    width: 280,
    height: 160,
    borderRadius: 15,
    padding: 20,
    marginRight: 15,
    justifyContent: 'flex-end',
  },
  featuredTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  featuredDate: {
    color: '#FFF',
    fontSize: 14,
    opacity: 0.9,
  },
  featuredLocation: {
    color: '#FFF',
    fontSize: 14,
    opacity: 0.9,
    marginTop: 5,
  },
  listCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  listCardContent: {
    flex: 1,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  listDate: {
    fontSize: 14,
    color: '#666',
  },
  tagCategory: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  tagText: {
    color: '#1976D2',
    fontSize: 12,
    fontWeight: 'bold',
  }
});

export default HomeScreen;
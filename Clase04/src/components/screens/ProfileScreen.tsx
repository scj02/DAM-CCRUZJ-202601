import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, Image, ScrollView, 
  Pressable, SafeAreaView 
} from 'react-native';

const EVENTOS_PROXIMOS = [
  { id: '1', title: 'Taller de Python y APIs', date: 'Lunes 18, 2:00 PM', location: 'Lab 3' },
  { id: '2', title: 'Festival de Bandas UB', date: 'Viernes 15, 6:00 PM', location: 'Plazoleta' },
];

const EVENTOS_PASADOS = [
  { id: '3', title: 'Feria de Emprendimiento', date: 'Semana pasada', location: 'Hall Central' },
];

const ProfileScreen = ({ navigation }: any) => {
  const [tabActivo, setTabActivo] = useState('Proximos');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} 
            style={styles.avatar} 
          />
          <View>
            <Text style={styles.userName}>Estudiante UB</Text>
            <Text style={styles.userEmail}>estudiante@unbosque.edu.co</Text>
          </View>
        </View>
        
        {/* Botón para ir a Notificaciones */}
        <Pressable 
          style={styles.notificationButton}
          onPress={() => navigation.navigate('Notifications')}
        >
          <Text style={styles.bellIcon}>🔔</Text>
        </Pressable>
      </View>

      {/* Tabs internos: Próximos vs Pasados */}
      <View style={styles.tabContainer}>
        <Pressable 
          style={[styles.tab, tabActivo === 'Proximos' && styles.activeTab]}
          onPress={() => setTabActivo('Proximos')}
        >
          <Text style={[styles.tabText, tabActivo === 'Proximos' && styles.activeTabText]}>
            Próximos
          </Text>
        </Pressable>
        <Pressable 
          style={[styles.tab, tabActivo === 'Pasados' && styles.activeTab]}
          onPress={() => setTabActivo('Pasados')}
        >
          <Text style={[styles.tabText, tabActivo === 'Pasados' && styles.activeTabText]}>
            Pasados
          </Text>
        </Pressable>
      </View>

      <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
        {tabActivo === 'Proximos' ? (
          EVENTOS_PROXIMOS.map((evento) => (
            <View key={evento.id} style={styles.eventCard}>
              <Text style={styles.eventTitle}>{evento.title}</Text>
              <Text style={styles.eventDate}>📅 {evento.date}</Text>
              <Text style={styles.eventLocation}>📍 {evento.location}</Text>
            </View>
          ))
        ) : (
          EVENTOS_PASADOS.map((evento) => (
            <View key={evento.id} style={styles.eventCardPasado}>
              <Text style={styles.eventTitle}>{evento.title}</Text>
              <Text style={styles.eventDate}>📅 {evento.date}</Text>
            </View>
          ))
        )}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#FFFFFF'
  },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 15 },
  userName: { fontSize: 20, fontWeight: 'bold', color: '#212529' },
  userEmail: { fontSize: 14, color: '#6C757D' },
  notificationButton: { 
    backgroundColor: '#F1F3F5', 
    padding: 10, 
    borderRadius: 20 
  },
  bellIcon: { fontSize: 20 },
  tabContainer: { 
    flexDirection: 'row', 
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1, 
    borderColor: '#EEEEEE' 
  },
  tab: { flex: 1, paddingVertical: 15, alignItems: 'center' },
  activeTab: { borderBottomWidth: 3, borderColor: '#004A87' },
  tabText: { fontSize: 16, color: '#6C757D', fontWeight: '500' },
  activeTabText: { color: '#004A87', fontWeight: 'bold' },
  listContainer: { padding: 20 },
  eventCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderColor: '#004A87',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  eventCardPasado: {
    backgroundColor: '#E9ECEF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    opacity: 0.7,
  },
  eventTitle: { fontSize: 16, fontWeight: 'bold', color: '#212529', marginBottom: 5 },
  eventDate: { fontSize: 14, color: '#495057', marginBottom: 3 },
  eventLocation: { fontSize: 14, color: '#6C757D' },
});

export default ProfileScreen;
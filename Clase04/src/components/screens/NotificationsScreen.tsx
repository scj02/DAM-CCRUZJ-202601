import React from 'react';
import { 
  View, Text, StyleSheet, ScrollView, Pressable, SafeAreaView 
} from 'react-native';

const NOTIFICACIONES = [
  { id: '1', tipo: 'recordatorio', titulo: '¡Es mañana!', mensaje: 'El Festival de Bandas UB es mañana a las 6:00 PM.', tiempo: 'Hace 2 horas', leida: false },
  { id: '2', tipo: 'nuevo', titulo: 'Nuevo evento según tus intereses', mensaje: 'Se ha publicado: Taller de Python y APIs.', tiempo: 'Hace 5 horas', leida: false },
  { id: '3', tipo: 'confirmacion', titulo: 'Asistencia confirmada', mensaje: 'Guardaste el Torneo Relámpago en tu perfil.', tiempo: 'Ayer', leida: true },
];

const NotificationsScreen = ({ navigation }: any) => {
  // Función para determinar el icono según el tipo de notificación
  const getIcono = (tipo: string) => {
    switch(tipo) {
      case 'recordatorio': return '⏰';
      case 'nuevo': return '🔥';
      case 'confirmacion': return '✅';
      default: return '📌';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>← Volver</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Notificaciones</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
        {NOTIFICACIONES.map((notif) => (
          <View key={notif.id} style={[styles.notificationCard, !notif.leida && styles.unreadCard]}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{getIcono(notif.tipo)}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{notif.titulo}</Text>
              <Text style={styles.message}>{notif.mensaje}</Text>
              <Text style={styles.time}>{notif.tiempo}</Text>
            </View>
            {!notif.leida && <View style={styles.unreadDot} />}
          </View>
        ))}
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
  backButton: { padding: 5 },
  backText: { color: '#004A87', fontSize: 16, fontWeight: 'bold' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#212529' },
  list: { padding: 20 },
  notificationCard: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  unreadCard: {
    backgroundColor: '#E3F2FD', // Fondo ligeramente azul para las no leídas
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  icon: { fontSize: 20 },
  textContainer: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#212529', marginBottom: 3 },
  message: { fontSize: 14, color: '#495057', marginBottom: 5 },
  time: { fontSize: 12, color: '#ADB5BD' },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#004A87',
    marginLeft: 10,
  }
});

export default NotificationsScreen;
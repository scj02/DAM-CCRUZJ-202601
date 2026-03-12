import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, Image, ScrollView, 
  Pressable, Modal, SafeAreaView 
} from 'react-native';

const EventDetailScreen = ({ navigation }: any) => {
  // Estado para controlar si el modal de confirmación está visible o no
  const [modalVisible, setModalVisible] = useState(false);

  // Función que se ejecuta al darle al botón "Guardar"
  const handleSaveEvent = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        {/* 1. IMAGEN HERO A PANTALLA COMPLETA */}
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1540039155733-d7696d4ebaf8?q=80&w=1000&auto=format&fit=crop' }} 
          style={styles.heroImage}
        />
        
        {/* Botón flotante para regresar */}
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Volver</Text>
        </Pressable>

        {/* 2. DETALLES DEL EVENTO */}
        <View style={styles.content}>
          <Text style={styles.title}>Festival de Bandas UB</Text>
          <Text style={styles.organizer}>Por: Bienestar Universitario</Text>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>📅 Viernes 15, 6:00 PM</Text>
            <Text style={styles.infoText}>📍 Plazoleta Principal</Text>
          </View>

          <Text style={styles.descriptionTitle}>Acerca del evento</Text>
          <Text style={styles.descriptionText}>
            Ven y disfruta de las mejores bandas de la Universidad El Bosque. Un espacio diseñado para la cultura, la música en vivo y la integración estudiantil. ¡Invita a tus amigos y no te lo pierdas!
          </Text>
        </View>
      </ScrollView>

      {/* 3. BOTONES FIJOS (Sticky Bottom Bar) */}
      <View style={styles.bottomBar}>
        <Pressable style={styles.shareButton} onPress={() => console.log('Compartir activado')}>
          <Text style={styles.shareButtonText}>Compartir</Text>
        </Pressable>
        <Pressable style={styles.saveButton} onPress={handleSaveEvent}>
          <Text style={styles.saveButtonText}>Guardar Evento</Text>
        </Pressable>
      </View>

      {/* 4. MODAL DE CONFIRMACIÓN */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalEmoji}>🎉</Text>
            <Text style={styles.modalTitle}>¡Asistencia Confirmada!</Text>
            <Text style={styles.modalText}>
              El evento ha sido guardado en tu perfil. Te notificaremos cuando se acerque la fecha.
            </Text>

            <Pressable style={styles.calendarButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.calendarButtonText}>Agregar a Google Calendar</Text>
            </Pressable>

            <Pressable style={styles.closeModalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeModalText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  heroImage: {
    width: '100%',
    height: 350, // Ocupa buena parte de la pantalla
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  backButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  content: {
    padding: 25,
    paddingBottom: 100, // Espacio para la barra inferior fija
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 5,
  },
  organizer: {
    fontSize: 16,
    color: '#6C757D',
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#F8F9FA',
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
  },
  infoText: {
    fontSize: 16,
    color: '#343A40',
    marginBottom: 5,
    fontWeight: '500',
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#495057',
    lineHeight: 24,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 30, // Ajuste para SafeArea en iOS
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#EEEEEE',
  },
  shareButton: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#F1F3F5',
    marginRight: 10,
  },
  shareButtonText: {
    color: '#495057',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveButton: {
    flex: 2,
    padding: 15,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#004A87', // Color institucional
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end', // El modal sale desde abajo
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 30,
    alignItems: 'center',
  },
  modalEmoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#6C757D',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },
  calendarButton: {
    width: '100%',
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  calendarButtonText: {
    color: '#1976D2',
    fontWeight: 'bold',
    fontSize: 16,
  },
  closeModalButton: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
  },
  closeModalText: {
    color: '#6C757D',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EventDetailScreen;
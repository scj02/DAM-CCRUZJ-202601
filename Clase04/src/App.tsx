import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Importamos las pantallas desde tu ruta específica
import SplashScreen from './components/screens/SplashScreen';
import LoginScreen from './components/screens/LoginScreen';
import HomeScreen from './components/screens/HomeScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import EventDetailScreen from './components/screens/EventDetailScreen';
import CreateEventScreen from './components/screens/CreateEventScreen';
import UpdateEventScreen from './components/screens/UpdateEventScreen';
import NotificationsScreen from './components/screens/NotificationsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// --- CONFIGURACIÓN DEL FLUJO 2 (TABS) ---
// Este componente agrupa las pantallas que tienen la barra de navegación inferior
const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// --- CONFIGURACIÓN DEL FLUJO 1 Y ENRUTADOR PRINCIPAL ---
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* El Stack Navigator maneja el flujo general. Ocultamos el header nativo. */}
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          {/* Una vez en MainTabs, el Tab Navigator toma el control */}
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="EventDetail" component={EventDetailScreen} />
          <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
          <Stack.Screen name="UpdateEvent" component={UpdateEventScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
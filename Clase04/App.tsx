import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Importamos las pantallas desde la carpeta src
import SplashScreen from './src/components/screens/SplashScreen';
import LoginScreen from './src/components/screens/LoginScreen';
import HomeScreen from './src/components/screens/HomeScreen';
import ProfileScreen from './src/components/screens/ProfileScreen';
import EventDetailScreen from './src/components/screens/EventDetailScreen';
import CreateEventScreen from './src/components/screens/CreateEventScreen';
import UpdateEventScreen from './src/components/screens/UpdateEventScreen';
import NotificationsScreen from './src/components/screens/NotificationsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// --- CONFIGURACIÓN DEL FLUJO 2 (TABS) ---
const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// --- ENRUTADOR PRINCIPAL ---
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
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

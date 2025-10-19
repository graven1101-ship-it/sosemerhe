import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import BottomNavigation from './components/BottomNavigation';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const router = useRouter();

  const emergencyContacts = [
    { id: 1, name: 'Sarah Johnson', relation: 'Spouse' },
    { id: 2, name: 'David Smith', relation: 'Friend' },
    { id: 3, name: 'Emily Chen', relation: 'Mother' },
  ];

  const safetyTips = [
    { id: 1, title: 'Stay Calm & Assess', description: 'In an emergency, take a deep breath. Quickly assess the situation and identify immediate dangers before acting.' },
    { id: 2, title: 'Know Your Exits', description: 'Always be aware of emergency exits in any building. Have a clear escape plan for your home and workplace.' },
    { id: 3, title: 'First Aid Basics', description: 'Familiarize yourself with basic first aid. Simple knowledge can save lives until professional help arrives.' },
  ];

  const handleSOSPress = () => {
    router.push('/sosBOTTON');

  };

  // Add error handling for image loading
  const renderBellIcon = () => {
    // prefer bundled image if present, otherwise fall back to vector icon
    try {
      // attempt to require the image; this will throw at runtime if not present in the bundle
      const img = require('./assets/bell.png');
      if (img) {
        return <Image source={img} style={styles.bellIcon} />;
      }
    } catch (err) {
      // fallback to vector icon
      return <Feather name="bell" size={24} color="#666" />;
    }
    // final fallback
    return <Feather name="bell" size={24} color="#666" />;
  };

  return (
    <SafeAreaView style={[styles.container, Platform.OS === 'android' && styles.androidSafeArea]}>
      <StatusBar style={Platform.OS === 'ios' ? 'dark' : 'light'} />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Emergency Home</Text>
        <TouchableOpacity>
          {renderBellIcon()}
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <TouchableOpacity style={styles.sosButton} onPress={handleSOSPress}>
          <Text style={styles.sosText}>SOS - Tap for Emergency</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Emergency Contacts</Text>
          {emergencyContacts.map(contact => (
            <View key={contact.id} style={styles.contactCard}>
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>{contact.name}</Text>
                <Text style={styles.contactRelation}>{contact.relation}</Text>
              </View>
              <View style={styles.contactActions}>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>Message</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Community Updates</Text>
          <View style={styles.updateCard}>
            <Text style={styles.updateTitle}>New Emergency Alert System Test Scheduled</Text>
            <Text style={styles.updateDate}>October 20, 2023</Text>
            <Text style={styles.updateDescription}>A system-wide test of our new emergency alert feature will take place on October 26th</Text>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Safety Tips</Text>
          {safetyTips.map(tip => (
            <View key={tip.id} style={styles.tipCard}>
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <Text style={styles.tipDescription}>{tip.description}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <BottomNavigation 
        currentScreen={currentScreen}
        onScreenChange={setCurrentScreen}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingTop: Platform.OS === 'android' ? 40 : 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
  content: {
    flex: 1,
  },
  sosButton: {
    backgroundColor: '#ff4081',
    padding: 20,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  sosText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contactCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '500',
  },
  contactRelation: {
    color: '#666',
    marginTop: 4,
  },
  contactActions: {
    flexDirection: 'row',
    // 'gap' is not supported on React Native; use margin on children instead
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ff4081',
  },
  actionText: {
    color: '#ff4081',
  },
  updateCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  updateTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  updateDate: {
    color: '#666',
    marginTop: 4,
  },
  updateDescription: {
    marginTop: 8,
  },
  readMore: {
    color: '#ff4081',
    marginTop: 8,
  },
  tipCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  tipDescription: {
    color: '#444',
  },
});

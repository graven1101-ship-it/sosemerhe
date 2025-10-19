
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import BottomNavigation from './components/BottomNavigation';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('index');
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, styles.androidSafeArea]}>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.headerTitle}>Login Here</Text>
        </View>
      </View>

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

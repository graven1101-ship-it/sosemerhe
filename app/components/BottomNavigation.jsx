import React from 'react';
import { View, Text, StyleSheet, Platform, Pressable } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

const BottomNavigation = ({ currentScreen }) => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      <View style={styles.navigation}>
        <Pressable 
          style={styles.navItem} 
          onPress={() => router.push('/home')}
        >
          <Feather 
            name="home" 
            size={24} 
            color={currentScreen === 'Home' ? '#ff4081' : '#666'} 
          />
          <Text style={[styles.navText, currentScreen === 'Home' && styles.activeText]}>
            HOME
          </Text>
        </Pressable>   
        
        <Pressable 
          style={styles.navItem}
          onPress={() => router.push('/contacts')}
        >
          <Feather 
            name="users" 
            size={24} 
            color={currentScreen === 'Contacts' ? '#ff4081' : '#666'} 
          />
          <Text style={[styles.navText, currentScreen === 'Contacts' && styles.activeText]}>
            Contacts
          </Text>
        </Pressable>
        
        <Pressable 
          style={styles.navItem}
          onPress={() => router.push('/updates')}
        >
          <Feather 
            name="bell" 
            size={24} 
            color={currentScreen === 'Updates' ? '#ff4081' : '#666'} 
          />
          <Text style={[styles.navText, currentScreen === 'Updates' && styles.activeText]}>
            Updates
          </Text>
        </Pressable>
        
        <Pressable 
          style={styles.navItem}
          onPress={() => router.push('/hotlines')}
        >
          <MaterialIcons 
            name="emergency" 
            size={24} 
            color={currentScreen === 'Hotlines' ? '#ff4081' : '#666'} 
          />
          <Text style={[styles.navText, currentScreen === 'Hotlines' && styles.activeText]}>
            Hotlines
          </Text>
        </Pressable>
        
        <Pressable 
          style={styles.navItem}
          onPress={() => router.push('/profile')}
        >
          <Feather 
            name="user" 
            size={24} 
            color={currentScreen === 'Profile' ? '#ff4081' : '#666'} 
          />
          <Text style={[styles.navText, currentScreen === 'Profile' && styles.activeText]}>
            Profile
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    zIndex: 1000,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: Platform.OS === 'ios' ? 8 : 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
  activeText: {
    color: '#ff4081',
  }
});

export default BottomNavigation;
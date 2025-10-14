import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import BottomNavigation from './components/BottomNavigation';
import { Linking } from 'react-native';

const hotlines = [
  {
    id: 1,
    name: 'Police Emergency',
    number: '911',
    icon: 'shield',
  },
  {
    id: 2,
    name: 'Medical Emergency',
    number: '911',
    icon: 'plus-square',
  },
  {
    id: 3,
    name: 'Fire Department',
    number: '911',
    icon: 'flag',
  },
  {
    id: 4,
    name: 'Poison Control',
    number: '1-800-222-1222',
    icon: 'alert-triangle',
  },
  {
    id: 5,
    name: 'Coast Guard',
    number: '1-800-424-8802',
    icon: 'anchor',
  },
  {
    id: 6,
    name: 'Domestic Violence Hotline',
    number: '1-800-799-SAFE',
    icon: 'home',
  },
];

const HotlineItem = ({ name, number, icon }) => {
  const handleCall = () => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <View style={styles.hotlineItem}>
      <View style={styles.leftContent}>
        <View style={styles.iconContainer}>
          <Feather name={icon} size={24} color="#ff1744" />
        </View>
        <View>
          <Text style={styles.hotlineName}>{name}</Text>
          <Text style={styles.hotlineNumber}>{number}</Text>
        </View>
      </View>
      <Pressable onPress={handleCall} style={styles.callButton}>
        <Text style={styles.callButtonText}>Call Now</Text>
      </Pressable>
    </View>
  );
};

const HotlinesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Emergency Hotlines</Text>
      </View>
      
      <View style={styles.content}>
        {hotlines.map((hotline) => (
          <HotlineItem
            key={hotline.id}
            name={hotline.name}
            number={hotline.number}
            icon={hotline.icon}
          />
        ))}
      </View>
      
      <BottomNavigation currentScreen="Hotlines" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  hotlineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffe5ea',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  hotlineName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  hotlineNumber: {
    fontSize: 14,
    color: '#666',
  },
  callButton: {
    backgroundColor: '#ff1744',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  callButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default HotlinesScreen;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigation from './components/BottomNavigation';

const { width } = Dimensions.get('window');

const updatesData = [
  {
    id: '1',
    level: 'Urgent',
    time: '15 min ago',
    title: 'Flash Flood Warning Issued',
    desc: 'Heavy rainfall expected across the region. Avoid low-lying areas.',
    location: 'Central Valley',
  },
  {
    id: '2',
    level: 'info',
    time: '1 hour ago',
    title: 'Power Outage Affects West District',
    desc: 'Estimated restoration in 2-4 hours. Stay safe and avoid downed lines.',
    location: 'West District',
  },
  {
    id: '3',
    level: 'info',
    time: '3 hours ago',
    title: 'Road Closure: Main Street Bridge',
    desc: 'Bridge closed due to structural inspection. Use alternative routes.',
    location: 'Main Street',
  },
  {
    id: '4',
    level: 'Resolved',
    time: 'Yesterday',
    title: 'Shelter-in-Place Advisory Lifted',
    desc: 'All clear given for residents in the East Sector. Resume normal activities.',
    location: 'East Sector',
  },
];

const centersData = [
  {
    id: 'c1',
    name: 'Community Relief Hall',
    address: '123 Safe Haven Rd, Central City',
    distance: '2.5 miles',
    status: 'Open',
    note: 'High availability',
  },
  {
    id: 'c2',
    name: 'Red Cross Shelter',
    address: '456 Aid St, Northside',
    distance: '4.1 miles',
    status: 'Full',
    note: 'No current space',
  },
  {
    id: 'c3',
    name: 'Municipal Sports Complex',
    address: '789 Stadium Ave, South End',
    distance: '5.8 miles',
    status: 'Open',
    note: 'Moderate availability',
  },
];

const Tag = ({ label }) => {
  const color =
    label.toLowerCase() === 'urgent' ? '#ff6b81' : label.toLowerCase() === 'resolved' ? '#9e9e9e' : '#bdbdbd';
  return (
    <View style={[styles.tag, { backgroundColor: color }]}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
};

const UpdateCard = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Tag label={item.level} />
      <Text style={styles.timeText}>{item.time}</Text>
    </View>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text style={styles.cardDesc}>{item.desc}</Text>
    <View style={styles.cardFooter}>
      <Feather name="map-pin" size={14} color="#9e9e9e" />
      <Text style={styles.locationText}>{item.location}</Text>
    </View>
  </View>
);

const CenterCard = ({ center, onDirections }) => (
  <View style={styles.centerCard}>
    <View style={styles.centerImagePlaceholder} />
    <View style={styles.centerContent}>
      <View style={styles.centerTopRow}>
        <Text style={styles.centerTitle}>{center.name}</Text>
        <Text style={styles.centerDistance}>{center.distance}</Text>
      </View>
      <Text style={styles.centerAddress}>{center.address}</Text>
      <View style={styles.centerStatusRow}>
        <Text style={[styles.centerStatus, center.status === 'Full' && styles.fullStatus]}>
          {center.status}
        </Text>
        <Text style={styles.centerNote}>{center.note}</Text>
      </View>
      <Pressable style={styles.directionsButton} onPress={onDirections}>
        <Text style={styles.directionsButtonText}>Get Directions</Text>
      </Pressable>
    </View>
  </View>
);

const UpdatesScreen = () => {
  const router = useRouter();

  const goToDirections = (center) => {
    
    router.push('/hotlines');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Community Hub</Text>
        <Pressable style={styles.headerIcon}>
          <Feather name="bell" size={20} color="#ff4081" />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Recent Updates</Text>

        {updatesData.map((u) => (
          <UpdateCard key={u.id} item={u} />
        ))}

        <Text style={[styles.sectionTitle, { marginTop: 18 }]}>Evacuation Centers</Text>

        {centersData.map((c) => (
          <CenterCard key={c.id} center={c} onDirections={() => goToDirections(c)} />
        ))}

        <View style={{ height: 120 }} /> 
      </ScrollView>

      <BottomNavigation currentScreen="Updates" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    height: 64,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  headerIcon: {
    position: 'absolute',
    right: 16,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    color: '#222',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    width: width - 32,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  timeText: {
    color: '#9e9e9e',
    fontSize: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
    color: '#111',
  },
  cardDesc: {
    color: '#666',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: '#9e9e9e',
    marginLeft: 6,
    fontSize: 13,
  },
  centerCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 14,
    width: width - 32,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  centerImagePlaceholder: {
    height: 120,
    backgroundColor: '#efefef',
  },
  centerContent: {
    padding: 12,
  },
  centerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
  },
  centerDistance: {
    color: '#9e9e9e',
    fontSize: 13,
  },
  centerAddress: {
    color: '#777',
    marginTop: 6,
    fontSize: 13,
  },
  centerStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
  },
  centerStatus: {
    backgroundColor: '#e9e9e9',
    color: '#555',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: '600',
  },
  fullStatus: {
    backgroundColor: '#ffd6dd',
    color: '#d32f2f',
  },
  centerNote: {
    color: '#9e9e9e',
    marginLeft: 8,
    fontSize: 12,
  },
  directionsButton: {
    marginTop: 10,
    backgroundColor: '#ff1744',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  directionsButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default UpdatesScreen;

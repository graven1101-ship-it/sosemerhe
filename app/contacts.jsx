import React from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import BottomNavigation from './components/BottomNavigation';

const contacts = [
  { id: '1', name: 'Alice Johnson', role: 'Work Colleague', avatar: null },
  { id: '2', name: 'Bob Smith', role: 'Family Member', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '3', name: 'Carol White', role: 'Close Friend', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: '4', name: 'David Brown', role: 'Gym Buddy', avatar: null },
  { id: '5', name: 'Eve Davis', role: 'Project Lead', avatar: null },
  { id: '6', name: 'Frank Green', role: 'Childhood Friend', avatar: null },
  { id: '7', name: 'Grace Hall', role: 'Book Club Member', avatar: null },
];

const ContactItem = ({ name, role, avatar }) => (
  <View style={styles.contactItem}>
    {avatar ? (
      <Image source={{ uri: avatar }} style={styles.avatar} />
    ) : (
      <View style={styles.avatarPlaceholder}>
        <Ionicons name="person" size={28} color="#bdbdbd" />
      </View>
    )}
    <View style={{ flex: 1 }}>
      <Text style={styles.contactName}>{name}</Text>
      <Text style={styles.contactRole}>{role}</Text>
    </View>
    <TouchableOpacity style={styles.iconButton}>
      <MaterialIcons name="call" size={24} color="#e60050" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconButton}>
      <MaterialIcons name="message" size={24} color="#e60050" />
    </TouchableOpacity>
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Contacts</Text>
        <View style={styles.headerAvatar}>
          <Ionicons name="person-circle-outline" size={28} color="#bdbdbd" />
        </View>
      </View>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={20} color="#bdbdbd" style={{ marginLeft: 10 }} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search contacts..."
          placeholderTextColor="#bdbdbd"
        />
      </View>
      {/* Contact List */}
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ContactItem name={item.name} role={item.role} avatar={item.avatar} />
        )}
        contentContainerStyle={{ paddingBottom: 90 }}
        style={{ flex: 1 }}
      />
      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
      {/* Bottom Navigation */}
      <BottomNavigation currentScreen="Contacts" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 40,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  headerAvatar: {
    position: 'absolute',
    right: 20,
    top: 0,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginHorizontal: 16,
    borderRadius: 8,
    height: 40,
    marginBottom: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: 'transparent',
    color: '#333',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    marginHorizontal: 12,
    marginVertical: 5,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  contactRole: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  iconButton: {
    marginLeft: 10,
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 80,
    backgroundColor: '#e60050',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#e60050',
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
});

export default App;

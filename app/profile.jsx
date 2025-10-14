import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
  Switch,
  Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigation from './components/BottomNavigation';

const { width } = Dimensions.get('window');

const EmergencyContactRow = ({ contact, onCall, onMessage }) => (
  <View style={styles.contactRow}>
    <View style={styles.contactLeft}>
      <View style={styles.contactAvatarPlaceholder}>
        {contact.avatar ? (
          <Image source={{ uri: contact.avatar }} style={styles.contactAvatar} />
        ) : (
          <Feather name="user" size={20} color="#bdbdbd" />
        )}
      </View>
      <View style={{ marginLeft: 12 }}>
        <Text style={styles.contactName}>{contact.name}</Text>
        <Text style={styles.contactRole}>{contact.role}</Text>
      </View>
    </View>

    <View style={styles.contactActions}>
      <Pressable style={styles.iconButton} onPress={onCall}>
        <Feather name="phone" size={18} color="#333" />
      </Pressable>
      <Pressable style={styles.iconButton} onPress={onMessage}>
        <Feather name="message-circle" size={18} color="#333" />
      </Pressable>
    </View>
  </View>
);

const ProfileScreen = () => {
  const router = useRouter();
  const [pushEnabled, setPushEnabled] = useState(true);

  const contacts = [
    { id: '1', name: 'Maria Rodriguez', role: 'Mother' },
    { id: '2', name: 'Daniel Lee', role: 'Spouse' },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Pressable style={styles.headerBack} onPress={() => router.back()}>
          <Feather name="arrow-left" size={20} color="#222" />
        </Pressable>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.profileCard}>
          <View style={styles.avatarWrap}>
            <View style={styles.avatarPlaceholder}>
              <Feather name="image" size={36} color="#e99" />
            </View>
            <Text style={styles.profileName}>Sophia Rodriguez</Text>
            <View style={styles.badgeRow}>
              <Feather name="award" size={14} color="#ff6b81" />
              <Text style={styles.badgeText}> Certified First Responder</Text>
            </View>
            <Pressable style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Contact Information</Text>

          <View style={styles.infoRow}>
            <Feather name="mail" size={18} color="#777" />
            <Text style={styles.infoText}>sophia.r@example.com</Text>
          </View>

          <View style={styles.infoRow}>
            <Feather name="phone" size={18} color="#777" />
            <Text style={styles.infoText}>+1 (555) 123-4567</Text>
          </View>

          <View style={styles.infoRow}>
            <Feather name="map-pin" size={18} color="#777" />
            <Text style={styles.infoText}>123 Oak Avenue, City, State, 12345</Text>
          </View>
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 12 }]}>Emergency Contacts</Text>
        <View style={styles.contactsCard}>
          {contacts.map((c) => (
            <EmergencyContactRow
              key={c.id}
              contact={c}
              onCall={() => {
                /* implement call flow */
              }}
              onMessage={() => {
                /* implement message flow */
              }}
            />
          ))}
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 12 }]}>App Settings</Text>
        <View style={styles.settingsCard}>
          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Feather name="bell" size={18} color="#777" />
              <Text style={styles.settingText}>Push Notifications</Text>
            </View>
            <Switch
              value={pushEnabled}
              onValueChange={setPushEnabled}
              trackColor={{ false: '#e6e6e6', true: '#ff6b81' }}
              thumbColor="#fff"
            />
          </View>

          <Pressable style={styles.settingRow} onPress={() => router.push('/two-factor')}>
            <View style={styles.settingLeft}>
              <Feather name="shield" size={18} color="#777" />
              <Text style={styles.settingText}>Two-Factor Authentication</Text>
            </View>
            <View style={styles.settingRight}>
              <Text style={styles.manageText}>Manage</Text>
              <Feather name="chevron-right" size={18} color="#bdbdbd" />
            </View>
          </Pressable>

          <Pressable style={styles.settingRow} onPress={() => router.push('/language-settings')}>
            <View style={styles.settingLeft}>
              <Feather name="globe" size={18} color="#777" />
              <Text style={styles.settingText}>Language Settings</Text>
            </View>
            <View style={styles.settingRight}>
              <Text style={styles.manageText}>Manage</Text>
              <Feather name="chevron-right" size={18} color="#bdbdbd" />
            </View>
          </Pressable>
        </View>

        <View style={styles.actionsList}>
          <Pressable style={styles.actionRow}>
            <Feather name="key" size={18} color="#444" />
            <Text style={styles.actionText}>Change Password</Text>
          </Pressable>

          <Pressable style={styles.actionRow}>
            <Feather name="log-out" size={18} color="#444" />
            <Text style={styles.actionText}>Log Out</Text>
          </Pressable>

          <Pressable style={[styles.actionRow, { justifyContent: 'flex-start' }]}>
            <Feather name="trash-2" size={18} color="#ff4d6d" />
            <Text style={[styles.actionText, { color: '#ff4d6d' }]}>Delete Account</Text>
          </Pressable>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      <BottomNavigation currentScreen="Profile" />
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
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  headerBack: {
    position: 'absolute',
    left: 16,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  profileCard: {
    backgroundColor: '#fff0f2',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 12,
    alignItems: 'center',
    width: width - 32,
    alignSelf: 'center',
  },
  avatarWrap: {
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#fdeff2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111',
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 10,
  },
  badgeText: {
    color: '#ff6b81',
    fontWeight: '600',
    fontSize: 12,
  },
  editButton: {
    marginTop: 6,
    backgroundColor: '#ff1744',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 8,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    width: width - 32,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10,
    color: '#222',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  infoText: {
    marginLeft: 12,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginLeft: 4,
  },
  contactsCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: 8,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  contactLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactAvatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  contactName: {
    fontWeight: '700',
    color: '#111',
  },
  contactRole: {
    color: '#999',
    fontSize: 12,
    marginTop: 2,
  },
  contactActions: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 44,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ececec',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    backgroundColor: '#fff',
  },
  settingsCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginTop: 8,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f6f6f6',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    marginLeft: 12,
    fontSize: 15,
    color: '#222',
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  manageText: {
    color: '#999',
    marginRight: 8,
  },
  actionsList: {
    marginTop: 14,
    width: width - 32,
    alignSelf: 'center',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    gap: 12,
  },
  actionText: {
    marginLeft: 12,
    color: '#333',
    fontSize: 15,
  },
});

export default ProfileScreen;

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';

export default function EmergencyScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Emergency',
          headerStyle: { backgroundColor: '#ff4081' },
          headerTintColor: '#fff',
        }} 
      />
      <View style={styles.container}>
        <Text style={styles.title}>Emergency Services</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.emergencyButton}>
            <Text style={styles.buttonText}>Call Police</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.emergencyButton}>
            <Text style={styles.buttonText}>Call Ambulance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.emergencyButton}>
            <Text style={styles.buttonText}>Call Fire Department</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    gap: 15,
  },
  emergencyButton: {
    backgroundColor: '#ff4081',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

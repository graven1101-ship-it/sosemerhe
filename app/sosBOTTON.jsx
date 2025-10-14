import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StatusBar,
  StyleSheet,
  Vibration,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function EmergencySOS() {
  const router = useRouter();
  const START_COUNT = 10;
  const [count, setCount] = useState(START_COUNT);
  const [running, setRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setCount((c) => {
          if (c <= 1) {
            clearInterval(intervalRef.current);
            Vibration.cancel(); // Stop vibration when countdown ends
            return 0;
          }
          Vibration.vibrate(500); // Vibrate for 500ms each second
          return c - 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(intervalRef.current);
      Vibration.cancel(); // Clean up vibration when component unmounts
    };
  }, [running]);

  const onStop = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
    Vibration.cancel(); // Stop vibration when stopped
    setCount(START_COUNT);
    router.back();
  };

  const onEmergencyCall = () => {
    // TODO: Implement your emergency call logic
    // For example, Linking.openURL('tel:911') or your local emergency number
    // Or navigate to a dedicated call screen
    console.log('Emergency Call pressed');
  };

  const onSOS = () => {
    // Optional: Immediate SOS trigger behavior (different from Emergency Call)
    console.log('SOS pressed');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      {/* Mock status row */}
      <View style={styles.topBar}>
        <Text style={styles.topTime}>9:41</Text>
        <View style={styles.topIndicators}>
          <View style={styles.indicatorBar} />
          <View style={[styles.indicatorBar, { width: 14 }]} />
          <View style={[styles.indicatorBar, { width: 10 }]} />
          <View style={styles.wifi} />
          <View style={styles.battery}>
            <View style={styles.batteryLevel} />
          </View>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>EMERGENCY SOS</Text>

      {/* Countdown circle */}
      <View style={styles.circle}>
        <Text style={styles.countText}>{count}</Text>
      </View>

      {/* Description */}
      <Text style={styles.desc}>
        This Phone will call emergency service when the countdown ends.
      </Text>

      {/* Action buttons */}
      <View style={styles.actions}>
        <Pressable onPress={onSOS} style={({ pressed }) => [
          styles.sosBtn,
          pressed && styles.pressed,
        ]}>
          <Text style={styles.sosText}>sos</Text>
        </Pressable>

        <Pressable onPress={onEmergencyCall} style={({ pressed }) => [
          styles.emergencyBtn,
          pressed && styles.pressedLight,
        ]}>
          <Text style={styles.emergencyText}>Emergency Call</Text>
        </Pressable>
      </View>

      {/* Stop button */}
      <Pressable onPress={onStop} style={({ pressed }) => [
        styles.stopBtn,
        pressed && styles.pressedLight,
      ]}>
        <Text style={styles.stopX}>×</Text>
        <Text style={styles.stopText}>Stop</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const RED = '#E4332D';
const BLUE = '#0A84FF';
const BG = '#000000';
const TEXT = '#FFFFFF';
const SUBTEXT = 'rgba(255,255,255,0.75)';
const BORDER = 'rgba(255,255,255,0.2)';

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: BG,
    alignItems: 'center',
  },
  topBar: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topTime: {
    color: TEXT,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  topIndicators: {
    flexDirection: 'row',
    alignItems: 'center',
    // 'gap' isn't supported in React Native; use spacing on children instead
  },
  indicatorBar: {
    height: 8,
    width: 18,
    backgroundColor: TEXT,
    borderRadius: 2,
    opacity: 0.8,
  },
  wifi: {
    width: 16,
    height: 16,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: TEXT,
    transform: [{ rotate: '45deg' }],
    marginLeft: 2,
    opacity: 0.8,
  },
  battery: {
    width: 22,
    height: 12,
    borderWidth: 1,
    borderColor: TEXT,
    borderRadius: 3,
    marginLeft: 4,
    justifyContent: 'center',
    padding: 1,
    opacity: 0.8,
  },
  batteryLevel: {
    width: 14,
    height: 8,
    backgroundColor: TEXT,
    borderRadius: 2,
  },

  title: {
    marginTop: 16,
    color: TEXT,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1.2,
  },

  circle: {
    marginTop: 24,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: RED,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: RED,
    shadowOpacity: 0.45,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
  },
  countText: {
    color: TEXT,
    fontSize: 72,
    fontWeight: '800',
  },

  desc: {
    marginTop: 16,
    color: SUBTEXT,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 32,
    lineHeight: 20,
  },

  actions: {
    marginTop: 24,
    width: '86%',
    // use marginVertical on children for spacing
  },

  sosBtn: {
    backgroundColor: RED,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sosText: {
    color: TEXT,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },

  emergencyBtn: {
    borderWidth: 2,
    borderColor: BLUE,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  emergencyText: {
    color: TEXT,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  stopBtn: {
    position: 'absolute',
    bottom: 100, // moved higher from 24
    width: 80, // added fixed width
    height: 80, // added fixed height
    flexDirection: 'column', // changed from row to stack text vertically
    alignItems: 'center',
    justifyContent: 'center', // added to center content
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 40, // made fully circular (half of width/height)
  },
  stopX: {
    color: TEXT,
    fontSize: 24, // increased size
    fontWeight: '800',
    marginBottom: 4, // added spacing between X and text
  },
  stopText: {
    color: TEXT,
    fontSize: 14,
    fontWeight: '700',
  },

  pressed: {
    opacity: 0.85,
  },
  pressedLight: {
    opacity: 0.9,
  },
});

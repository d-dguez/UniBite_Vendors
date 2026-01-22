import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';

export default function App() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 100,
        color: '#4caf50',
        marginBottom: 5,
        fontWeight: '800',
        fontFamily: 'impact',
    },
    subtitle: {
        fontSize: 35,
        color: '#ff9800',
        marginBottom: 20,
        fontWeight: '800',
        fontFamily: 'helvetica',
    },
    logo: {
        width: 250,
        height: 250,
    },
    customButton1: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ff9800',
      borderColor: '#ff9800',
      borderWidth: 1.5,
      borderRadius: 10,
      padding: 10,
      gap: 10,
      width: 300,
      marginBottom: 15,
    },
    customButton2: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderColor: '#000',
      borderWidth: 1.5,
      borderRadius: 10,
      padding: 10,
      gap: 10,
      width: 300,
      marginBottom: 15,
    },
    customButton3: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderColor: '#fff',
      borderWidth: 1.5,
      borderRadius: 10,
      padding: 10,
      gap: 10,
      width: 70,
      marginBottom: 15,
    },
    buttonIcon: {
      width: 24,
      height: 24,
    },
    buttonText1: {
      fontSize: 18,
      fontFamily: 'helvetica',
      color: '#fff',
      fontWeight: '600',
    },
    buttonText2: {
      fontSize: 18,
      fontFamily: 'helvetica',
      color: '#000',
      fontWeight: '450',
    },
  });
  
  return (
    <View style={styles.container}>
        <Image source={require('../Media/UniBite_Logo_CC1.png')} style={styles.logo} />
        <Text style={styles.title}>UNIBITE</Text>
        <Text style={styles.subtitle}>Vendors</Text>

        <TouchableOpacity style={styles.customButton1} onPress={() => router.push('/orders/newPreview')}>
          <Text style={styles.buttonText1}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customButton2} onPress={() => setCount(count + 1)}>
          <Image source={require('../Media/googleLogo.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText2}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customButton2} onPress={() => setCount(count + 1)}>
          <Image source={require('../Media/outlookLogo.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText2}>Continue with Outlook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customButton2} onPress={() => setCount(count + 1)}>
          <Image source={require('../Media/appleLogo.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText2}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customButton3} onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText2}>Login</Text>
        </TouchableOpacity>
    </View>
  );
}
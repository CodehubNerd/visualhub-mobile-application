import React from 'react';
import { View, SafeAreaView, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Welcome = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/welcomebg.jpg')}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Welcome to Visualshub</Text>
        <Text style={styles.subheading}>Where every picture tells a story</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heading: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Welcome;

import React from 'react';
import { View, SafeAreaView, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS ,FONTS,SHADOWS, SIZES} from '../constants';


const Welcome = () => {
  return (


      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Visualshub</Text>
        <Text style={styles.smallheading}>where every picture tells a stroy</Text>
    </SafeAreaView>
    
  
  );
};

const styles = StyleSheet.create({
  container:{
    justifyContent:'center'
 },
  heading: {
   
    fontSize: 50,
    color: '#ABD4FA',
    fontWeight: '400',
    marginTop: 50,
    paddingLeft:20,
    marginBottom: 20,
    textAlign: 'left',
  },
  smallheading: {
    fontSize: 18,
    color: '#ABD4FA',
    fontWeight: '400',

    paddingLeft:20,
    marginBottom: 20,
    textAlign: 'left',
  },
});
export default Welcome;

import React from 'react';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export const SplashScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.sectionView}>
        <Text style={styles.sectionText}>Bem Vindo ao Find Houses!!!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionView: {
    height: 100,
    width: '100%',
    backgroundColor: 'red',
  },
  sectionText: {
    color: 'white',
  },
});

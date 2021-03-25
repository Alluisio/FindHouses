import React from 'react';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.sectionView}>
        <Text>Bem Vindo ao Find Houses!!!</Text>
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
});

export default App;

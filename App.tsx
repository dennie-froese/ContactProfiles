import React from 'react';
import Header from './src/components/Header';
import Picture from './src/components/Picture';
import {View, StyleSheet, ScrollView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView horizontal={true}>
        <Picture />
        <Picture />
        <Picture />
        <Picture />
        <Picture />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

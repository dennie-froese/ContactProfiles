import React from 'react';
import Header from './src/components/Header';
import Picture from './src/components/Picture';
import {View, StyleSheet, ScrollView} from 'react-native';

export default function App() {
  const profiles = require('./src/profiles.json');
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView horizontal={true}>
        {profiles.profiles.map((item: any) => {
          return <Picture name={item.name} />;
        })}
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

import React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  profileID?: string;
}

export default function Picture(_profileID: Props) {
  return (
    <View style={styles.frame}>
      <View style={styles.picture} />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: 30,
    height: 100,
    width: 100,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    overflow: 'hidden',
  },
  picture: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

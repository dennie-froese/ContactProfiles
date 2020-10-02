import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

interface Props {
  name: string;
}

export default function Picture({name}: Props) {
  function url() {
    switch (name?.replace(/\s/g, '')) {
      case 'AllanMunger':
        return require('src/avatars/AllanMunger.png');
      case 'AmandaBrady':
        return require('src/avatars/AmandaBrady.png');
      case 'AshleyMcCarthy':
        return require('src/avatars/AshleyMcCarthy.png');
      case 'CarlosSlattery':
        return require('src/avatars/CarlosSlattery.png');
      case 'CarolePoland':
        return require('src/avatars/CarolePoland.png');
      case 'CecilFolk':
        return require('src/avatars/CecilFolk.png');
      case 'CelesteBurton':
        return require('src/avatars/CelesteBurton.png');
      case 'CharlotteWaltson':
        return require('src/avatars/CharlotteWaltson.png');
      case 'ColinBallinger':
        return require('src/avatars/ColinBallinger.png');
      case 'DaisyPhillips':
        return require('src/avatars/DaisyPhillips.png');
      case 'ElliotWoodward':
        return require('src/avatars/ElliotWoodward.png');
      case 'ElviaAtkins':
        return require('src/avatars/ElviaAtkins.png');
      case 'ErikNason':
        return require('src/avatars/ErikNason.png');
      case 'HenryBrill':
        return require('src/avatars/HenryBrill.png');
      case 'IsaacFielder':
        return require('src/avatars/IsaacFielder.png');
      case 'JohnieMcConnell':
        return require('src/avatars/JohnieMcConnell.png');
      case 'KatLarsson':
        return require('src/avatars/KatLarsson.png');
      case 'KatriAhokas':
        return require('src/avatars/KatriAhokas.png');
      case 'KevinSturgis':
        return require('src/avatars/KevinSturgis.png');
      case 'KristinPatterson':
        return require('src/avatars/KristinPatterson.png');
      case 'LydiaBauer':
        return require('src/avatars/LydiaBauer.png');
      case 'MauricioAugust':
        return require('src/avatars/MauricioAugust.png');
      case 'MiguelGarcia':
        return require('src/avatars/MiguelGarcia.png');
      case 'MonaKane':
        return require('src/avatars/MonaKane.png');
      case 'RobertTolbert':
        return require('src/avatars/RobertTolbert.png');
      case 'RobinCounts':
        return require('src/avatars/RobinCounts.png');
      case 'TimDeboer':
        return require('src/avatars/TimDeboer.png');
      case 'WandaHoward':
        return require('src/avatars/WandaHoward.png');
    }
  }

  return (
    <View style={styles.frame}>
      <Image style={styles.picture} source={url()} />
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
  },
});

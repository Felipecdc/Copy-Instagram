import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headercontent}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <TouchableOpacity>
            <Image
            source={require('../img/logo.png')}
            style={styles.logo}
            />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image
            source={require('../img/send.png')}
            style={styles.send}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headercontent:{
        paddingTop: StatusBar.currentHeight,
    },
    header: {
        height: 55,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 2,
    },
    send:{
        height: 20,
        width: 20
    }
});

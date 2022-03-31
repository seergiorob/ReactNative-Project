import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';

function HeroHome() {
  return (
    <View style={styles.heroHome}>
        <ImageBackground source={require('../../../assets/img/herotest.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.textHome}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    heroHome: {
      marginTop: 50,
      flex: 1,

      backgroundColor: 'white',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    textHome: {
        padding: 16,
        fontSize: 35,
        color: 'white',
        alignItems: 'center',
        justifyContent: "center",
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 4,
    },
    image: {
        marginTop: -50,
        flex: 1,
        width: '100%',
        height: 1000,
        justifyContent: "center",
    }
  });


export default HeroHome
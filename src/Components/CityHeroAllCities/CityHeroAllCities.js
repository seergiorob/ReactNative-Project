import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function CityHeroAllCities() {
  return (
    <View style={styles.heroCity}>
        <ImageBackground source={require('../../../assets/img/sydney.jpg')} resizeMode="cover" style={styles.imageCityHero}>
        <Text style={styles.textHeroCity}>Welcome to your next destination</Text>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    heroCity: {
      marginTop: 50,
      flex: 1,

      backgroundColor: 'white',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    textHeroCity: {
        padding: 16,
        // flex: 1,
        fontSize: 40,
        color: 'white',

        alignItems: 'center',
        justifyContent: "center",
        textShadowColor: 'black',
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 4,
    },
    imageCityHero: {
        marginTop: -50,
        flex: 1,
        width: '100%',
        height: 1000,
        justifyContent: "center",
    }
  });
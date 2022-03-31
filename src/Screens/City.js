import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import CityHeroAllCities from '../Components/CityHeroAllCities/CityHeroAllCities.js'
import CityCardAllCities from '../Components/CityCardAllCities/CityCardAllCities.js'


function City() {
  return (
    <ScrollView style={styles.cityWrapper}>
        <CityHeroAllCities/> 

        <CityCardAllCities/>
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    cityWrapper: {
      // flex: 1,
      backgroundColor: 'white',
      // alignItems: 'center',
      // justifyContent: 'center',
      
    },
    
  });

export default City
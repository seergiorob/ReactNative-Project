import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import HeroHome from '../Components/HeroHome/HeroHome.js'
import UsHome from '../Components/UsHome/UsHome.js'
import CarouselHome from '../Components/CarouselHome/CarouselHome.js'
import Contact from '../Components/Contact/Contact.js'
import CardReviewHome from '../Components/CardReviewHome/CardReviewHome.js'


function Home() {
  return (
    <ScrollView style={styles.homeWrapper}>
        <HeroHome/>
        <UsHome/>
        {/* <CarouselHome/> */}
        {/* <Contact/> */}
        <CardReviewHome/>
       
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    homeWrapper: {
      // flex: 1,
      backgroundColor: 'black',
      // alignItems: 'center',
      // justifyContent: 'center',
      
    },
    
  });

export default Home
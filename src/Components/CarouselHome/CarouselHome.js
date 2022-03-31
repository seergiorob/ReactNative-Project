import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import CarouselImage from './Carousel'
import imagenes from '../../../assets/datos.js'

const widthScreen = Dimensions.get("window").width

export default function CarouselHome() {
  return (
    <View style={styles.wrapperCarousel}>
      {imagenes.map(foto => 
      <CarouselImage
      key={foto.name}
      images={foto.img}
      height={250}
      width={widthScreen}
      />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
    wrapperCarousel: {
        minHeight: 400,
        width: '100%',
    }
})
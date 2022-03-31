import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { Image } from 'react-native-elements' 

const widthScreen = Dimensions.get("window").width

export default function CarouselImage({images, height, width}) {

    const renderItem = ({item}) => {
        return (
            <Image 
                style={{width, height}}
                PlaceholderContent={<ActivityIndicator color="#fff" />}
                source={{uri:`${item}`}}
            />
        )
    }

  return (
    
    <Carousel
        layout={'default'}
        data={images}
        sliderWidth={width}
        itemWidth={width}
        itemHeight={height}
        renderItem={renderItem}
    />

  )
}

const styles = StyleSheet.create({})
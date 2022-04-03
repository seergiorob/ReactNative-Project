import { StyleSheet, Text, View, Dimensions, SafeAreaView, Image, ImageBackground } from 'react-native'
import React from 'react'
// import CarouselImage from './Carousel'
import imagenes from '../../../assets/datos.js'
import Carousel from 'react-native-snap-carousel'

const widthScreen = Dimensions.get("window").width

export default class CarouselHome extends React.Component {
  
    constructor(props){
      super(props);
        this.state = {
          activeIndex:0,
          carouselItems: imagenes
        }
      }
    _renderItem({item,index}){
      return (
        <View style={{
              backgroundColor:'white',
              borderRadius: 5,
              height: 450,
              padding: 0,
              marginLeft: 8,
              marginRight: 8, }}>
            
            <ImageBackground style={{flex: 1, width: 350, justifyContent: 'center', alignItems: 'center', justifyContent: 'flex-end',}} source={{uri:`${item.img}`}} resizeMode="cover"> 
            <Text style={{fontSize: 25, textAlign: 'center', backgroundColor: 'black', color: 'white', width:'100%', marginBottom: 10, marginTop: 10}}>{item.name}</Text>
            </ImageBackground>
          </View>

)
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'white', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"stack"}
                  // layoutCardOffset={`18`}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={350}
                  itemWidth={350}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

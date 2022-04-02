import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import ItinerariesLikes from '../ItinerariesLikes/ItinerariesLikes.js';

function CityItineraries(props) {



    // useEffect(()=> {
    //     props.fetchearItinerarioPorCiudad(id)
    //     props.fetchearCiudades()
    //   },[])

      const bill1 = ' 💵 '

      const {itinerary, index} = props
      console.log("🚀 ~ file: CityItineraries.js ~ line 18 ~ CityItineraries ~ itinerary", itinerary)

  return (
    <View style={styles.wrapperDetailsItinerary}>
    <View style={styles.profileItinerarySection}>
    <Image style={styles.imgProfileItinerary} source={{ uri: `https://mytineraryrob.herokuapp.com/img/profile/${itinerary.image}`}}/>
    <Text style={styles.textProfileItinerary}>{itinerary.name}</Text>
    </View>
    <View style={styles.textPriceDuration}>
    <Text>Duration: {itinerary.duration}</Text>
    <Text>Price: {bill1.repeat(itinerary.price)}</Text>
    </View>
    <Text style={styles.textTitleItinerary}>{itinerary.itinerary}</Text>

    <Image style={styles.imgItinerary} source={{ uri: `https://mytineraryrob.herokuapp.com/img/itineraries/${itinerary.imgItinerary}`}}/>
    <Text style={styles.descItinerary}>{itinerary.itineraryDesc}</Text>
    <Text style={styles.hashtagItinerary}>{itinerary.hashtags}</Text>
    
    <ItinerariesLikes id={[itinerary._id]} likes={itinerary.likes} />
    
    </View>
  )
}


const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        message: state.userReducer.message,
        message2: state.userReducer.message2,
        ciudad: state.ciudadesReducer.ciudad,
        todasCiudades: state.ciudadesReducer.todasCiudades,
        cargando: state.ciudadesReducer.cargando,
        itinerariosPorCiudad: state.itinerariesReducer.itinerariosPorCiudad
        }
  }

// const mapDispatchToProps = {
//     fetchearCiudad: ciudadesActions.fetchearCiudad,
//     fetchearCiudades: ciudadesActions.fetchearCiudades,
//     fetchearItinerarioPorCiudad: itineraryActions.fetchearItinerarioPorCiudad
// }

export default connect(mapStateToProps, null)(CityItineraries);

const styles = StyleSheet.create({
    wrapperDetailsItinerary:{
        margin: 16,
    },
    imgProfileItinerary:{
        width: 50,
        height: 50,
        borderRadius: 360,
        marginRight: 16,
    },
    profileItinerarySection:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    textProfileItinerary:{
        fontSize: 20,
    },
    textPriceDuration:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 16,
    },
    textTitleItinerary:{
        fontSize: 18,
        margin: 10,
        fontWeight: 'bold',
    },
    imgItinerary:{
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
    descItinerary:{
        fontSize: 18,
        fontStyle: 'italic',
    },
    hashtagItinerary:{
        color: '#00aced',
        marginTop: 10,
        marginBottom: 40,
    },
})
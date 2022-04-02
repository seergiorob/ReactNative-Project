import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, View, StyleSheet, Text, Image, ScrollView } from 'react-native';
// import CityDetails from '../Components/CityDetails/CityDetails.js'
// import MyStack from '../Navigation/Stack.js'
import { connect } from 'react-redux';
import ciudadesActions from '../redux/actions/ciudadesActions.js';
import itineraryActions from '../redux/actions/itineraryActions.js';
import { MaterialIcons } from '@expo/vector-icons';

function Details(props) {

    const id = props.route.params.id
    console.log("🚀 ~ file: Details.js ~ line 12 ~ Details ~ props.route.id", props.route.params.id)

    const {todasCiudades: data, cargando:isLoaded, ciudad: city} = props

    useEffect(() => {
        props.fetchearCiudad(id)
        props.fetchearCiudades()
        props.fetchearItinerarioPorCiudad(id)
    },[id])

    console.log(city)

    return(
        
        <ScrollView>
        
        <View style="styles.wrapperDetails">

        
        <View style="styles.positionCardCardsDetails">
          
          
          {city == null ? (<Text>We're Sorry! We can't find any City there..</Text>): (


            <View style={styles.positionCardCardsDetails}>
              <Image
                style= {styles.heroDetails}
                source={{ uri: `https://mytineraryrob.herokuapp.com/img/${city.image}`}}
              />
              <Image
                style={styles.flagCardCityDetails}
                source={{ uri: `https://mytineraryrob.herokuapp.com/img/${city.flag}`}}
              />
            <Text style={styles.h1tittleheroDetails} >{city.name}</Text>
              <View style={styles.cardtextCityDetails}>
                <View style={styles.cardCityTextDisplayDetails}>
                <View style={styles.iconCityDetails}>
                <Text>
                <MaterialIcons name="attach-money" size={24} color="black" />
                {city.currency}</Text>
                </View>
                <View style={styles.iconCityDetails}>
                <Text><MaterialIcons name="people" size={24} color="black" /> {city.population}</Text>
                </View>
                <View style={styles.iconCityDetails}>
                <Text><MaterialIcons name="outlined-flag" size={24} color="black" /> {city.country}</Text>
                </View>
                <View style={styles.iconCityDetails}>
                <Text><MaterialIcons name="timer" size={24} color="black" /> {city.timezone}</Text>
                </View>
                </View>
              </View>
              <View style={styles.pCityDetails}>
              <Text style={styles.reviewcardCityDetails}>
              <Text>"{city.description}"</Text>
              </Text>
              </View>
              <View style={styles.btnCardCitiesDetails}>
              {/* <Button variant="outlined"><LinkRouter to="/Cities"> BACK TO CITIES</LinkRouter></Button> */}
              </View>
            </View>
          )}
        </View>
      </View>

      {/* {props.itinerariosPorCiudad == null ? (<Text>We're Sorry! We can't find any City there..</Text>) : 
      props.itinerariosPorCiudad.length === 0 ? (<Text style="styles.itineraryNotFound">We're Sorry! We can't find any Itineraries for your City.</Text>) : 
      props.itinerariosPorCiudad.map((itinerary, index) => {
        return (
         
        <ControlledAccordions itinerary={itinerary} index={index} key={itinerary._id} />
       )})}  */}
        
        </ScrollView>
        
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

const mapDispatchToProps = {
    fetchearCiudad: ciudadesActions.fetchearCiudad,
    fetchearCiudades: ciudadesActions.fetchearCiudades,
    fetchearItinerarioPorCiudad: itineraryActions.fetchearItinerarioPorCiudad
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);

const styles = StyleSheet.create({
        wrapperDetails: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        heroDetails:{
            height: 400,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -50,
        },
        h1tittleheroDetails:{
            
        },
    
  });
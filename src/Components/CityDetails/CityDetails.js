import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ciudadesActions from '../../redux/actions/ciudadesActions';

function CityDetails(props) {
console.log("🚀 ~ file: CityDetails.js ~ line 7 ~ CityDetails ~ props", props.route.params)
    
    const {id} = props.route.params

    const {todasCiudades: data, cargando:isLoaded, ciudad: city} = props

    

    useEffect(() => {
        fetchearCiudad(id)
        fetchearCiudades()
        fetchearItinerarioPorCiudad(id)
    },[id])

    console.log("🚀 ~ file: CityDetails.js ~ line 20 ~ CityDetails ~ city", city)

    return(
    <>
    
    </>
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
}


export default connect(mapStateToProps, mapDispatchToProps)(CityDetails);
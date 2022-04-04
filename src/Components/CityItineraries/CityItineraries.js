import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import ItinerariesLikes from '../ItinerariesLikes/ItinerariesLikes.js';
import { AntDesign } from '@expo/vector-icons';

function CityItineraries(props) {


      const bill1 = ' 💵 '

      const {itinerary, index} = props
      

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
    <View style={styles.likesSection}>
    <AntDesign name="like1" size={24} color="black" style={styles.likesIcon} />
    <Text style={styles.likesCount}>{itinerary.likes.length}</Text>
    </View>
    <ItinerariesLikes id={itinerary._id} likes={itinerary.likes} />
    
    {/* <FlatList data={itinerary.comments} 
    renderItem={(item)=>
        (<View>
            <Text>{item.comment}</Text>
        </View>)} 
    keyExtractor={item => item._id}  /> */}
    
    {console.log("🚀 ~ file: CityItineraries.js ~ line 45 ~ CityItineraries ~ itinerary.comments", itinerary.comments)}
    {itinerary.comments.map((comment)  => {
        return (
        <View style={styles.commentSection}>
        <View style={styles.profileField}>
        <Image style={styles.imgProfileUser} source={{ uri:`${comment.userID.profileurl}`}} />
        <Text style={styles.textProfile}>{comment.userID.firstName}</Text>
        </View>
        <Text style={styles.textComment}>{comment.comment}</Text>
        </View>
    )})}

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
    commentSection:{
        backgroundColor: 'white',
        borderRadius: 16,
        margin: 5,
    },
    profileField:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 8,
    },
    imgProfileUser:{
        width: 30,
        height: 30,
        borderRadius: 360,
        marginRight: 8,
    },
    textProfile:{
        fontSize: 20,
    },
    textComment:{
        fontSize: 20,
        marginLeft: 16,
    },
    likesSection:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 16,
        marginTop: -55,
    },
    likesIcon:{
        color: '#00aced',
        fontSize: 30,
    },
    likesCount:{
        fontSize: 30,
    },
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import itineraryActions from '../../redux/actions/itineraryActions'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const ItinerariesLikes = (props) => {


// const likesAndDislikes = async()=>{
//   let likesObj
//   props.likes.some(like => like === props.user.id) 
//   ? (likesObj = {
//       "idItinerary" : props.id , 
//       "idUser" : props.user.id, 
//       "boolean" : false
//   }) : 
//   (likesObj = {
//       "idItinerary" : props.id , 
//       "idUser" : props.user.id, 
//       "boolean" : true
//   }) 

//   const funcLikes = await props.LikesDislikes(likesObj)
//   if(funcLikes.success){
//       props.fetchearItinerarioPorCiudad(id)
//   }
// }

  return (
    <View>

      
      
    </View>
  )
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
  }
  
  const mapDispatchToProps = {
    LikesDislikes: itineraryActions.LikesDislikes,
    fetchearItinerarioPorCiudad: itineraryActions.fetchearItinerarioPorCiudad

  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ItinerariesLikes);

const styles = StyleSheet.create({})
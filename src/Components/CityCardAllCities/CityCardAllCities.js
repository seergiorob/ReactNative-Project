import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import React from 'react';
import ciudadesActions from '../../redux/actions/ciudadesActions.js';
import { useEffect } from 'react';
import { connect } from 'react-redux';


function CityCardAllCities(props) {

  const {todasCiudades: data, filtro: search, ciudades: dataSearcheada, cargado: isLoaded} = props;
  const {filtrar, fetchearCiudades} = props;

  useEffect(() => {
    !isLoaded && 
    fetchearCiudades()

  }, []) 

  function handleChange(text) {
    filtrar(text.toLowerCase().trim());
  }



  return (
    <View style={styles.cardwrapperCity}>

<TextInput
      style={styles.inputSearch}
      label="Search Cities"
      value={search}
      placeholder={'Search Cities'}
      onChangeText={(text) => handleChange(text)}
      />
      <View style={styles.positionCard}>
        {/* <TextField
          
          style={styles.inputSearch"
          id="outlined-basic"
          label="Search Cities"
          variant="outlined"
          value={search}
          onChange={handleChange}
        /> */}
      

        {/* {
        !isLoaded ? (<Text>Loading..</Text>) : dataSearcheada.length === 0 ? (<Text>We're Sorry! We can't find any city for your search term. Please try another one.</Text>) : 
        dataSearcheada?.map((city, index) => 
        <TouchableOpacity key={index} style={styles.container}
          onPress={() => props.navigation.navigate('City', {
            id:city._id
          })}>
            <Image source={{ uri: `https://mytineraryrob.herokuapp.com/img/${city.image}`}} style={styles.image}/>
            <Text style={styles.text}> {city.name} </Text>
          
        </TouchableOpacity>

        )} */}


        <View style={styles.positionCardCards}>
          
          {/* {
          !isLoaded ? (<Text>Loading..</Text>) :
          dataSearcheada.length === 0 ? (<Text>We're Sorry! We can't find any city for your search term. Please try another one.</Text>) :
          dataSearcheada?.map((city) =>  */}
          {
          !isLoaded ? (<Text>Loading..</Text>) : dataSearcheada.length === 0 ? (<Text>We're Sorry! We can't find any city for your search term. Please try another one.</Text>) : 
        dataSearcheada?.map((city, index) => 

          (
            <View style={styles.cardbodyCity} key={city.name}>
              {city.travelers < 4000 ? <Text> </Text> : (
              <View style={styles.badgeCardCity}> 
              <Text>TOP DESTINATION</Text>
              </View>)}
              <Image
                style={styles.imgcardBody}
                source={{ uri: `https://mytineraryrob.herokuapp.com/img/${city.image}`}}
              />

              <View style={styles.cardtextCity}>
                <Text style={styles.h3titlecardCity}>{city.name}</Text>
                <View style={styles.cardCityTextDisplay}>
                <Image
                style={styles.flagCardCity}
                source={{ uri: `https://mytineraryrob.herokuapp.com/img/flags/${city.flag}`}}
              />
              
                </View>
              </View>
              <Text style={styles.reviewcardCity}>
                {city.description}
              </Text>
              <View style={styles.btnCardCities}> 
              <Button style={styles.btnCardC} title={'MORE INFORMATION'} >
                {/* <LinkRouter to={`Details/${city._id}`}> */}
                  
                  {/* </LinkRouter> */}
                  </Button>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

const mapDispatchToProps = {
  fetchearCiudades: ciudadesActions.fetchearCiudades,
  filtrar: ciudadesActions.filtrar,
}

const mapStateToProps = (state) => {
  return {
    todasCiudades: state.ciudadesReducer.todasCiudades,
    ciudades: state.ciudadesReducer.ciudades,
    cargado: state.ciudadesReducer.cargado,
    filtro: state.ciudadesReducer.filtro,
    ciudad: state.ciudadesReducer.ciudad,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CityCardAllCities)


// const styles = StyleSheet.create({
//   container: {
//       position: "relative",
//       width: "100%",
//       height: 300,
//       marginBottom: 10,

//   },
//   image: {
//       width: "100%",
//       height: "100%",

//   },
//   text: {
//       width: "100%",
//       color: "white",
//       fontSize: 20,
//       lineHeight: 84,
//       fontWeight: "bold",
//       textAlign: "center",
//       backgroundColor: "#000000c0",
//       zIndex: 10,
//       position: "absolute",
//       top: "40%"
//   },
//   inputSearch:{
//     marginTop: 10,
//     marginBottom: 10,
//     fontSize: 25,
//     textAlign: 'center',
//     height: 50,
//     color: "black",
//     backgroundColor: "white",
//   }
// });

const styles = StyleSheet.create({
    cardbodyCity: {
        position: 'relative',
        width: 350,
        height: 500,
        backgroundColor: 'white',
        borderRadius: 16,
        margin: 16,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 5 },
        shadowRadius: 10,
        borderWidth: 1,
    },
    imgcardBody: {
        width: 350,
        height: 230,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    h3titlecardCity: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'left',
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 16,
    },
    reviewcardCity: {
        width: '80%',
        margin: 'auto',
        fontStyle: 'italic',
        fontSize: 12,
    },
    cardTextCity:{
        width: '80%',
        margin: 'auto',
    },
    iconCity:{
        alignItems: 'center',
        margin: 8,
    },
    reviewcardCity:{
        width: '90%',
        margin: 'auto',
        marginTop: 8,
        marginLeft: 16,
    },
    positionCard:{
        flexDirection: 'column',
        margin: 16,
    },
    positionCardCards:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeCardCity: {
        width: 160,
        padding: 5,
        backgroundColor: 'red',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 0,
        zIndex: 10,
    },
      inputSearch:{
        marginTop: 10,
        marginBottom: 10,
        fontSize: 25,
        textAlign: 'center',
        height: 50,
        color: "black",
        backgroundColor: "white",
      },
      btnCardCities:{
        marginTop: '24%',
        justifyContent: 'flex-end',
      },
      flagCardCity:{
        position: 'absolute',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 360,
        width: 70,
        height: 70,
        top: -80,
        right: 15,
      }

})
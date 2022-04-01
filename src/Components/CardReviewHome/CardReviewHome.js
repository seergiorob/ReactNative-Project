import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import comments from '../../../assets/datoscoment'
import { FontAwesome } from '@expo/vector-icons';

let commentsArray = [];

comments.sort((a, b) => Math.random() - 0.5)

for(let i = 0; i < 3; i++){
    commentsArray.push(comments[i])
}

export default function CardReviewHome() {
  return (
    <View style={styles.generalcard}>

            <Text style={styles.h2titlecard}>What people are saying..</Text>

            

        <View style={styles.cardwrapper1}>
            {commentsArray.map(user => 

            <View style={styles.cardbody1} key={user.name}>

                <Image style={styles.imgcard1} source={{uri:`${user.imgcity}`}} />
                <Image style={styles.imgcard2} source={{uri:`${user.img}`}}/>
                
                <View style={styles.cardtext}>
                <Text style={styles.cardtexth3} >{user.name}</Text>
                <Text style={styles.stars}>{user.rate}<FontAwesome name="star" size={24} color="orange" /> </Text>
                <Text style={styles.reviewcardp}>"{user.comment}"</Text>
                </View>
            </View>
            )}
            

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    generalcard: {
        backgroundColor: 'whitesmoke',
        marginBottom: 40,
    },
    cardwrapper1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    h2titlecard: {
        margin: '7%',
        color: 'black',
        fontSize: 20,
        textAlign: 'center',

    },
    cardbody1: {
        margin:'2%',
        height: 450,
        width: 300,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        borderRadius: 16,
    },
    cardtext: {
        height: 230,
        margin: '4%',
    },
    cardtexth3: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:'4%',
        // width: '100%',
        textAlign: 'center',
    },
    reviewcardp: {
        lineHeight: 20,
        fontStyle: 'italic',
        color: 'black',
        textAlign: 'center',
    },
    imgcard1: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        height: 150,
        width: 300,
        // objectFit: 'cover',
    },
    imgcard2: {
        borderRadius: 360,
        height: 110,
        width: 110,
        position: 'absolute',
        top: 95,
        left: 95,
    },
    stars: {
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: 8,
        marginBottom: 14,
    },



})
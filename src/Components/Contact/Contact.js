import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Contact() {
  return (
    <View style={styles.wrapperContact}>
            <View>
                <View style={styles.titleContact}>
                    <Text style={styles.titleContact1}>Mytinerary travel Experience</Text>
                    <Text style={styles.titleContact}>In our company it is the people who make a difference. Our travel experts craft the perfect trip for every traveler through our award-winning customer service. Real people helping real people. <Text>Beside you every step of the way.</Text></Text>
                </View>
                <View style={styles.iconsContact}>
                    <View style={styles.itemsContact}>
                    {/* <LocalPhoneIcon style={styles.iconContact}/> */}
                    <Text style={styles.textCallsContact}>Connect by Phone</Text>
                    <Text>(011) 40323987</Text>
                    </View>
                    <View style={styles.itemsContact}>
                    {/* <LocationOnIcon style={styles.iconContact}/> */}
                    <Text style={styles.textCallsContact}>Connect in Store</Text>
                    <Text>Olga Cossettini 1540, CABA</Text>
                    </View>
                    <View style={styles.itemsContact}>
                    {/* <EmailIcon style={styles.iconContact}/> */}
                    <Text style={styles.textCallsContact}>Connect by Email</Text>
                    <Text>Olga Cossettini 1540, CABA</Text>
                    </View>
                </View>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    wrapperContact:{
        backgroundColor: 'white',
        width: '100%',
    },
    containerContact: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContact: {
        fontSize: 20,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        textAlign: 'center',
    },
    titleContact1: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        textAlign: 'center',
    },
    textCallsContact: {
        fontSize: 17,
        fontStyle: 'italic',
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        textAlign: 'center',
    },
    iconsContact: {
        
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    itemsContact: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
    },

})
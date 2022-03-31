import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

function UsHome() {
  return (
    <View style={styles.homeUsWrapper}>
        <Text style={styles.textHomeUsTitle}>Why people choose us?</Text>
        <View>
            <Text style={styles.textHomeUsBlack}>Guidance</Text>
            <Text style={styles.textHomeUs}>Expert insight and travel knowledge.</Text>
        </View>

        <View>
            <Text style={styles.textHomeUsBlack}>Value</Text>
            <Text style={styles.textHomeUs}>Irresistible rates, offers and benefits.</Text>
        </View>

        <View>
            <Text style={styles.textHomeUsBlack}>Peace of Mind</Text>
            <Text style={styles.textHomeUs}>Book with confidence.</Text>
        </View>

        <View>
            <Text style={styles.textHomeUsBlack}>Service</Text>
            <Text style={styles.textHomeUs}>Beside you every step of the way.</Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    homeUsWrapper: {
      flex: 1,
      width: '100%',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 400
      
    },
    textHomeUsTitle: {
        padding: 16,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
    textHomeUs: {
        padding: 16,
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    },
    textHomeUsBlack: {
        padding: 16,
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    }
    
  });

export default UsHome
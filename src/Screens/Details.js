import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import CityDetails from '../Components/CityDetails/CityDetails.js'
import MyStack from '../Navigation/Stack.js'

function Details({navigation}) {
    return(
        <NavigationContainer>
        <ScrollView>
        <MyStack/>
        <CityDetails navigation={navigation} />
        
        </ScrollView>
        </NavigationContainer>
    )
    
}
export default Details;
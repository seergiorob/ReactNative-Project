import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useRef, useState } from 'react'
import userActions from '../../redux/actions/userActions.js';
import { connect } from 'react-redux';

function SignUpComponent(props) {

    console.log(props)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState('')

    const handleSubmit = (event) => {
  
        event.preventDefault()
    
        const userData = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          profileurl: photo,
        //   country: country,
          from: 'signup'
        }
        props.signUpUser(userData)
    
        }

  return (
    <View>
      
      <TextInput
      type="text"
      style={styles.inputSearch}
      label="firstName"
      placeholder={'First Name'}
      onChangeText={(text) => setFirstName(text)}
      />

<TextInput
      type="text"
      style={styles.inputSearch}
      label="lastName"
      placeholder={'Last Name'}
      onChangeText={(text) => setLastName(text)}
      />

      <TextInput
      type="text"
      style={styles.inputSearch}
      label="email"
    //   value={email}
      placeholder={'email'}
      onChangeText={(text) => setEmail(text)}
      />

    <TextInput
      style={styles.inputSearch}
      label="password"
      placeholder={'Password'}
      type="text"
      onChangeText={(text) => setPassword(text)}
      />

<TextInput
      style={styles.inputSearch}
      label="photo"
      placeholder={'Add a url with your best photo!'}
      type="text"
      const onChangeText={(text) => setPhoto(text)}
      />

<Button 
    type="submit"
    title="Sign In"
    onPress={handleSubmit}
    >
    </Button>

    </View>
  )
}

const styles = StyleSheet.create({})

const mapDispatchToProps = {
    signUpUser: userActions.signUpUser,
  }
  const mapStateToProps = (state) => {
    return {
      message: state.userReducer.message,
      message2: state.userReducer.message2,
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
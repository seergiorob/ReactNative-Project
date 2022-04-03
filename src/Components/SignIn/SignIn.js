import { StyleSheet, Text, View, Button, TextInput  } from 'react-native'
import React, { useRef, useState } from 'react'
import userActions from '../../redux/actions/userActions.js';
import { connect } from 'react-redux';

function SignIn(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


  const handleSubmit = () => {
  
    // event.preventDefault()
    

    const loggedUser = {
      email: email,
      password: password,
      from: "signup"
    }
    console.log(loggedUser)
    props.signInUser(loggedUser);
    
  };

  return (
    <View>
    
    <TextInput>
    {props.user?.firstName}
    </TextInput>

    <TextInput
      type="email"
      style={styles.inputSearch}
      label="firstName"
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
  signInUser: userActions.signInUser,
  }
  const mapStateToProps = (state) => {
    return {
      user: state.userReducer.user,
      message: state.userReducer.message,
      message2: state.userReducer.message2,
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
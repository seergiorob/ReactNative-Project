import { StyleSheet, Text, View, Button, TextInput, Image  } from 'react-native'
import React, { useRef, useState } from 'react'
import userActions from '../../redux/actions/userActions.js';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

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
  console.log(props.user)
  return (
    <View style={styles.wrapperSignIn}>
    
    {props.user ? ( 
      
    <View>
    <Image style={styles.imgLogged} source={{ uri: `${props.user.profileurl}`}} />
    <Text style={styles.textLogged}>You are logged in as: {props.user.firstName}</Text>
    </View>) 
    
    : ( 

      <>
    <FontAwesome style={styles.userIcon} name="user-circle" size={24} color="black" />

    <TextInput >
    {props.user?.firstName}
    </TextInput>

    <TextInput
      type="email"
      style={styles.userInput}
      label="firstName"
      placeholder={'email'}
      onChangeText={(text) => setEmail(text)}
      />

    <TextInput
      style={styles.userInput}
      label="password"
      placeholder={'Password'}
      type="text"
      secureTextEntry={true}
      onChangeText={(text) => setPassword(text)}
      />

    <Button
    // style={styles.button} 
    type="submit"
    title="Sign In"
    onPress={handleSubmit}
    >
    </Button>
    </>
    )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapperSignIn: {
    backgroundColor: 'white',
    borderRadius: 16,
    margin: 30,
    height: 500,
  },
  userInput: {
    margin: 30,
    fontSize: 18,
    backgroundColor: 'whitesmoke',
    padding: 10,
    borderRadius: 16,
  },
  userIcon: {
    margin: 30,
    fontSize: 130,
    color: 'whitesmoke',
    textAlign: 'center',
  },
  imgLogged: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius:360,
    alignSelf: 'center',
    margin: 50,
    marginTop: 100,
  },
  textLogged: {
    fontSize: 25,
    textAlign: 'center',
  },
  
})

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
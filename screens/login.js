import React from "react"
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    SafeAreaView,
    KeyboardAvoidingView,
    TextInput,
    ImageBackground,
    Image
} from "react-native"
import db from '../config'
import firebase from 'firebase';

const bgImage=require("../Images/login.jpg");
const logo= require("../Images/logo.png")

export default class LoginScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

  handleLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("screen3");
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

    gotohomescreen=()=>{
        this.props.navigation.navigate('screen1')
    }


    render() {
        const { email, password } = this.state;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                
                <ImageBackground source={bgImage} style={styles.bgImage}>
               <View>
               <Image source={logo} style={styles.logo2}/>

               </View>
                
                <View>
                    <TextInput
                        style={[{flex:.5},styles.textinput, {marginTop:70}]}
                        onChangeText={text => this.setState({ email: text })}
                        placeholder={"Enter email id"}
                        placeholderTextColor={"#fff"}
                        autoFocus
                    />


                    <TextInput
                        style={[styles.textinput,{marginTop:20}]}
                        onChangeText={text => this.setState({ password: text })}
                        placeholder={"Enter your password"}
                        placeholderTextColor={"#fff"}
                        autoFocus
                    />


                    <TouchableOpacity
                        style={[styles.button, {marginTop:'80%'}]}
                        onPress={this.handleLogin(email, password)}>
                        <Text>LOGIN</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={[styles.button, {marginTop:20}]}
                        onPress={this.gotohomescreen}
                        >
                        <Text>Back</Text>

                    </TouchableOpacity>

                </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: "#fff"
    },
    textinput: {
        width: "75%",
        height: 60,
        padding: 10,
        fontSize: 18,
        borderColor: "red",
        borderWidth: 4,
        borderRadius: 10,
        backgroundColor: "#62B371",
        alignSelf:"center",
    },
    button: {
        width: "43%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#06a8ff",
        borderColor:"brown",
        borderRadius: 15,
        borderWidth: 4,
        alignSelf:"center"

    },
    bgImage:{
         display: "flex",
        flexDirection: 'vertical',
        height:"100%",
        width: "100%",
        resizeMode: 'repeat',
    },
    logo2: {
      flex:1,
      width: 200,
      height: 200,
      resizeMode:"contain",
      resizeMethod:"resize",
      left: 78,
      top: 2,
      bottom: 0
    }
})

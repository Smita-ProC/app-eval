import React from "react";
import {Audio} from 'expo-av';
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


const bgImage=require("../Images/bgImg2.png");
const logo= require("../Images/logo.png");

export default class DashboardScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    
     playSound=async()=>{
    await Audio.setIsEnabledAsync(true);   
    await Audio.Sound.createAsync(
      {uri: "http://soundbible.com/grab.php?id=2197&type=mp3"},
      {shouldPlay: true}
    );
     }

    waterReminder=()=>{
setInterval((this.playSound),1.8e+6)
}

    gotohomescreen=()=>{
        this.props.navigation.navigate('screen1')
    }




    render() {
        const { email, password } = this.state
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                
                <ImageBackground source={bgImage} style={styles.bgImage}>
              
               <Image source={logo} style={styles.logo}/>

              
                
                <View style={{marginTop: '30%'}}>

                    <TouchableOpacity
                        style={styles.button}
                         onPress={(this.waterReminder)}>
                        <Text>Activate</Text>

                    </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{
                     Audio.setIsEnabledAsync(false);
                    }}>
                        <Text>STOP</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.gotohomescreen}>
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
        marginTop:20,
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
        marginTop:20,
        alignSelf:"center"

    },
    bgImage:{
         display: "flex",
        flexDirection: 'vertical',
        height:"100%",
        width: "100%",
        resizeMode: 'repeat',
    },
    logo: {
      //flex:1,
      width: 200,
      height: 200,
      resizeMode:"stretch",
      resizeMethod:"scale",
      justifyContent: 'center',
      alignSelf:"center",
      marginTop: 50,
    }
})

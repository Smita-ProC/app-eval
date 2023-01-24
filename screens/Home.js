import React from "react"
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    SafeAreaView,
    KeyboardAvoidingView,
    TextInput,
    ImageBackground
} from "react-native"


const bgImage=require("../Images/bgImg.jpeg");

export default class HomeScreen extends React.Component {

gotologinscreen=()=>{
    this.props.navigation.navigate('screen2')
}
gotodashboardscreen=()=>{
    this.props.navigation.navigate('screen3')
}




    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }





    render() {
        const { email, password } = this.state
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                
                <ImageBackground source={bgImage} style={styles.bgImage}>
               
                
                <View>
                  


                    <TouchableOpacity
                        style={[styles.button, {marginTop:'70%'}]}
                        onPress={this.gotologinscreen}>

                        <Text>Login</Text>

                    </TouchableOpacity>

                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.gotodashboardscreen}>


                        <Text>Dashboard</Text>

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
        backgroundColor: "pink",
        alignSelf:"center",
    },
    button: {
        width: "43%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
       backgroundColor: "#ae4dae",
        borderColor:"#330033",
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
    }
})

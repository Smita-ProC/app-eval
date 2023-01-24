import React from "react"
import LoginScreen from "./screens/login"
import HomeScreen from "./screens/Home"
import {createSwitchNavigator,createAppContainer} from "react-navigation"
import DashboardScreen from "./screens/Dashboard"

export default class App extends React.Component{
render(){
    return(
       <AppNavigator/>
    )
}

}

const AppSwitchNavigator=createSwitchNavigator({
    screen1:HomeScreen,
    screen2:LoginScreen,
    screen3:DashboardScreen
})

const AppNavigator= createAppContainer(AppSwitchNavigator)
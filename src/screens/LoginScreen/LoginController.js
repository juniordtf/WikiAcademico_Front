import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import axios from "axios";


//export const onSignIn = () => AsyncStorage.setItem(userToken, "true");


/*
export const allowUser = async (credentials) => {

  await axios
    .request({
      method: "post",
      url: "http://localhost:4321/api/Users/login",
      data: credentials
    })
    .then(response => {
      let user = response.data.id;
      if (response.status == 200) {
        AsyncStorage.setItem("userToken", user);
        const { navigate } = this.props.navigation;
        navigate("drawerStack");
      }
    })
    .catch(function(error) {
      if (error.response) {
        Alert.alert("E-mail ou senha inválidos!");
        console.log(error.response.status);
      }
    });
};
*/


//export const onSignOut = () => AsyncStorage.removeItem(userToken);


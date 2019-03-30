import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Provider, connect } from "react-redux";
import createStore from "./src/redux/store"
import AppNavigation from "./src/routes/AppNavigation";
import ReduxNavigation from "./src/routes/ReduxNavigation";



// create our store
const store = createStore()


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

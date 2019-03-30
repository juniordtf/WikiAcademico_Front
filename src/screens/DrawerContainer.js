import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  AsyncStorage
} from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

class DrawerContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = async () => {
    const acc = await AsyncStorage.getItem("userToken");

    axios
      .post("http://localhost:4321/api/Users/logout?access_token=" + acc)
      .then(response => {
        console.log(response.body);
      })
      .catch(err => console.log(err));

    //this.props.navigation.navigate("login");
    await AsyncStorage.clear();

    const { navigation } = this.props;
    //navigation.navigate("login");

    /*
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'loginStack',
        action: NavigationActions.navigate({ routeName: 'login' }),
      }),
    );
    */

  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.buttonSection}>
        <Image source={require("../../assets/user.png")} />
          </View>
        <Text
          onPress={() => navigation.navigate("Home")}
          style={styles.uglyDrawerItem}
        >
          Home
        </Text>
        <Text
          onPress={() => navigation.navigate("Perfil")}
          style={styles.uglyDrawerItem}
        >
          Perfil
        </Text>
        <Text
          onPress={() => navigation.navigate("Cursos")}
          style={styles.uglyDrawerItem}
        >
          Cursos
        </Text>
        <Text
          onPress={() => navigation.navigate("Avaliacoes")}
          style={styles.uglyDrawerItem}
        >
          Avaliações
        </Text>
        <Text
          onPress={() => navigation.navigate("Notas")}
          style={styles.uglyDrawerItem}
        >
          Notas
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    paddingTop: 40,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E73536",
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: "#E73536",
    borderWidth: 1,
    textAlign: "center"
  },
  buttonSection: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(DrawerContainer);

import React from "react";
import {
  Platform,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  Alert,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Icon,
  Left,
  Right,
  Title,
  Input,
  Button,
  Item
} from "native-base";
import { NavigationActions } from "react-navigation";
import styles from "./style";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: () => (
      <Image
        source={{ uri: `https://dummyimage.com/60x60/000/fff.jpg&text=1` }}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />
    )
  };

  //importação do nome do usuário
  componentDidMount() {
    const userId = this.props.navigation.getParam("userId");

    axios
      .get("http://ec2-13-58-129-180.us-east-2.compute.amazonaws.com:4321/api/Users/:"+userId)
      .then(response => {
        this.setState({ username: response.data.username });
      })
      .catch(err => console.log(err));
  }

  //realização de logout
  logout = async () => {
    const acc = await AsyncStorage.getItem("userToken");

    axios
      .post("http://ec2-13-58-129-180.us-east-2.compute.amazonaws.com:4321/api/Users/logout?access_token=" + acc)
      .then(response => {
        console.log(response.body);
      })
      .catch(err => console.log(err));

    this.props.navigation.navigate("loginStack");
    await AsyncStorage.clear();
  };

  render() {
    return (
      <Container>
        <Header style={styles.header} iosBarStyle="light-content">
          <Left>
            <Button
              iconLeft
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" style={{ color: "#FFF" }} />
            </Button>
          </Left>
          <Body>
            <Text style={styles.title}>Home</Text>
          </Body>
          <Right>
            <Button transparent onPress={() => this.logout()}>
              <Text style={{ fontSize: 18, color: "white" }}>Sair</Text>
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          <Text />
          <View style={styles.homeSection}>
            <Image source={require("../../assets/book.png")} />
            <Image source={require("../../assets/SistemaAcademico.png")} />
            <Text />
            <Text />
            <Text style={styles.welcome}>
              Bem vindo ao Wiki Sistema Acadêmico!
            </Text>
          </View>
          <Text style={styles.messageText}>Central de notificações</Text>
          <View style={styles.messageSection}>
            <Text style={styles.messageTextInner}>
              Você possui atividades não visualizadas nas seguintes categorias:
            </Text>
            <Text />
            <Text style={styles.messageTextInner}>* Cursos (2);</Text>
            <Text style={styles.messageTextInner}>* Notas (1);</Text>
            <Text style={styles.messageTextInner}>* Avaliações (1);</Text>
          </View>
          <Text />
        </Content>
      </Container>
    );
  }
}

export default Home;

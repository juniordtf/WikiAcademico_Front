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
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Item,
  Body,
  Icon,
  Left,
  Right,
  Title,
  Input,
  Form,
  Label
} from "native-base";
import axios from "axios";
import { connect } from "react-redux";
import styles from "../style";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  //comunicação com a API para realização de Login
  allowUser = async () => {
    const credentials = {
      email: this.state.email,
      password: this.state.password
    };

    await axios
      .request({
        method: "post",
        url: "http://ec2-13-58-129-180.us-east-2.compute.amazonaws.com:4321/api/Users/login",
        data: credentials
      })
      .then(response => {
        this.setState({ token: response.data.id });
        let user = response.data.id;
        let userId = response.data.userId;
        if (response.status == 200) {
          AsyncStorage.setItem("userToken", user);
          const { navigate } = this.props.navigation;
          navigate("drawerStack", {userId});
          this.setState({
            email: "",
            password: ""
          });
        }
      })
      .catch(function(error) {
        if (error.response) {
          Alert.alert("E-mail ou senha inválidos!");
          console.log(error.response.status);
        }
      });
  };

  //chamada a função de Login e validaçãoes de usuário 
  onSubmit = async () => {
    try {
      if (this.state.email.length == 0) {
        Alert.alert("Campo e-mail não preenchido!");
      } else if (this.state.password.length == 0) {
        Alert.alert("Campo senha não preenchido!");
      } else if (this.state.password.length <= 5) {
        Alert.alert("A senha deve ter ao menos 6 caracteres!");
      } else {
        this.allowUser();
      }
    } catch (error) {
      Alert.alert(error);
    }
  };

  //validação do e-mail
  validateEmail = () => {
    if (this.state.email == "" || this.state.email.length < 7) {
      return false;
    } else {
      return true;
    }
  };

  //validação do password
  validatePassword = () => {
    if (this.state.password == "" || this.state.email.password < 5) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <Container>
        <Header style={styles.header} iosBarStyle="light-content">
          <Left />
          <Body>
            <Text style={styles.title}>Wiki</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text />
          <View style={styles.buttonSection}>
            <Image source={require("../../../assets/book.png")} />
            <Image source={require("../../../assets/SistemaAcademico.png")} />
          </View>
          <Text />
          <Text />
          <Text />
          <Text style={styles.topic}> Login</Text>
          <Form>
            <Item
              success={this.validateEmail() ? true : false}
              error={!this.validateEmail() ? true : false}
              floatingLabel
            >
              <Label>E-mail</Label>
              <Input
                autoCapitalize="none"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                maxLength={25}
              />
            </Item>
            <Item
              success={this.validatePassword() ? true : false}
              error={!this.validatePassword() ? true : false}
              floatingLabel
            >
              <Label>Senha</Label>
              <Input
                autoCapitalize="none"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                maxLength={15}
              />
            </Item>
            <Text />
          </Form>
          <View style={styles.buttonSection}>
            <TouchableHighlight
              underlayColor="#2A4809"
              style={styles.button}
              onPress={() => this.onSubmit()}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableHighlight>
          </View>

          <Button
            onPress={() => this.props.navigation.navigate("cadastro")}
            title="Criar cadastro"
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(Login);

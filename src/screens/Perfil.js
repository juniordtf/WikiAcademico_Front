import React from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Content,
  Body,
  Button,
  Icon
} from "native-base";
import styles from "./style";

export default class Perfil extends React.Component {
  static navigationOptions = {
    drawerLabel: "Perfil",
    drawerIcon: () => (
      <Image
        source={{ uri: `https://dummyimage.com/60x60/000/fff.jpg&text=2` }}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />
    )
  };

  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      telefone: "",
      email: "",
      nasc: "",
      endereco: "",
      sexo: "",
      mat: "",
      contatos: [],
      carregando: true
    };
  }

  adicionarPerfil = () => {
    let nome = this.state.nome;
    let telefone = this.state.telefone;
    let email = this.state.email;
    let nasc = this.state.nasc;
    let endereco = this.state.endereco;
    let sexo = this.state.sexo;
    let mat = this.state.mat;
  };

  atualizarPerfil = () => {};

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
              <Icon name="menu" style={{color: '#FFF'}} />
            </Button>
          </Left>
          <Body>
            <Text style={styles.title}>Perfil</Text>
          </Body>
          <Right/>
        </Header>
        <Content style={styles.content}>
          <TextInput
            onChangeText={nome => this.setState({ nome })}
            style={styles.input}
            value={this.state.nome}
            placeholder="Nome"
          />
          <TextInput
            onChangeText={telefone => this.setState({ telefone })}
            style={styles.input}
            value={this.state.telefone}
            placeholder="Telefone"
          />
          <TextInput
            onChangeText={email => this.setState({ email })}
            style={styles.input}
            value={this.state.email}
            placeholder="Email"
          />
          <TextInput
            onChangeText={nasc => this.setState({ nasc })}
            style={styles.input}
            value={this.state.nasc}
            placeholder="Data de Nascimento"
          />
          <TextInput
            onChangeText={endereco => this.setState({ endereco })}
            style={styles.input}
            value={this.state.endereco}
            placeholder="Endereço"
          />
          <TextInput
            onChangeText={sexo => this.setState({ sexo })}
            style={styles.input}
            value={this.state.sexo}
            placeholder="Sexo"
          />
          <TextInput
            onChangeText={mat => this.setState({ mat })}
            style={styles.input}
            value={this.state.mat}
            placeholder="Nº de matrícula"
          />
          <TouchableHighlight
            underlayColor="#2A4809"
            style={styles.button}
            onPress={this.adicionarPerfil}
          >
            <Text style={styles.buttonText}>Criar perfil</Text>
          </TouchableHighlight>

          {this.state.contatos.map((item, index) => {
            return (
              <View key={index} style={styles.item}>
                <Text>Nome: {item.nome}</Text>
                <Text>Telefone: {item.telefone}</Text>
                <Text>Email: {item.email}</Text>
                <Text>Data de nascimento: {item.nasc}</Text>
                <Text>Endereço: {item.endereco}</Text>
                <Text>Sexo: {item.sexo}</Text>
                <Text>Nº de matrícula: {item.mat}</Text>
                <Text
                  style={styles.bigBlue}
                  onPress={() => this.atualizarPerfil(item)}
                >
                  Editar perfil
                </Text>
                <Text
                  style={styles.red}
                  onPress={() => this.removerPerfil(item)}
                >
                  Remover cadastro
                </Text>
                <Text />
                <Text />
              </View>
            );
          })}
        </Content>
      </Container>
    );
  }
}

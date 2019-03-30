import React from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Icon,
  Left,
  Right,
  Title,
  Input,
  Item
} from "native-base";
import styles from "./style";

export default class Matriculas extends React.Component {
  constructor(props) {
    super(props);

    this.adicionarItem = this.adicionarItem.bind(this);
    this.exibirItens = this.exibirItens.bind(this);
    this.excluirItemDaLista = this.excluirItemDaLista.bind(this);
    this.state = {
      itensCompra: [
        { id: 0, valor: "Cálculo I" },
        { id: 1, valor: "Educação Corporal e Formação  Profissional I" },
        { id: 2, valor: "Geometria Analítica e Álgebra Vetorial" },
        { id: 3, valor: "Introdução à Engenharia" }
      ],
      novoItem: "",
      idUltimoItem: 3
    };
  }

  logout = async () => {
    const acc = await AsyncStorage.getItem("userToken");

    axios
      .post("http://localhost:4321/api/Users/logout?access_token=" + acc)
      .then(response => {
        console.log(response.body);
      })
      .catch(err => console.log(err));

    this.props.navigation.navigate("loginStack");
    await AsyncStorage.clear();
  };

  excluirItemDaLista(idItem) {
    let itensAtuais = this.state.itensCompra;

    let itensRestantes = itensAtuais.filter(item => {
      return item.id != idItem;
    });

    this.setState({
      itensCompra: itensRestantes
    });
  }

  exibirItens() {
    let itensNoCard = this.state.itensCompra.map(item => {
      return (
        <CardItem>
          <Text>{item.valor}</Text>
          <Button
            iconLeft
            transparent
            onPress={() => this.excluirItemDaLista(item.id)}
          >
            <Icon name="close" />
          </Button>
        </CardItem>
      );
    });

    return (
      <Card>
        <CardItem header>
          <Text>Pedidos de matrícula</Text>
        </CardItem>

        {itensNoCard}
      </Card>
    );
  }

  adicionarItem() {
    if (this.state.novoItem.length > 0) {
      let novoItem = this.state.novoItem;
      let proximoId = this.state.idUltimoItem + 1;
      let itensAtuais = this.state.itensCompra;

      itensAtuais.push({
        id: proximoId,
        valor: novoItem
      });

      this.setState({
        itensCompra: itensAtuais,
        idUltimoItem: proximoId,
        novoItem: ""
      });
    }
  }

  render() {
    let itens = this.exibirItens();
    return (
      <Container>
        <Header style={styles.header} iosBarStyle="light-content">
          <Left/>
          <Body>
          <Text style={styles.title}>Wiki Acadêmico</Text>
          </Body>
          <Right/>
        </Header>
        <Content style={styles.content}>
          <Card>
            <CardItem header>
              <Text>Disciplinas do 1º período</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Item>
                  <Input
                    placeholder="Disciplina..."
                    value={this.state.novoItem}
                    onChangeText={novoItem => this.setState({ novoItem })}
                    maxLength={15}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => this.adicionarItem()}>
              <Text>Adicionar pedido </Text>
            </CardItem>
          </Card>
          {itens}
        </Content>
      </Container>
    );
  }
}

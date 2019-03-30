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
  Title
} from "native-base";
import styles from "./style";

export default class Avaliacoes extends React.Component {
  static navigationOptions = {
    drawerLabel: "Avaliacoes",
    drawerIcon: () => (
      <Image
        source={{ uri: `https://dummyimage.com/60x60/000/fff.jpg&text=4` }}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />
    )
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
              <Icon name="menu" style={{color: '#FFF'}} />
            </Button>
          </Left>
          <Body>
            <Text style={styles.title}>Avaliações</Text>
          </Body>
          <Right/>
        </Header>
        <Content style={styles.content}>
          <Text />
          <Text>
            {" "}
            Disciplinas que estão sendo cursadas no 1º semestre de 2019:
          </Text>
          <Text />
          <Card>
            <CardItem header>
              <Text>Cálculo I</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV01: Prova teórica a ser aplicada dia 20/03/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV02: Prova teórica a ser aplicada dia 18/05/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV03: Prova teórica a ser aplicada dia 27/06/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV03: Trabalho a ser entregue dia 02/07/19</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Educação Corporal e Formação Profissional I</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV01: Prova teórica a ser aplicada dia 20/03/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV02: Prova teórica a ser aplicada dia 18/05/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV03: Prova teórica a ser aplicada dia 27/06/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV03: Trabalho a ser entregue dia 02/07/19</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Geometria Analítica e Ágebra Vetorial</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV01: Prova teórica a ser aplicada dia 20/03/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV02: Prova teórica a ser aplicada dia 18/05/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV03: Prova teórica a ser aplicada dia 27/06/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV03: Trabalho a ser entregue dia 02/07/19</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Introdução à Engenharia</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV01: Prova teórica a ser aplicada dia 20/03/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV02: Prova teórica a ser aplicada dia 18/05/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV03: Prova teórica a ser aplicada dia 27/06/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV03: Trabalho a ser entregue dia 02/07/19</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Laboratório de Química</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV01: Prova teórica a ser aplicada dia 20/03/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV02: Prova teórica a ser aplicada dia 18/05/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV03: Prova teórica a ser aplicada dia 27/06/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV03: Trabalho a ser entregue dia 02/07/19</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Química</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV01: Prova teórica a ser aplicada dia 20/03/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV02: Prova teórica a ser aplicada dia 18/05/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV03: Prova teórica a ser aplicada dia 27/06/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV03: Trabalho a ser entregue dia 02/07/19</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Laboratório de Programação de Computadores I</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV01: Prova teórica a ser aplicada dia 20/03/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV02: Prova teórica a ser aplicada dia 18/05/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV03: Prova teórica a ser aplicada dia 27/06/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV03: Trabalho a ser entregue dia 02/07/19</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Programação de Computadores I</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV01: Prova teórica a ser aplicada dia 20/03/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV02: Prova teórica a ser aplicada dia 18/05/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV03: Prova teórica a ser aplicada dia 27/06/19</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>AV03: Trabalho a ser entregue dia 02/07/19</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

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

export default class Cursos extends React.Component {
  static navigationOptions = {
    drawerLabel: "Cursos",
    drawerIcon: () => (
      <Image
        source={{ uri: `https://dummyimage.com/60x60/000/fff.jpg&text=3` }}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />
    )
  };

  render() {
    return (
      <Container>
        <Header style={styles.header} iosBarStyle="light-content">
        <Left>
          <Button iconLeft transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='menu' style={{color: '#FFF'}} />
            </Button>
            </Left>
          <Body>
          <Text style={styles.title}>Cursos</Text>
          </Body>
          <Right/>
        </Header>
        <Content style={styles.content}>
          <Text />
          <Text> Disciplinas do 1º período</Text>
          <Text />
          <Card>
            <CardItem header>
              <Text>Cálculo I</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Código: 2DG.002</Text>
                <Text>CH: 30</Text>
                <Text>CR: 02</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Educação Corporal e Formação Profissional I</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Código: 2DB.003</Text>
                <Text>CH: 90</Text>
                <Text>CR: 06</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Geometria Analítica e Ágebra Vetorial</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Código: 2DB.004</Text>
                <Text>CH: 90</Text>
                <Text>CR: 06</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Introdução à Engenharia</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Código: 2DG.001</Text>
                <Text>CH: 30</Text>
                <Text>CR: 02</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Laboratório de Química</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Código: 2QUI.009</Text>
                <Text>CH: 30</Text>
                <Text>CR: 02</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Química</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Código: 2QUI.008</Text>
                <Text>CH: 60</Text>
                <Text>CR: 04</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Laboratório de Programação de Computadores I</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Código: 2ECOM.002</Text>
                <Text>CH: 30</Text>
                <Text>CR: 02</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Programação de Computadores I</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Código: 2ECOM.001</Text>
                <Text>CH: 30</Text>
                <Text>CR: 02</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

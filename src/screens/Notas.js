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

export default class Notas extends React.Component {
  static navigationOptions = {
    drawerLabel: "Notas",
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
          <Button iconLeft transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='menu' style={{color: '#FFF'}} />
            </Button>
            </Left>
          <Body>
          <Text style={styles.title}>Notas</Text>
          </Body>
          <Right/>
        </Header>
        <Content style={styles.content}>
          <Text />
          <Text> Disciplinas que estão sendo cursadas:</Text>
          <Text />
          <Card>
            <CardItem header>
              <Text>Cálculo I</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Avaliação Peso Nota</Text>
                <Text> AV01 01 25</Text>
                <Text> AV02 01 22</Text>
                <Text> AV03 01 21</Text>
                <Text> AV04 01 --</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Educação Corporal e Formação Profissional I</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Avaliação Peso Nota</Text>
                <Text> AV01 01 25</Text>
                <Text> AV02 01 18</Text>
                <Text> AV03 01 20</Text>
                <Text> AV04 01 --</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Geometria Analítica e Ágebra Vetorial</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Avaliação Peso Nota</Text>
                <Text> AV01 01 25</Text>
                <Text> AV02 01 22</Text>
                <Text> AV03 01 21</Text>
                <Text> AV04 01 --</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Introdução à Engenharia</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Avaliação Peso Nota</Text>
                <Text> AV01 01 25</Text>
                <Text> AV02 01 24</Text>
                <Text> AV03 01 --</Text>
                <Text> AV04 01 --</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Laboratório de Química</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Avaliação Peso Nota</Text>
                <Text> AV01 01 20</Text>
                <Text> AV02 01 22</Text>
                <Text> AV03 01 19</Text>
                <Text> AV04 01 --</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Química</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Avaliação Peso Nota</Text>
                <Text> AV01 01 24</Text>
                <Text> AV02 01 21</Text>
                <Text> AV03 01 21</Text>
                <Text> AV04 01 --</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Laboratório de Programação de Computadores I</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Avaliação Peso Nota</Text>
                <Text> AV01 01 22</Text>
                <Text> AV02 01 22</Text>
                <Text> AV03 01 25</Text>
                <Text> AV04 01 --</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Programação de Computadores I</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Avaliação Peso Nota</Text>
                <Text> AV01 01 20</Text>
                <Text> AV02 01 22</Text>
                <Text> AV03 01 23</Text>
                <Text> AV04 01 --</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

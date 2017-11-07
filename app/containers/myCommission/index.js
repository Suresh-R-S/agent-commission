import React,{Component} from 'react';
import { Container, Header, Title, Button , Left, Icon, Right, Body, Content,Text } from "native-base";


export default class MyCommission extends Component{
  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>My Commission</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>My commission report here!</Text>
        </Content>
      </Container>
    )
  }
}

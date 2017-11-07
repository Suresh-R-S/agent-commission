import React from "react";
import { Header, Title, Button , Left , Right, Icon, Body } from "native-base";

const NavBar = (props) => {
  return (
    <Header>
      <Left>
        <Button
          transparent
          onPress={() => props.LeftIconPressed()}>
          <Icon name={props.LeftIcon} />
        </Button>
      </Left>
      <Body>
        <Title>{props.Title}</Title>
      </Body>
      <Right />
    </Header>
  )
}

export default NavBar;

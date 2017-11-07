import React,{Component} from "react";
import { Container, Content, Text, List, ListItem } from "native-base";
import {MenuItems} from '../../constants/sideMenuOptions';

const SideMenu = (props) => {
  return (
    <Container>
      <Content>
        <List
          dataArray={MenuItems}
          renderRow={data => {
            return (
              <ListItem
                button
                onPress={() => props.navigation.navigate(data.component)}>
                <Text>{data.name}</Text>
              </ListItem>
            );
          }}
        />
      </Content>
    </Container>
  )
}

export default SideMenu;

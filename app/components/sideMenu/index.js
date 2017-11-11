import React,{Component} from "react";
import {View, Image} from 'react-native';
import { Container, Content, Text, List, ListItem } from "native-base";
import {MenuItems} from '../../constants/sideMenuOptions';
import imageUrl from '../../constants/images';
import DeviceInfo from 'react-native-device-info';
import styles from './styles';

const SideMenu = (props) => {
  return (
    <Container>
      <Content>
        <View style={styles.appNameContainer}>
          <View style={styles.appIconImageContainer}>
            <Image
              style={styles.appIconImage}
              source={imageUrl.appIcon}
            />
          </View>
          <Text style={styles.appNameText}>Agent Commission LIC</Text>
          <Text style={styles.versionText}>v{DeviceInfo.getVersion()}</Text>
        </View>
        <List
          dataArray={MenuItems}
          renderRow={data => {
            return (
              <ListItem
                button
                onPress={() => props.navigation.navigate(data.component)}>
                <Text style={styles.menuItemText}>{data.name}</Text>
              </ListItem>
            );
          }}
        />
      </Content>
    </Container>
  )
}

export default SideMenu;

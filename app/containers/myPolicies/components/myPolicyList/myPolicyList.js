import React,{Component} from 'react';
import {View, FlatList} from 'react-native';
import { Container, Content, Text } from "native-base";
import Header from '../../../../components/header';
import styles from './styles';
import ListData from '../../../../constants/policyListData';
import ListItem from '../policyListItem';
import firebaseApp from '../../../../services/firebase';
import Loader from '../../../../components/loader'


class MyPolicyList extends Component{

  static navigationOptions = {
    header : null,
    gesturesEnabled:false
  }

  componentDidMount(){
    this.props.actions.fetchMyPolicyList();
  }

  renderHeader = () => {
    return (
      <Header
        Title="My Policies"
        LeftIcon="menu"
        LeftIconPressed={() => this.props.navigation.navigate("DrawerOpen")}
      />
    )
  }

  listItemPressed = (data) => {
    this.props.actions.policylistClicked(data);
    this.props.navigation.navigate('PolicyDetails');
  }

  renderList = () => {
    if(!this.props.listData.length){
      return(<Loader Text="No records found in policy list."/>)
    }
    else{
      return(
        <FlatList
          data = {this.props.listData}
          keyExtractor={(item)=>item.id}
          showsVerticalScrollIndicator = {false}
          initialNumToRender = {4}
          renderItem = {({item}) =>
            <ListItem
              ItemPressed = {this.listItemPressed}
              Data={item}
            />
          }
          />
      )
    }
  }

  renderLoader = () => {
    return(
      <Loader/>
    )
  }

  render(){
    return(
      <Container>
        {this.renderHeader()}
        <Content>
        {this.props.fetching ? this.renderLoader() : this.renderList()}
        </Content>
      </Container>
    )
  }
}

export default MyPolicyList;

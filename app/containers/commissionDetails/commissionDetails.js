import React,{Component} from 'react';
import { Container, Button , Left, Item, Input ,Icon, Right, Body, Content,Text } from "native-base";
import { View, FlatList } from 'react-native';
import TotalCommission from '../myCommission/components/totalCommission/totalCommission';
import CommissionListItem from '../myCommission/components/commissionListItem/commissionListItem';
import Header from '../../components/header';
import styles from './styles';

export default class CommissionDetails extends Component{

  static navigationOptions = {
    header : null,
    gesturesEnabled:false
  }

  renderHeader = () => {
    return (
      <Header
        Title="My Commission"
        LeftIcon="md-arrow-back"
        LeftIconPressed={() => this.props.navigation.goBack()}
      />
    )
  }

  renderList = () => {
      return(
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{this.props.commissionDetails.name}, {this.props.searchYear}</Text>
          </View>
          <TotalCommission Rate={this.props.commissionDetails.monthCommission}/>
          <View style={styles.listContainer}>
            <FlatList
              data = {this.props.commissionDetails.monthData}
              keyExtractor={(item)=>item.policy_no}
              showsVerticalScrollIndicator = {false}
              initialNumToRender = {4}
              renderItem = {({item}) =>
                <CommissionListItem
                  Data={item}
                />
              }
              />
          </View>
        </View>
      )
  }

  render(){
    return(
      <Container>
        {this.renderHeader()}
        <Content padder>
          {this.renderList()}
        </Content>
      </Container>
    )
  }
}

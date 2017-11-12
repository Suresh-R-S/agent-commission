import React,{Component} from 'react';
import { Container, Button, Item, Input ,Icon, Right, Body, Content,Text } from "native-base";
import { View, FlatList, NetInfo, Alert } from 'react-native';
import moment from 'moment';
import TotalCommission from '../totalCommission/totalCommission';
import CommissionListItem from '../commissionListItem/commissionListItem';
import Loader from '../../../../components/loader';
import styles from './styles';
import Header from '../../../../components/header';


export default class MyCommission extends Component{

  static navigationOptions = {
    header : null,
    gesturesEnabled:false
  }

  componentDidMount(){
    this.callCommissionListFunction();
  }

  componentWillUnmount(){
    this.props.actions.searchYearDataChanged('2015');
  }

  callCommissionListFunction = () => {
    NetInfo.isConnected.fetch().then(isConnected => {
      if(isConnected)
        this.props.actions.fetchMyCommissionList(this.props.searchYear);
      else {
        this.callNetworkErrorFunction();
      }
    });
  }

  callNetworkErrorFunction = () => {
    Alert.alert(
      'No Internet Connection',
      'Kindly, check your connection and try again.',
      [
        {text: 'Try Again', onPress: () => this.callCommissionListFunction()}
      ],
      { cancelable: false }
    )
  }

  renderHeader = () => {
    return (
      <Header
        Title="My Commission"
        LeftIcon="menu"
        LeftIconPressed={() => this.props.navigation.navigate("DrawerOpen")}
      />
    )
  }

  renderSearchBar = () => {
    return (
      <View>
        <Item>
          <Icon name="ios-search" />
          <Input
            value={this.props.searchYear}
            onChangeText={(text) => this.props.actions.searchYearDataChanged(text)}
            placeholder="Enter year.." />
          <Button
            onPress={() => this.props.actions.fetchMyCommissionList(this.props.searchYear)}
            transparent
          >
            <Text>Go</Text>
          </Button>
        </Item>
      </View>
    )
  }

  listItemPressed = (data) => {
    this.props.actions.myCommissionlistClicked(JSON.parse(JSON.stringify(data)));
    this.props.navigation.navigate('CommissionDetails');
  }

  renderList = () => {
    if( this.props.listData.yearData == undefined || !this.props.listData.yearData.length){
      return(<Loader Text="No records found in commission list."/>)
    }
    else{
      return(
        <View>
          <TotalCommission Rate={this.props.listData.yearTotal}/>
          <View style={styles.listContainer}>
            <FlatList
              data = {this.props.listData.yearData}
              keyExtractor={(item)=>item.name}
              showsVerticalScrollIndicator = {false}
              initialNumToRender = {4}
              renderItem = {({item}) =>
                <CommissionListItem
                  ItemPressed = {this.listItemPressed}
                  Data={item}
                />
              }
              />
          </View>
        </View>
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
        <Content padder>
          {this.renderSearchBar()}
          {this.props.fetching ? this.renderLoader() : this.renderList()}
        </Content>
      </Container>
    )
  }
}

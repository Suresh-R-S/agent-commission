import React,{Component} from 'react';
import {View} from 'react-native';
import { Container, Icon , Body, Content, Text, Item, Label } from "native-base";
import Header from '../../components/header';
import styles from './styles';
import moment from 'moment';

class PolicyDetails extends Component{

  static navigationOptions = {
    header : null,
    gesturesEnabled:false
  }

  renderHeader = () => {
    return (
      <Header
        Title="My Policies"
        LeftIcon="md-arrow-back"
        LeftIconPressed={() => this.props.navigation.goBack()}
      />
    )
  }

  renderInput = (label,text) => {
    return(
      <Item style={styles.formItem} stackedLabel>
        <Label>{label}</Label>
        <Text style={styles.premiumModePicker}>{text}</Text>
      </Item>
    )
  }

  render(){
    const {pristine, submitting, listItem} = this.props;
    return(
      <Container>
        {this.renderHeader()}
        <Content>
          {this.renderInput("Policy No.",listItem.policy_no)}
          {this.renderInput("Policy Holder",listItem.policy_holder)}
          {this.renderInput("Date",moment(listItem.date_of_joining).format('DD/MM/YYYY'))}
          {this.renderInput("Plan",listItem.insurance_plan)}
          {this.renderInput("Term",`${listItem.insurance_term} years`)}
          {this.renderInput("Sum Assured",`Rs. ${listItem.sum_assured}`)}
          {this.renderInput("Premium Amount",`Rs. ${listItem.premium_amount}`)}
          {this.renderInput("Single Premium",listItem.single_premium ? 'Yes' : 'No' )}
          { !listItem.single_premium ? <View>
          <View style={styles.commissionHeader}>
            <Text style={styles.commissionText}>Premium Mode</Text>
          </View>
          {this.renderInput("Premium Mode",listItem.premium_mode)}
          </View> : <View/>}
          <View style={styles.commissionHeader}>
            <Text style={styles.commissionText}>Agent Commission</Text>
          </View>
          {this.renderInput("1st year",`${listItem.commission_1} %`)}
          {!listItem.single_premium ? this.renderInput("2nd year",`${listItem.commission_2} %`) : <View/> }
          {!listItem.single_premium ? this.renderInput("3rd year and above",`${listItem.commission_rest} %`) : <View/>}
        </Content>
      </Container>
    )
  }
}

export default PolicyDetails;

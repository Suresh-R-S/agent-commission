import React,{Component} from 'react';
import {View, DatePickerAndroid, TouchableHighlight} from 'react-native';
import { Container, Icon , Body, Content, Text, Input, Item, Label, Picker , Button , CheckBox, Spinner } from "native-base";
import Header from '../../components/header';
import premiumModes from '../../constants/premiumModeOptions';
import { reduxForm , Field } from 'redux-form';
import styles from './styles';
import moment from 'moment';

class AddPolicy extends Component{

  componentDidMount(){
    this.props.initialize({
      date : this.props.selectedDate,
      singlePremium : this.props.singlePremium,
      premiumMode : this.props.premiumModeValue,
      commission2 : 0,
      commissionRest : 0
    });
  }

  renderHeader = () => {
    return (
      <Header
        Title="Add Policy"
        LeftIcon="menu"
        LeftIconPressed={() => this.props.navigation.navigate("DrawerOpen")}
      />
    )
  }

  renderInput = ({ input, label, type, meta: { touched, error, warning } }) => {
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
    return(
      <View>
      <Item style={styles.formItem} stackedLabel error= {touched && hasError}>
        <Label>{label}</Label>
        <Input
          autoCorrect={false}
          {...input}
        />
      </Item>
      {touched && hasError ? <Text style={styles.errorText1}>{error}</Text> : <Text />}
      </View>
    )
  }

  renderPicker = ({ input, label, type, meta: { touched, error, warning } }) => {
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
    return(
      <Item style={styles.premiumModePicker} underline={false} error= {hasError}>
        <Picker
          style={styles.premiumModePicker}
          mode="dropdown"
          selectedValue={this.props.premiumModeValue}
          onValueChange={(val) => this.onPickerValueChange(val,input)}
          {...input}
        >
          {this.pickerItemFunction()}
        </Picker>
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
  }

  renderDatePicker = ({ input, label, type, options,  meta: { touched, error, warning } }) => {
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
    return(
      <Item style={styles.formItem} stackedLabel error= {touched && hasError}>
        <Label style={touched && hasError && styles.errorText}>{label}</Label>
        <TouchableHighlight underlayColor='transparent' style={styles.datePickerContainer} onPress={() => this.showPicker(input,options)}>
          <Input disabled value={moment(this.props.selectedDate).format('DD/MM/YYYY')}/>
        </TouchableHighlight>
      </Item>
    )
  }

  pickerItemFunction = () => {
    return premiumModes.map((item,index)=> {
      return (
        <Item key={item.value} label={item.label} value={item.value}/>
      )
    });
  }

  onPickerValueChange = (value,input) => {
    this.props.actions.changePremiumModeValue(value);
    return input.onChange(value);
  }

  renderCheckbox = ({ input, label, type, meta: { touched, error, warning } }) => {
    return(
      <View style={styles.singlePremiumContainer}>
        <Label style={styles.singlePremiumCheckboxLabel}>{label}</Label>
        <View style={styles.singlePremiumCheckbox}>
          <CheckBox
            checked={this.props.singlePremium}
            onPress={() => this.onCheckboxValueChange(input)}
            {...input}
          />
        </View>
      </View>
    )
  }

  onCheckboxValueChange = (input) => {
    let currentStatus = this.props.singlePremium;
    this.props.actions.changeSinglePremiumStatus(!currentStatus);
    return input.onChange(!currentStatus);
  }

  showPicker = async (input,options) => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action !== DatePickerAndroid.dismissedAction) {
      // Selected year, month (0-11), day
        let selectedDate = new Date(year, month, day);
        let newState = Object.assign({},options);
        newState.date = selectedDate;

        this.props.actions.changePolicyDate(moment(selectedDate).utc().valueOf())
        return input.onChange(moment(selectedDate).utc().valueOf())
      }
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  }

  render(){
    const {pristine, submitting} = this.props;
    return(
      <Container>
        {this.renderHeader()}
        <Content>
          <Field name = "policy_no" label = "Policy No." component = {this.renderInput}/>
          <Field name = "name" label = "Policy Holder" component = {this.renderInput}/>
          <Field name = "date" label = "Date (DD/MM/YYYY)" component = {this.renderDatePicker}/>
          <Field name = "plan" label = "Plan" component = {this.renderInput}/>
          <Field name = "term" label = "Term (in years)" component = {this.renderInput}/>
          <Field name = "sum" label = "Sum Assured" component = {this.renderInput}/>
          <Field name = "premiumAmount" label = "Premium Amount" component = {this.renderInput}/>
          <Field name = "singlePremium" label = "Single Premium" component = {this.renderCheckbox}/>
          <View style={this.props.singlePremium && styles.hideView}>
            <View style={styles.commissionHeader}>
              <Text style={styles.commissionText}>Premium Mode {this.props.singlePremium ? '(Not Applicable)' : ''}</Text>
            </View>
            <Field name = "premiumMode" component = {this.renderPicker}/>
          </View>
          <View style={styles.commissionHeader}>
            <Text style={styles.commissionText}>Agent Commission (in %)</Text>
          </View>
          <Field name = "commission1" label = "1st year" component = {this.renderInput}/>
          <View style={this.props.singlePremium && styles.hideView}>
            <Field name = "commission2" label = "2nd & 3rd year" component = {this.renderInput}/>
            <Field name = "commissionRest" label = "3+ year" component = {this.renderInput}/>
          </View>
          {
            !this.props.fetching ?
            <Button disabled = {pristine || submitting} style={(pristine || submitting) ? styles.disabledSaveButton : styles.saveButton} onPress={this.props.handleSubmit(this.props.actions.savePolicyForm)} primary>
              <Text>Save</Text>
            </Button> :
            <Spinner color='blue' />
          }
        </Content>
      </Container>
    )
  }
}

const validate = (values,props) => {
  const errors = {};

  if (!values.policy_no) {
    errors.policy_no = 'Please enter the policy number'
  }
  else if(isNaN(values.policy_no)){
    errors.policy_no = 'Expected a number'
  }

  if (!values.name) {
    errors.name = 'Please enter the name of the policy holder'
  }

  if (!values.plan) {
    errors.plan = 'Please enter the LIC plan'
  }

  if (!values.term) {
    errors.term = 'Please enter the term of the policy'
  }
  else if(isNaN(values.term)){
    errors.term = 'Expected a number'
  }

  if (!values.sum) {
    errors.sum = 'Please enter the sum assured for the policy'
  }
  else if(isNaN(values.sum)){
    errors.sum = 'Expected a number'
  }

  if(!values.premiumAmount) {
    errors.premiumAmount = 'Please enter the premium amount for the policy'
  }
  else if(isNaN(values.premiumAmount)){
    errors.premiumAmount = 'Expected a number'
  }

  if(!values.commission1) {
    errors.commission1 = 'Please enter the commission rate'
  }
  else if(isNaN(values.commission1)){
    errors.commission1 = 'Expected a number'
  }

  if(!values.commission2 && !props.singlePremium) {
    errors.commission2 = 'Please enter the commission rate'
  }
  else if(isNaN(values.commission2) && !props.singlePremium){
    errors.commission2 = 'Expected a number'
  }

  if(!values.commissionRest && !props.singlePremium) {
    errors.commissionRest = 'Please enter the commission rate'
  }
  else if(isNaN(values.commissionRest) && !props.singlePremium){
    errors.commissionRest = 'Expected a number'
  }

  return errors
}

const reduxFormConfig = {form : 'addPolicyForm',validate};
export default reduxForm(reduxFormConfig)(AddPolicy);

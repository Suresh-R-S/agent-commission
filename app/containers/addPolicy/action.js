import * as actionTypes from '../../constants/actionTypes';
import premiumModes from '../../constants/premiumModeOptions';

export function savePolicyForm(values){
  let dataToSend = {
    policy_no       : values.policy_no,
    policy_holder   : values.name,
    date_of_joining : values.date,
    insurance_plan  : values.plan,
    insurance_term  : values.term,
    sum_assured     : values.sum,
    premium_amount  : values.premiumAmount,
    single_premium  : values.singlePremium,
    commission_1    : values.commission1,
    commission_2    : values.commission2,
    commission_rest : values.commissionRest
  };
  premiumModes.forEach((item) => {
    if(item.value == values.premiumMode)
      dataToSend.premium_mode = item.label;
  });
  return {
    type : actionTypes.SAVE_POLICY_FORM_START,
    payload : dataToSend
  }
}

export function changeSinglePremiumStatus(value){
  return {
    type : actionTypes.CHANGE_SINGLE_PREMIUM_VALUE,
    payload : value
  }
}

export function changePremiumModeValue(value){
  return {
    type : actionTypes.CHANGE_PREMIUM_MODE_VALUE,
    payload : value
  }
}

export function changePolicyDate(newDate){
  return {
    type : actionTypes.CHANGE_POLICY_DATE,
    payload : newDate
  }
}

export function confirmationModalToggle(value){
  return {
    type : actionTypes.CHANGE_CONFIRMATION_MODAL_STATUS,
    payload : value
  }
}

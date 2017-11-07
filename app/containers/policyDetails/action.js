import * as actionTypes from '../../constants/actionTypes';

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

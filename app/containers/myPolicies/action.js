import * as actionTypes from '../../constants/actionTypes';

export function fetchMyPolicyList(){
  return {
    type : actionTypes.MY_POLICY_LIST_START,
  }
}

export function policylistClicked(data){
  return {
    type : actionTypes.MY_POLICY_LIST_ITEM_CLICKED,
    payload : data
  }
}

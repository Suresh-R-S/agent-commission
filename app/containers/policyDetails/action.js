import * as actionTypes from '../../constants/actionTypes';

export function deletePolicyItem(policyNo,id){
  return {
    type : actionTypes.DELETE_POLICY_ITEM_START,
    payload : {policyNo,id}
  }
}

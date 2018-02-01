import { takeEvery,takeLatest } from 'redux-saga/effects';
import * as actionTypes from './constants/actionTypes';
import savePolicyFormSaga , { calculateAndCreateCommission } from './containers/addPolicy/saga';
import myPolicyListSaga from './containers/myPolicies/saga';
import myCommissionListSaga from './containers/myCommission/saga';
import deletePolicyItemSaga from './containers/policyDetails/saga';

export default function* watch() {
  yield[takeEvery(actionTypes.SAVE_POLICY_FORM_START, savePolicyFormSaga)]
  yield[takeEvery(actionTypes.MY_POLICY_LIST_START, myPolicyListSaga)]
  yield[takeEvery(actionTypes.MY_COMMISSION_LIST_START, myCommissionListSaga)]
  yield[takeEvery(actionTypes.CREATE_CALCULATE_COMMISSION, calculateAndCreateCommission)]
  yield[takeEvery(actionTypes.DELETE_POLICY_ITEM_START, deletePolicyItemSaga)]
}

import { takeEvery,takeLatest } from 'redux-saga/effects';
import * as actionTypes from './constants/actionTypes';
import savePolicyFormSaga , { calculateAndCreateCommission } from './containers/addPolicy/saga';
import myPolicyListSaga from './containers/myPolicies/saga';

export default function* watch() {
  yield[takeEvery(actionTypes.SAVE_POLICY_FORM_START, savePolicyFormSaga)]
  yield[takeEvery(actionTypes.MY_POLICY_LIST_START, myPolicyListSaga)]
  yield[takeEvery(actionTypes.CREATE_CALCULATE_COMMISSION, calculateAndCreateCommission)]
}

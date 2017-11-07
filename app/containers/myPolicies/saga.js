import { put, call } from 'redux-saga/effects';
import * as actionTypes from '../../constants/actionTypes';
import fetchListFromFirebase from '../../services/fetchListData';

export default function* myPolicyListFunction() {
    try {
      const listData = yield call(fetchListFromFirebase,'myPolicyList');
      yield put({ type: actionTypes.MY_POLICY_LIST_SUCCESS, payload : listData||[]});
    }
    catch(e){
      yield put({ type: actionTypes.MY_POLICY_LIST_FAILURE});
    }
}

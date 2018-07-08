import { put, call } from 'redux-saga/effects';
import * as actionTypes from '../../constants/actionTypes';
import fetchListFromFirebase from '../../services/fetchListData';
import _ from 'lodash';

export default function* myPolicyListFunction() {
    try {
      const listData = yield call(fetchListFromFirebase,'myPolicyList');
      const orderedData = yield _.sortBy(listData, 'date_of_joining');
      yield put({ type: actionTypes.MY_POLICY_LIST_SUCCESS, payload : orderedData||[]});
    }
    catch(e){
      yield put({ type: actionTypes.MY_POLICY_LIST_FAILURE});
    }
}
